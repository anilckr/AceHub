import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({ where: { email: "admin@acehub" } });
  console.log("Deleted admin@acehub");
}

main().finally(async () => prisma.$disconnect());
