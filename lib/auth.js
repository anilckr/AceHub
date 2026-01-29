import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { z } from "zod";

import credentialsImport from "next-auth/providers/credentials";
const CredentialsProvider = credentialsImport?.default ?? credentialsImport;

export const authOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const schema = z.object({
            email: z.string().email(),
            password: z.string().min(6),
          });

          const { email, password } = schema.parse(credentials);

          const normalizedEmail = email.trim().toLowerCase();

          const user = await prisma.user.findUnique({
            where: { email: normalizedEmail },
          });
          if (!user) return null;

          const ok = await bcrypt.compare(password, user.passwordHash);
          if (!ok) return null;

          return { id: user.id, email: user.email, role: user.role };
        } catch {
          return null;
        }
      },
    }),
  ],

  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user && token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
