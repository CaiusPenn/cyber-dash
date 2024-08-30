import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true; // If sign-in is successful, proceed
      } else {
        return false; // Otherwise, deny access
      }
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the login page after sign-out
      if (url === baseUrl + '/api/auth/signout') {
        return baseUrl + '/login'; // Redirect to login page after sign-out
      }
      // Redirect to dashboard after sign-in
      return baseUrl + '/dashboard';
    },
  },
  providers: [],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
