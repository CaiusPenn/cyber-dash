import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function POST(request: Request) {
  const client = await pool.connect();
  
  try {
    const { answer, q_id, user_id } = await request.json();
    console.log('Received data:', { answer, q_id, user_id });

    await client.query('BEGIN');

    await client.query(
      'INSERT INTO answers (answer, q_id, user_id) VALUES ($1, $2, $3)',
      [answer, q_id, user_id]
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
