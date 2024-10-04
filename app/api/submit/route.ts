import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request: Request) {
  const client = await pool.connect();
  
  try {
    const { user_id, question_id, answer } = await request.json();

    await client.query('BEGIN');

    const updateResult = await client.query(
      'UPDATE answers SET user_id = $1 WHERE question_id = $2 AND answer = $3',
      [user_id, question_id, answer]
    );

    if (updateResult.rowCount === 0) {
      await client.query(
        'INSERT INTO answers (user_id, question_id, answer) VALUES ($1, $2, $3)',
        [user_id, question_id, answer]
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
