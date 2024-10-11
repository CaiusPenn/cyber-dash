import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const name = cookies().get('name')?.value || null; // Access the 'name' cookie
  return NextResponse.json({ name }); // Return the name as JSON
}
