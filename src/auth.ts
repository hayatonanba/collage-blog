import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { auth, handlers } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // ログイン成功後のリダイレクト先を設定
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});