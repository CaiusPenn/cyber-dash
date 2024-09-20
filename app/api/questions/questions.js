import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const result = await sql.query('SELECT question FROM questions'); // Adjust the query as needed
    const questions = result.rows.map(row => row.question);
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
