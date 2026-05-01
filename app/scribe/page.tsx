"use client";

import Link from "next/link";

export default function ScribePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--charcoal)", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ background: "var(--cream)", borderBottom: "1px solid var(--border-soft)" }}
           className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ color: "var(--charcoal)", fontWeight: 700, fontSize: "1.2rem", textDecoration: "none" }}>
            GetNoodling
          </Link>
          <div className="flex gap-8" style={{ fontSize: "0.95rem" }}>
            <Link href="/scribe"
              style={{ color: "var(--coral)", fontWeight: 600, textDecoration: "none" }}>
              Swift Scribe
            </Link>
            <Link href="/type"
              style={{ color: "var(--coral)", fontWeight: 500, textDecoration: "none" }}>
              Swift Type
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ marginBottom: "1.25rem" }}>
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
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "var(--charcoal)",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}>
            Silent meetings.<br />Automatic transcripts.
          </h1>
          <p style={{
            fontSize: "1.15rem",
            color: "#5A5A5A",
            maxWidth: "540px",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}>
            Swift Scribe records your meetings silently and delivers transcripts automatically. No clicking per meeting. No setup. Just record.
          </p>
          <button style={{
            background: "var(--coral)",
            color: "#fff",
            border: "none",
            borderRadius: "var(--radius-btn)",
            padding: "0.85rem 2rem",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}>
            Download Swift Scribe
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16" style={{ background: "#FFF9F0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "var(--charcoal)",
            marginBottom: "3rem",
          }}>
            How it works
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                title: "Record silently",
                body: "Swift Scribe listens to your system audio. No clicking, no per-meeting setup. Just works.",
              },
              {
                title: "Transcripts arrive automatically",
                body: "When the meeting ends, your transcript is ready. VTT format for perfect compatibility with your tools.",
              },
              {
                title: "VTT output",
                body: "Timestamped, searchable transcripts. Compatible with any video editor that reads VTT.",
              },
              {
                title: "Individual pricing",
                body: "Simple, cheap, reliable. Priced for one person, not for teams. Pay once, use forever.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--card-shadow)",
                padding: "1.75rem 2rem",
              }}>
                <h3 style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  marginBottom: "0.5rem",
                }}>
                  {title}
                </h3>
                <p style={{ color: "#5A5A5A", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center" style={{ background: "var(--cream)" }}>
        <div className="max-w-xl mx-auto">
          <p style={{ color: "#5A5A5A", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Ready to stop typing meeting notes?
          </p>
          <button style={{
            background: "var(--coral)",
            color: "#fff",
            border: "none",
            borderRadius: "var(--radius-btn)",
            padding: "0.85rem 2.5rem",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}>
            Download Swift Scribe
          </button>
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
