import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request: Request) {
  const { userId, questionId, answer } = await request.json(); // Update to match your data structure

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Update existing answer if it exists
    const updateResult = await client.query(
      'UPDATE answers SET answer = $1 WHERE u_id = $2 AND q_id = $3',
      [answer, userId, questionId]
    );

    // If no row was updated, insert a new answer
    if (updateResult.rowCount === 0) {
      await client.query(
        'INSERT INTO answers (answer, u_id, q_id) VALUES ($1, $2, $3)',
        [answer, userId, questionId]
      );
    }

    await client.query('COMMIT');

    return NextResponse.json({ message: 'Survey submitted successfully!' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    client.release();
  }
}
