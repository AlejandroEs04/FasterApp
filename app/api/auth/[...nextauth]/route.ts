import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
              correo: { label: "Email", type: "text", placeholder: "Ej. correo@correo.com" },
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
              try {
                const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/login`, {
                  correo: credentials?.correo,
                  password: credentials?.password
                })

                const { data } = res

                return await data.result
              } catch (error) {
                return null
              } 
            }
          })
    ],
    pages: {
      signIn: "/auth/signIn",
      newUser: "/auth/newuser",
    },
    callbacks: {
      async session({ session, user, token }) {
        session.user = await token as any

        return await session
      },
      async jwt({ token, user }) {
        return {
          ...token,
          ...user
        }
      }
    },
});

export { handler as GET, handler as POST }