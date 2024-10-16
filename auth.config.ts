import type { NextAuthConfig } from 'next-auth';
import { checkRole } from './app/lib/session';
import { useEffect } from 'react';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const role = checkRole();
      
      const restricted = ['/dashboard/technical','/dashboard/organisational','/dashboard/social'];

      for (let i=0;i<restricted.length;i++){
        if (nextUrl.pathname.startsWith(restricted[i]) && !(role)){
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
  }

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.NEXTAUTH_SECRET
} satisfies NextAuthConfig;