import { prisma } from "@/lib/db/prisma"
import { notFound } from "next/navigation"
import Image from "next/image"
import PriceTag from "@/components/PriceTag"
import { Metadata } from "next"
import { cache } from "react"
import AddToCartButton from "./AddToCartButton"
import { incrementProductQuantity } from "./actions"

type Params = Promise<{ id: string }>

type ProductPageProps = {
    params: Params
}

const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } })

    if (!product) notFound()

    return product
})

export async function generateMetadata(
    props: ProductPageProps
): Promise<Metadata> {
    const params = await props.params
    const { id } = params
    const product = await getProduct(id)
    return {
        title: product.name + " - Ecommerce",
        description: product.description,
        openGraph: {
            images: [{ url: product.imageUrl }],
        },
    }
}

export default async function ProductPage(props: ProductPageProps) {
    const params = await props.params
    const { id } = params
    const product = await getProduct(id)

    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
                priority
            />
            <div>
                <h1 className="text-5xl font-bold">{product.name}</h1>
                <PriceTag price={product.price} className="mt-4" />
                <p className="py-6">{product.description}</p>
                <AddToCartButton
                    productId={product.id}
                    incrementProductQuantity={incrementProductQuantity}
                />
            </div>
        </div>
    )
}
