import { NextResponse } from 'next/server';
import { Pool } from 'pg';
/*wooo*/

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request: Request) {
  console.log("TESTING");
  const { answer, questionId, userId } = await request.json(); // Update to match your data structure
  console.log("TESTING AGAIN");
  const client = await pool.connect();
  console.log('Received data:', { answer, questionId, userId });
  
  try {
    await client.query('BEGIN');

    // Update existing answer if it exists
    const updateResult = await client.query(
      'UPDATE answers SET answer = $1 WHERE q_id = $2 AND user_id = $3',
      [answer, questionId, userId]
    );

    // If no row was updated, insert a new answer
    if (updateResult.rowCount === 0) {
      await client.query(
        'INSERT INTO answers (answer, q_id, user_id) VALUES ($1, $2, $3)',
        [answer, questionId, userId]
      );
    }

    await client.query('COMMIT');

    return NextResponse.json({ message: 'Survey submitted successfully!' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Database error:', error);
    console.log("WEIRD");
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    client.release();
  }
}
