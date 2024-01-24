import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

    async authorize(credentials, req) {
        const { username, password } = credentials as any;
        const res = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
    },
    const user = await res.json();

        console.log({ user });

        if (res.ok && user) {
          return user;
        } else return null;
    ),
  ],
});

export { handler as GET, handler as POST };