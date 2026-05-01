import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-lg font-semibold">GetNoodling</div>
          <div className="flex gap-8 text-sm">
            <Link href="/scribe" className="hover:text-gray-300 transition">
              Swift Scribe
            </Link>
            <Link href="/type" className="hover:text-gray-300 transition">
              Swift Type
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Stop typing.
            <br />
            Start noodling.
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            A suite of voice tools for people who think faster than they type.
          </p>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Swift Scribe */}
            <Link href="/scribe">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-left hover:border-gray-700 transition cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Swift Scribe</h2>
                  <span className="text-xs bg-green-900 text-green-300 px-3 py-1 rounded">
                    Live
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Silent meeting recorder. Transcripts arrive automatically. No setup per meeting.
                </p>
                <div className="text-sm text-gray-500">
                  Learn more →
                </div>
              </div>
            </Link>

            {/* Swift Type */}
            <Link href="/type">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-left hover:border-gray-700 transition cursor-pointer opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Swift Type</h2>
                  <span className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Hold a key. Speak. Done. Hands-free text input for Windows.
                </p>
                <div className="text-sm text-gray-500">
                  Learn more →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 text-center text-gray-500 text-sm">
        <p>GetNoodling. Voice tools for the people who think fast.</p>
      </footer>
    </div>
  );
}
