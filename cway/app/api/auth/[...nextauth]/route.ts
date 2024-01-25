import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { prisma, createUser, findUser } from "@/services/database";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile){
        return {
          id: profile.sub,
          email:profile.email,
          role: profile.role ?? "random-user"
        }
      }
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

    async jwt({token,user,trigger,session}){
      if (user){
        token.role == user.role
      }
      return token
  },

  async session({session,token}){
      session.user.role = token.role
    return session
  }
});

  

//creating user-profile in the database

export { handler};