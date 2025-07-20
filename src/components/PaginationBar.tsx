import Link from "next/link"
import { JSX } from "react"

type PaginationBarProps = {
    currentPage: number
    totalPages: number
    searchQuery?: string | null
}

export default function PaginationBar({
    currentPage,
    totalPages,
    searchQuery = null,
}: PaginationBarProps) {
    const searchQueryUrl = searchQuery ? "/search?query=" + searchQuery : ""

    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10))
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9))

    const numberedPageItems: JSX.Element[] = []

    for (let page = minPage; page <= maxPage; page++) {
        numberedPageItems.push(
            <Link
                href={
                    searchQuery
                        ? searchQueryUrl + "&page=" + page
                        : "?page=" + page
                }
                key={page}
                className={`btn join-item ${currentPage === page ? "pointer-events-none btn-active" : ""}`}
            >
                {page}
            </Link>
        )
    }

    return (
        <>
            <div className="join hidden sm:block">{numberedPageItems}</div>
            <div className="join block sm:hidden">
                {currentPage > 1 && (
                    <Link
                        href={
                            searchQuery
                                ? searchQueryUrl + "&page=" + (currentPage - 1)
                                : "?page=" + (currentPage - 1)
                        }
                        className="btn join-item"
                    >
                        «
                    </Link>
                )}
                <button className="btn pointer-events-none join-item">
                    Page {currentPage}
                </button>
                {currentPage < totalPages && (
                    <Link
                        href={
                            searchQuery
                                ? searchQueryUrl + "&page=" + (currentPage + 1)
                                : "?page=" + (currentPage + 1)
                        }
                        className="btn join-item"
                    >
                        »
                    </Link>
                )}
            </div>
        </>
    )
}
