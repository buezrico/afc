import Image from "next/image";
import Link from "next/link";
import { NewsletterCTA } from "@/components/newsletter-cta";

const upcomingEvents = [
  {
    title: "Tech Empowerment Summit",
    date: "March 15, 2024",
    description:
      "A comprehensive workshop series dedicated to bridging the gender gap in Nigeria's burgeoning tech ecosystem.",
    image: "/images/event-tech.jpg",
  },
  {
    title: "The Leadership Circle",
    date: "April 02, 2024",
    description:
      "Intimate roundtable discussions with Port Harcourt's most influential female entrepreneurs and civic leaders.",
    image: "/images/event-leadership.jpg",
  },
];

const pastEvents = [
  {
    title: "Women in Governance Workshop",
    date: "November 2023",
    description: "Equipping the next generation of female political leaders.",
    image: "/images/event-governance.jpg",
  },
  {
    title: "Creative Collab Day",
    date: "October 2023",
    description:
      "A focused session for designers and writers to connect.",
    image: "/images/event-collab.jpg",
  },
  {
    title: "Wellness & Mindfulness Retreat",
    date: "September 2023",
    description:
      "Prioritizing mental health in our high-impact journeys.",
    image: "/images/event-wellness.jpg",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          Community Gatherings
        </span>
        <h1 className="mt-3 max-w-md font-display text-4xl font-bold leading-tight text-primary-dark md:text-5xl">
          Our Impact
          <br />
          in Motion.
        </h1>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Join a collective of resilient young women across Nigeria. From
            professional workshops to cultural celebrations, we create spaces
            for growth, connection, and empowerment.
          </p>
          <div className="flex gap-10">
            <div>
              <p className="font-display text-3xl font-bold text-primary-dark">
                24+
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Events Yearly
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary-dark">
                5k
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Attendees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Upcoming Events ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-0.5 w-8 bg-accent" />
          <h2 className="font-display text-xl font-bold text-primary-dark">
            Upcoming Events
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <div className="relative aspect-16/10 bg-gray-200">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase text-primary-dark">
                  Upcoming
                </span>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs text-accent-dark">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-primary-dark">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{event.description}</p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark hover:text-accent"
                >
                  Register Now
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-accent p-8">
            <svg className="h-8 w-8 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h3 className="mt-4 font-display text-2xl font-bold text-primary-dark">
              Host your own event with AFC support.
            </h3>
            <p className="mt-3 text-sm text-primary-dark/70">
              We provide the platform, resources, and community reach to help
              your initiative flourish.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Submit Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Past Highlights ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-dark">
              Past Highlights
            </h2>
            <p className="mt-1 text-sm text-muted">
              Reflections on our journey and impact.
            </p>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary sm:inline-flex"
          >
            View Archive
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Featured past event */}
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <div className="relative aspect-16/10 bg-gray-200">
              <Image
                src="/images/event-gala.jpg"
                alt="Annual Heritage & Innovation Gala"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 rounded-full bg-primary-dark/80 px-3 py-1 text-xs font-semibold uppercase text-white backdrop-blur-sm">
                Past Event
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted">
                December 12, 2023 &middot; Rivers State Art Centre
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-primary-dark">
                Annual Heritage &amp; Innovation Gala
              </h3>
              <p className="mt-2 text-sm text-muted">
                A celebration of Rivers State&apos;s rich cultural heritage
                blended with modern entrepreneurial vision. Over 400 women
                joined us for an evening of inspiration.
              </p>
            </div>
          </div>

          {/* Stacked past events */}
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="flex gap-4 rounded-xl border border-gray-200 p-4"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                    {event.date}
                  </p>
                  <h4 className="mt-1 font-semibold text-primary-dark">
                    {event.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Newsletter ───── */}
      <NewsletterCTA />
    </>
  );
}
