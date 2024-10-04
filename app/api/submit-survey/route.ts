import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const client = await pool.connect();
    try {
      // Parse the incoming request data
      const { answer, q_id, user_id } = req.body;
      console.log('Received data:', { answer, q_id, user_id });

      // Start a transaction
      await client.query('BEGIN');

      // Attempt to update an existing answer if it exists
      const updateResult = await client.query(
        'UPDATE answers SET answer = $1 WHERE q_id = $2 AND user_id = $3',
        [answer, q_id, user_id]
      );

      // If no row was updated, insert a new answer
      if (updateResult.rowCount === 0) {
        await client.query(
          'INSERT INTO answers (answer, q_id, user_id) VALUES ($1, $2, $3)',
          [answer, q_id, user_id]
        );
      }

      // Commit the transaction
      await client.query('COMMIT');
      res.status(200).json({ message: 'Survey submitted successfully!' });
    } catch (error) {
      // Rollback in case of an error
      await client.query('ROLLBACK');
      console.error('Database error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } finally {
      client.release();
    }
  } else {
    // If the request method is not POST, return a 405 (Method Not Allowed) error
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
