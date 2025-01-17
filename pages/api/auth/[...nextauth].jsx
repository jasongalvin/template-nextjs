import NextAuth from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

export const authOptions = {
  // Configure one or more authentication providers
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id_token = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.id_token = token.id_token;
      return session;
    },
  },
  providers: [
    CognitoProvider({
      checks: 'nonce',
      clientId: process.env.NEXT_AUTH_COGNITO_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_COGNITO_CLIENT_SECRET,
      issuer: `https://cognito-idp.${process.env.NEXT_AUTH_COGNITO_REGION}.amazonaws.com/${process.env.NEXT_AUTH_COGNITO_USER_POOL_ID}`,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
