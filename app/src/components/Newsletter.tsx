export default function Newsletter() {
  return (
    <section aria-labelledby="newsletter-heading" className="relative mt-12 overflow-hidden bg-slate-900 py-16 text-white">
      <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl space-y-4">
            <h2 id="newsletter-heading" className="text-3xl font-black uppercase italic tracking-tight sm:text-4xl">Join the LITE.CLUB</h2>
            <p className="font-medium leading-relaxed text-slate-400">
              Subscribe to our newsletter and get <span className="font-bold text-white underline decoration-blue-500 decoration-2 underline-offset-4">15% off</span> your first order. Be the first to know about new arrivals and exclusive sales.
            </p>
          </div>

          <form className="w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Enter your email" aria-describedby="newsletter-status" disabled className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white placeholder:text-slate-500 disabled:cursor-not-allowed" />
              <button type="submit" disabled className="rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white disabled:cursor-not-allowed disabled:opacity-60">Subscribe</button>
            </div>
            <p id="newsletter-status" className="mt-3 text-xs text-slate-300">Newsletter sign-up is not available yet.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
