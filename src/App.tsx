const SONIKA_X_URL = "https://x.com/trysonika";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black antialiased">
      <header className="w-full px-6 py-6 md:px-10 md:py-8">
        <a href="/" aria-label="GrowClientsAI home" className="inline-block">
          <img
            src="/gca-logo.png"
            alt="GrowClientsAI"
            width="160"
            height="32"
            className="h-8 w-auto"
          />
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 md:px-10">
        <section className="w-full max-w-3xl mx-auto text-center py-10 md:py-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-neutral-500 mb-5">
            An update from Darrin Duncan
          </p>

          <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-black">
            GrowClientsAI is becoming Sonika.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-snug">
            Voice infrastructure for marketing agencies. Same engine. Bigger market.
          </p>

          <p className="mt-8 mx-auto max-w-[60ch] text-base text-neutral-700 leading-relaxed">
            We started by building AI voice agents for HVAC contractors. The
            technology worked &mdash; calls answered, jobs booked, revenue
            recovered. Now we&rsquo;re packaging that engine into a platform
            marketing agencies can resell to their own clients. Sonika launches
            summer 2026.
          </p>

          <div className="mt-10">
            <a
              href={SONIKA_X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-[#10B981] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Follow the build on X
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full px-6 py-8 md:px-10 md:py-10">
        <p className="text-center text-sm text-neutral-500">
          Darrin Duncan &middot; Allentown, PA &middot;{" "}
          <a
            href="mailto:darrin@growclientsai.com"
            className="hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
          >
            darrin@growclientsai.com
          </a>
        </p>
      </footer>
    </div>
  );
}
