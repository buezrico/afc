"use client";

interface NewsletterCTAProps {
  heading?: string;
  subtitle?: string;
}

export function NewsletterCTA({
  heading = "Never miss an update.",
  subtitle = "Get early access to event tickets and community news delivered directly to your inbox.",
}: NewsletterCTAProps) {
  return (
    <section className="bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 text-sm text-gray-400">{subtitle}</p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="mt-3 text-xs text-gray-500 lg:text-right">
          By subscribing, you agree to our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
