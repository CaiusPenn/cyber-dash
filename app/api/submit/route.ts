// app/api/submit-survey/route.ts

import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(request: Request) {
  try {
    const { user_id, q_id, answer } = await request.json();

    if (!user_id || !q_id || answer === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    

   // return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error inserting answer:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
