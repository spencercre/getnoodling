import Link from "next/link";

export default function TypePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold hover:text-gray-300 transition">
            GetNoodling
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/scribe" className="hover:text-gray-300 transition">
              Swift Scribe
            </Link>
            <Link href="/type" className="text-white">
              Swift Type
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded">
              Coming Soon
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Hold a key.
            <br />
            Speak.
            <br />
            Done.
          </h1>

          <p className="text-lg text-gray-400 mb-12">
            Hands-free text input for Windows. Hold Ctrl+Win, speak, and text appears in your active app. No setup. No accounts. Just talk.
          </p>

          <p className="text-gray-500 mb-12">
            Swift Type brings voice dictation to any Windows application without the cloud, without the complexity.
          </p>

          {/* Email Capture */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-sm text-gray-400 mb-6">
              Be first to know when Swift Type launches.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Wait */}
      <section className="px-6 py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Why Swift Type</h2>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Local transcription</h3>
              <p className="text-gray-400 text-sm">
                Your voice stays on your machine. No cloud, no privacy concerns.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-2">Universal input</h3>
              <p className="text-gray-400 text-sm">
                Works in any Windows app. Chat, email, code editors, anywhere.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-2">Just works</h3>
              <p className="text-gray-400 text-sm">
                One hotkey. No setup. No accounts. Download and speak.
              </p>
            </div>
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
