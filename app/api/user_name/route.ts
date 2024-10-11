import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  // Access the 'name' cookie
  const userName = cookies().get('name')?.value || "Guest"; 

  return NextResponse.json({ name: userName }); 
}
