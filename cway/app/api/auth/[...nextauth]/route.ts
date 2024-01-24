import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { prisma, createUser, findUser } from "@/services/database";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile !== undefined){ //checking if profile exists
        if (profile.email !== undefined){ //checking if email exists
        //checking if the account is already created
        var res = await findUser(profile.email);
        if (res) {
          //creating user doc on the database
          createUser(profile.email,"password","random-user","not-yet")
          .then(async () => {
            await prisma.$disconnect();
          })
          .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
          });
          }
        }
      }
      return true
    },

    // async authorize(credentials, req) {
    //     const { username, password } = credentials as any;
    //     const res = await fetch("http://localhost:8000/auth/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         username,
    //         password,
    //       }),
    //     });
    // },
    // const user = await res.json();

    //     console.log({ user });

    //     if (res.ok && user) {
    //       return user;
    //     } else return null;
    // ),
    })

//creating user-profile in the database

export { handler as GET, handler as POST };