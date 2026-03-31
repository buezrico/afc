import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative min-h-150 flex items-end bg-primary-dark">
        <div className="absolute inset-0 bg-linear-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/50">
          <Image
            src="/images/hero-home.jpg"
            alt="Young women collaborating"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            Founded May 2021
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Empowering Young Women, Shaping the Future of Rivers State
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
            A community dedicated to fostering leadership, resilience, and
            digital literacy among the next generation of female leaders in Port
            Harcourt and beyond.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Mission & Vision ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <svg
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-primary-dark">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              To create a sustainable ecosystem where young women in Rivers
              State are equipped with the skills, confidence, and network
              required to break barriers and lead in their respective fields. We
              focus on grassroots engagement and mentorship that translates into
              real-world impact.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-primary-dark">
              Our Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We envision a future where every young woman in Rivers State has
              equal access to opportunities, education, and personal growth,
              becoming a catalyst for positive socio-economic change within the
              Niger Delta region.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Stats / Our Reach ───── */}
      <section className="bg-dark-bg">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Reach
          </span>
          <h2 className="mt-3 max-w-md text-3xl font-bold text-white md:text-4xl">
            Numbers that tell a story of resilience
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                value: "500+",
                label: "Youths Reached",
                accent: false,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                value: "20+",
                label: "Events Held",
                accent: false,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                value: "3+",
                label: "Years of Impact",
                accent: true,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl p-8 ${
                  stat.accent
                    ? "bg-accent text-primary-dark"
                    : "bg-white/5 text-white"
                }`}
              >
                <div className={stat.accent ? "text-primary-dark" : "text-accent"}>
                  {stat.icon}
                </div>
                <p className="mt-4 text-4xl font-bold">{stat.value}</p>
                <p className={`mt-1 text-sm ${stat.accent ? "text-primary-dark/70" : "text-gray-400"}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Gallery Preview ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">
            Capturing the Moment
          </h2>
          <p className="mt-3 text-sm text-muted">
            Witness the energy and passion of our community through our curated
            gallery of events and workshops.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl bg-gray-200 md:col-span-2">
            <Image
              src="/images/gallery-1.jpg"
              alt="Community event"
              width={600}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 overflow-hidden rounded-2xl bg-gray-200 md:col-span-2">
            <Image
              src="/images/gallery-2.jpg"
              alt="Workshop session"
              width={600}
              height={340}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-200">
            <Image
              src="/images/gallery-3.jpg"
              alt="Mentorship"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-200">
            <Image
              src="/images/gallery-4.jpg"
              alt="Community outreach"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
