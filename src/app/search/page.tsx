import PaginationBar from "@/components/PaginationBar"
import ProductCard from "@/components/ProductCard"
import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next"

type SearchPageProps = {
    searchParams: Promise<{ query: string; page: string }>
}

export async function generateMetadata({
    searchParams,
}: SearchPageProps): Promise<Metadata> {
    const { query } = await searchParams
    return {
        title: `Search ${query} - Ecommerce`,
    }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { query, page = "1" } = await searchParams
    const currentPage = parseInt(page)

    const pageSize = 6

    const totalItemCount = await prisma.product.count({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
            ],
        },
    })

    const totalPages = Math.ceil(totalItemCount / pageSize)

    const products = await prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
            ],
        },
        orderBy: { id: "desc" },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
    })

    if (products.length === 0) {
        return <div className="text-center">No products found.</div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
            {totalPages > 1 && (
                <PaginationBar
                    currentPage={currentPage}
                    totalPages={totalPages}
                    searchQuery={query}
                />
            )}
        </div>
    )
}
