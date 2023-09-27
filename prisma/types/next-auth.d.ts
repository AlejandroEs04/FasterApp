import NextAuth from "next-auth/next";
import { User } from "./interfaces";

declare module 'next-auth' {
    interface session {
        user: User
    }
}