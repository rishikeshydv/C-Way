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

async function findUser(_email: string){
const user = await prisma.transactions.findFirst({
  where:{
    email:_email,
  }
})
return user;
}

function updateUser(_email:string){
  prisma.transactions.update({
    where: {
      email:_email,
    },
    data: {
      role:"enrolled"
    }
  })
}

export {prisma, createUser, findUser, updateUser};