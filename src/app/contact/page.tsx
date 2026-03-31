"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="bg-primary-dark">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:py-24">
            <span className="inline-block w-fit rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
              Get in Touch
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Let&apos;s start a{" "}
              <span className="text-accent">conversation.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-300">
              Whether you have questions about our upcoming events, want to
              partner with us, or simply want to learn more about our mission,
              we&apos;re here to help.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/hero-contact.jpg"
              alt="Contact us"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ───── Contact Info + Form ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark">
              Contact Information
            </h2>

            <div className="mt-8 space-y-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm text-muted">Rivers State, Nigeria</p>
                  <p className="text-sm text-muted">
                    Port Harcourt Metropolitan Area
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
                    Phone Number
                  </p>
                  <p className="mt-1 text-sm text-muted">+234 800 AFC CONNECT</p>
                  <p className="text-xs text-muted">Mon-Fri, 9am - 5pm WAT</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
                    Email Address
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    hello@awelgafemaleconnect.org
                  </p>
                  <p className="text-xs text-muted">
                    We typically reply within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-2xl bg-gray-200">
              <Image
                src="/images/map-ph.jpg"
                alt="Port Harcourt map"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary-dark shadow-md">
                  <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Find us in Port Harcourt
                </span>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary-dark">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-muted">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-primary-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-primary-dark">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-primary-dark">
                  Subject
                </label>
                <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Event Hosting</option>
                  <option>Volunteering</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-primary-dark">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Send Message
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ───── Social CTA ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl bg-light-bg p-12 text-center">
          <h2 className="text-2xl font-bold text-primary-dark">
            Join our growing community
          </h2>
          <p className="mt-2 text-sm text-muted">
            Stay updated with our latest events and impact stories by following
            us on social media.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
