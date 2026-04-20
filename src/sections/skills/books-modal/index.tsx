import { X } from "lucide-react"
import type { Book } from "../types"

interface BookModal {
    selectedBook: Book
    setSelectedBook:  React.Dispatch<React.SetStateAction<Book>>
}

const BookModal = ({selectedBook, setSelectedBook} : BookModal) => {
    return (
        <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        onClick={() => setSelectedBook(null)}
        >
            <div 
            className="bg-[#1a1a1a] rounded-2xl max-w-lg w-full p-6 relative" 
            onClick={(e) => e.stopPropagation()}
            >
                <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">
                    {selectedBook.title}
                </h3>

                <p className="text-sm text-gray-400 mb-2">
                    Lido em: {selectedBook.readAt}
                </p>

                <p className="text-sm text-gray-300 mb-4">
                {selectedBook.description}
                </p>

                <a
                href={selectedBook.link}
                target="_blank"
                className="text-teal-400 hover:underline text-sm"
                >
                    Acessar livro →
                </a>

                <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-teal-400 cursor-pointer "
                >
                    <X/>
                </button>
            </div>
        </div>
    )
}

export default BookModal