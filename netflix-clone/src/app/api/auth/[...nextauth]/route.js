import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';

const authOptions = {
    providers : [
      GithubProvider({
        clientId : 'Iv1.5a085b35c3c34849',
        clientSecret : '2d4ad87c8c2f348966edc1aa7f4ffe612484786b',
      }),
    ],
    callbacks: {
        async session({ session, token, user }) {
             session.user.username = session?.user?.name
             .split("")
             .join("")
             .toLocaleLowerCase();

             session.user.uid = token.sub

             return session;
        },
    },
    secret: "default_secret_key",
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };