import { PrismaClient } from "@/generated/prisma/client"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const prismaBase: PrismaClient = globalForPrisma.prisma || new PrismaClient()

export const prisma = prismaBase.$extends({
    query: {
        cart: {
            async update({ args, query }) {
                args.data = { ...args.data, updatedAt: new Date() }
                return query(args)
            },
        },
    },
})

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaBase
