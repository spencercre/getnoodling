import Link from "next/link";

export default function ScribePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold hover:text-gray-300 transition">
            GetNoodling
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/scribe" className="text-white">
              Swift Scribe
            </Link>
            <Link href="/type" className="hover:text-gray-300 transition">
              Swift Type
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="text-xs bg-green-900 text-green-300 px-3 py-1 rounded">
              Live
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Silent meetings.
            <br />
            Automatic transcripts.
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Swift Scribe records your meetings silently and delivers transcripts automatically. No clicking per meeting. No setup. Just record.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-12 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">How it works</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Record silently</h3>
              <p className="text-gray-400">
                Swift Scribe listens to your system audio. No clicking, no per-meeting setup. Just works.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Transcripts arrive automatically</h3>
              <p className="text-gray-400">
                When the meeting ends, your transcript is ready. VTT format for perfect compatibility with your tools.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">VTT output</h3>
              <p className="text-gray-400">
                Timestamped, searchable transcripts. Compatible with Alfred's pipeline and any video editor that reads VTT.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Individual pricing</h3>
              <p className="text-gray-400">
                Simple, cheap, reliable. Priced for one person, not for teams. Pay once, use forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">Ready to stop typing meeting notes?</p>
          <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition">
            Download Swift Scribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 text-center text-gray-500 text-sm">
        <p>GetNoodling. Voice tools for the people who think fast.</p>
      </footer>
    </div>
  );
}
