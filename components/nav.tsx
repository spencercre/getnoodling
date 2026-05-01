import Link from "next/link";

interface NavProps {
  currentPage?: "home" | "scribe" | "type";
}

export default function Nav({ currentPage }: NavProps) {
  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold hover:text-gray-300 transition"
        >
          GetNoodling
        </Link>
        <div className="flex gap-8 text-sm">
          <Link
            href="/scribe"
            className={currentPage === "scribe" ? "text-white" : "hover:text-gray-300 transition"}
          >
            Swift Scribe
          </Link>
          <Link
            href="/type"
            className={currentPage === "type" ? "text-white" : "hover:text-gray-300 transition"}
          >
            Swift Type
          </Link>
        </div>
      </div>
    </nav>
  );
}
