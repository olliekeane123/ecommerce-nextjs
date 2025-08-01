import { Product } from "@/generated/prisma/client"
import Link from "next/link"
import PriceTag from "./PriceTag"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const isNew =
        Date.now() - new Date(product.createdAt).getTime() <
        1000 * 60 * 60 * 24 * 7
    return (
        <Link
            href={"/products/" + product.id}
            className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
        >
            <div className="card-body">
                <figure>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={800}
                        height={400}
                        className="h-48 object-cover"
                    />
                </figure>
                <h2 className="card-title">{product.name}</h2>
                {isNew && <div className="badge badge-secondary text-neutral font-bold">NEW</div>}
                <p>{product.description}</p>
                <PriceTag price={product.price} />
            </div>
        </Link>
    )
}
