import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request: Request) {
  const { userId, question, answer } = await request.json();
  
  const client = await pool.connect(); 

  try {
    await client.query('BEGIN'); 

    const updateResult = await client.query(
      'UPDATE survey SET answer = $1 WHERE user_id = $2 AND question = $3',
      [answer, userId, question]
    );

    if (updateResult.rowCount === 0) {
      await client.query(
        'INSERT INTO survey (user_id, question, answer) VALUES ($1, $2, $3)',
        [userId, question, answer]
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