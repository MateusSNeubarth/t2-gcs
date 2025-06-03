const { prisma } = require("../config/db");

class User {
  static async create({ username, email, password }) {
    return prisma.user.create({
      data: {
        username,
        email,
        password,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
  }

  static async findByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  static async findById(id) {
    return prisma.user.findUnique({
      where: { id },
      select: { id: true, username: true, email: true }
    });
  }
}

module.exports = User;
