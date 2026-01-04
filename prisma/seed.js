import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@acehub.local";
  const password = process.env.ADMIN_PASSWORD || "admin12345";

  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("Admin user already exists:", email);
    return;
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin user created:");
  console.log("Email:", email);
  console.log("Password:", password);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
