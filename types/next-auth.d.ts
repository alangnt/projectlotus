import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      firstname?: string | null
      lastname?: string | null
      dateofbirth?: string | null
      country?: string | null
    }
  }
}