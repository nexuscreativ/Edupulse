import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Demo credentials for PoC
                const demoUsers = [
                    { id: "1", email: "admin@school.edu.ng", name: "Admin User", role: "admin" },
                    { id: "2", email: "parent@example.com", name: "Parent User", role: "parent" },
                ]

                const user = demoUsers.find(u => u.email === credentials?.email)

                if (user) {
                    return { id: user.id, email: user.email, name: user.name, role: user.role }
                }

                return null
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as string
            }
            return session
        },
    },
})
