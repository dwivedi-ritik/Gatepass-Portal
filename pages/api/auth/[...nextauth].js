import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NEXTAUTH_SECRET }from "../../../utils/constants"
export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                if (credentials.email !== "root" || credentials.password !== "root") {
                    throw new Error("No user Found")
                }
                return {
                    name: "Sachin Jain",
                    email: credentials.email
                }
            }
        })
    ],
    secret: NEXTAUTH_SECRET
})