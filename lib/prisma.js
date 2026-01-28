if (process.env.VERCEL && process.env.NODE_ENV === "production") {
  console.warn("Prisma disabled during build on Vercel");
}

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
