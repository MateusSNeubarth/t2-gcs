const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
    process.exit(1);
  }
}

module.exports = {
  prisma,
  connect,
};