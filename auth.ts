import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { createSession } from '@/app/lib/session';



async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;

      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

  export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch){
              const manager_id = await sql<Number>`SELECT manager_id from departments WHERE manager_id=${user.id}`;
              const man_id = manager_id.rows[0];
              console.log(man_id);
              const user_id = <string><unknown>user.id;
              if (man_id){
                await createSession(user_id,user.username,"manager");
              }
              else{
                await createSession(user_id,user.username,"user");
              }
              return user as any;
            } 
          }
          return null;
        },
      }),
    ],
  });
