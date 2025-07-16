import { prisma } from "@/lib/db/prisma"

type ProductPageProps = {
    params: {
        id: string
    }
}

export default async function ProductPage({
    params: { id },
}: ProductPageProps) {
    const product = await prisma.product.findUnique({ where: { id } })

    return (
        <h1>{product?.name}</h1>
    )

}
