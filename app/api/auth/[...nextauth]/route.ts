import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              correo: { label: "Email", type: "text", placeholder: "Ej. correo@correo.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                  correo: credentials?.correo,
                  password:credentials?.password,
                })
              })

              const user = await res.json()

              if (user) {
                if(!user.result.confirmado) {
                  return null
                }
                
                return await user.result
              } else {
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
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