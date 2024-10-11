import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const userId = cookies().get('id')?.value || null; // Access the 'id' cookie

  return NextResponse.json({ id: userId }); // Return the user ID as JSON
}