import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (credentials.email != 'admin.geral@mail.com') {
            throw new Error('Invalid credentials.');
          }
  
          return {
            email: 'admin@mail.com',
            user_id: 12
          }
        } catch (error) {
          console.log('error---', error.message);

          throw error;
        } 
      }
    })
  ]
});