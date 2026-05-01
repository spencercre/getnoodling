import Link from "next/link";

export default function TypePage() {
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
              style={{ color: "var(--coral)", fontWeight: 500, textDecoration: "none" }}>
              Swift Scribe
            </Link>
            <Link href="/type"
              style={{ color: "var(--coral)", fontWeight: 600, textDecoration: "none" }}>
              Swift Type
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div style={{ marginBottom: "1.5rem" }}>
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

          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "var(--charcoal)",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}>
            Hold a key.<br />Speak.<br />Done.
          </h1>

          <p style={{
            fontSize: "1.15rem",
            color: "#5A5A5A",
            lineHeight: 1.65,
            marginBottom: "1rem",
            maxWidth: "480px",
            margin: "0 auto 1rem",
          }}>
            Hands-free text input for Windows. Hold Ctrl+Win, speak, and text appears in your active app. No setup. No accounts. Just talk.
          </p>

          <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: "3rem" }}>
            Swift Type brings voice dictation to any Windows app — without the cloud, without the complexity.
          </p>

          {/* Email Capture */}
          <div style={{
            background: "#FFFFFF",
            boxShadow: "var(--card-shadow)",
            borderRadius: "var(--radius-card)",
            padding: "2.5rem 2rem",
            maxWidth: "400px",
            margin: "0 auto",
          }}>
            <p style={{ color: "#5A5A5A", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Be first to know when Swift Type launches.
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  border: "1.5px solid var(--teal)",
                  borderRadius: "8px",
                  padding: "0.65rem 1rem",
                  fontSize: "1rem",
                  color: "var(--charcoal)",
                  background: "#FAFAFA",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "var(--teal)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "var(--radius-btn)",
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Swift Type */}
      <section className="px-6 py-16" style={{ background: "#FFF9F0" }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "var(--charcoal)",
            textAlign: "center",
            marginBottom: "3rem",
          }}>
            Why Swift Type
          </h2>

          <div style={{ display: "grid", gap: "1.5rem" }} className="md:grid-cols-3">
            {[
              {
                title: "Local transcription",
                body: "Your voice stays on your machine. No cloud, no privacy concerns.",
              },
              {
                title: "Universal input",
                body: "Works in any Windows app. Chat, email, code editors, anywhere.",
              },
              {
                title: "Just works",
                body: "One hotkey. No setup. No accounts. Download and speak.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={{
                background: "#FFFFFF",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--card-shadow)",
                padding: "1.75rem",
                textAlign: "center",
              }}>
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  marginBottom: "0.5rem",
                }}>
                  {title}
                </h3>
                <p style={{ color: "#5A5A5A", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
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
