import { NextResponse } from 'next/server';
import { Pool } from 'pg';

console.log("getting question");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function GET() {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM questions'); // Adjust your query if necessary
    const questions = result.rows;

    return NextResponse.json(questions);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    client.release();
  }
}
