import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(id:string,user: string,job_type:string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const user_id = id;
  const name = user;
  const role = job_type;
  
  cookies().set('id', user_id, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })

  cookies().set('name', name, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
  cookies().set('role', role, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export function deleteSession() {
  cookies().delete('name');
  cookies().delete('role');
}