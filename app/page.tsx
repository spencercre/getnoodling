"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--charcoal)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ background: "var(--cream)", borderBottom: "1px solid var(--border-soft)" }}
           className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div style={{ color: "var(--charcoal)", fontWeight: 700, fontSize: "1.2rem" }}>
            GetNoodling
          </div>
          <div className="flex gap-8" style={{ fontSize: "0.95rem" }}>
            <Link href="/scribe"
              style={{ color: "var(--coral)", fontWeight: 500, textDecoration: "none" }}>
              Swift Scribe
            </Link>
            <Link href="/type"
              style={{ color: "var(--coral)", fontWeight: 500, textDecoration: "none" }}>
              Swift Type
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero image */}
      <section style={{ background: "var(--cream)" }}>
        <Image
          src="/hero.png"
          alt="A flock of swifts in flight"
          width={1440}
          height={600}
          priority
          className="w-full object-cover"
          style={{ maxHeight: "600px", display: "block" }}
        />
      </section>

      {/* Headline + subheading */}
      <section className="px-6 py-16 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            color: "var(--charcoal)",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}>
            Stop typing.<br />Start noodling.
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#5A5A5A",
            maxWidth: "520px",
            margin: "0 auto 3.5rem",
            lineHeight: 1.65,
          }}>
            A suite of voice tools for people who think faster than they type.
          </p>

          {/* Product cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-4">

            {/* Swift Scribe */}
            <Link href="/scribe" style={{ textDecoration: "none" }}>
              <div style={{
                background: "#FFFFFF",
                boxShadow: "var(--card-shadow)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
                textAlign: "left",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
              }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--charcoal)" }}>
                    Swift Scribe
                  </h2>
                  <span style={{
                    background: "var(--coral)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: "50px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    Live
                  </span>
                </div>
                <p style={{ color: "#5A5A5A", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                  Silent meeting recorder. Transcripts arrive automatically. No setup per meeting.
                </p>
                <span style={{ color: "var(--coral)", fontWeight: 600, fontSize: "0.9rem" }}>
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Swift Type */}
            <Link href="/type" style={{ textDecoration: "none" }}>
              <div style={{
                background: "#FFFFFF",
                boxShadow: "var(--card-shadow)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
                textAlign: "left",
                opacity: 0.85,
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
              }}>
                <div className="flex items-center justify-between mb-3">
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--charcoal)" }}>
                    Swift Type
                  </h2>
                  <span style={{
                    background: "var(--teal)",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: "50px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    Coming Soon
                  </span>
                </div>
                <p style={{ color: "#5A5A5A", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                  Hold a key. Speak. Done. Hands-free text input for Windows.
                </p>
                <span style={{ color: "var(--teal)", fontWeight: 600, fontSize: "0.9rem" }}>
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border-soft)",
        textAlign: "center",
        padding: "3rem 1.5rem",
        color: "#999",
        fontSize: "0.85rem",
      }}>
        GetNoodling — voice tools for people who think fast.
      </footer>
    </div>
  );
}
