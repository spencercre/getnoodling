import Link from "next/link";

interface NavProps {
  currentPage?: "home" | "scribe" | "type";
}

export default function Nav({ currentPage }: NavProps) {
  return (
    <nav style={{ background: "var(--cream)", borderBottom: "1px solid var(--border-soft)" }}
         className="px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" style={{ color: "var(--charcoal)", fontWeight: 700, fontSize: "1.2rem", textDecoration: "none" }}>
          GetNoodling
        </Link>
        <div className="flex gap-8" style={{ fontSize: "0.95rem" }}>
          <Link
            href="/scribe"
            style={{
              color: "var(--coral)",
              fontWeight: currentPage === "scribe" ? 700 : 500,
              textDecoration: "none",
            }}
          >
            Swift Scribe
          </Link>
          <Link
            href="/type"
            style={{
              color: "var(--coral)",
              fontWeight: currentPage === "type" ? 700 : 500,
              textDecoration: "none",
            }}
          >
            Swift Type
          </Link>
        </div>
      </div>
    </nav>
  );
}
