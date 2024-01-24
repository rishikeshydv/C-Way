import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(
  _email: string,
  _password: string,
  _role: string,
  _privateKey: string
) {
  await prisma.transactions.create({
    data: {
        email: _email,
        password: _password,
        role: _role,
        privateKey: _privateKey,
      },
  });
}

export {createUser};

// you can import 'createUser' and run it on other code file


// createUser(_email, _password, _role, _privateKey)
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
