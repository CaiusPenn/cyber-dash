import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request: Request) {
  const client = await pool.connect();
  
  try {
    const { q_id, user_id, answer } = await request.json();

    console.log( q_id, user_id, answer);

    await client.query('BEGIN');

    await client.query(
      `INSERT INTO answers (question_id, user_id, answer) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (user_id, question_id) 
       DO UPDATE SET answer = EXCLUDED.answer`,
      [q_id, user_id, answer]
    );
    

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
