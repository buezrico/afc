import Image from "next/image";
import Link from "next/link";

const objectives = [
  {
    title: "Education",
    description:
      "Providing access to specialized academic resources and workshops that prepare women for the evolving demands of the global market.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Mentorship",
    description:
      "Connecting aspiring female professionals with established industry leaders for guidance, wisdom, and career navigation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Skill Acquisition",
    description:
      "Hands-on training programs focusing on digital literacy, entrepreneurship, and technical vocational skills.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const team = [
  { name: "Dr. Chinwe Okafor", role: "Executive Director" },
  { name: "Tariere Amadi", role: "Head of Operations" },
  { name: "Blessing Woko", role: "Strategy Lead" },
  { name: "Eniye Douglas", role: "Community Outreach" },
];

export default function AboutPage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative bg-primary-dark min-h-100 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark via-primary-dark/90 to-primary/80 opacity-90" />
        <Image
          src="/images/hero-about.jpg"
          alt="Empowering female youth"
          fill
          className="object-cover mix-blend-overlay opacity-40"
          priority
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            Our Legacy
          </span>
          <h1 className="mt-6 max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl">
            Empowering the Female Youth of Rivers State.
          </h1>
        </div>
      </section>

      {/* ───── Story Section ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark">
              Founded in May 2021
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Awelga Female Connect (AFC) emerged from a vision of collective
                resilience and shared growth. Born in the vibrant heart of Port
                Harcourt in May 2021, we recognized a critical gap in
                professional and personal development opportunities
                specifically tailored for young women in Rivers State.
              </p>
              <p>
                What started as a small circle of visionary leaders has evolved
                into a formidable movement. We believe that when women are
                provided with the right tools, mentorship, and a supportive
                community, they don&apos;t just succeed&mdash;they transform
                their entire ecosystem.
              </p>
              <p className="font-medium text-primary-dark">
                Today, AFC stands as a beacon of hope and a powerhouse of
                innovation, bridging the gap between potential and opportunity
                for the next generation of female leaders.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gray-200 aspect-4/5">
              <Image
                src="/images/about-story.jpg"
                alt="AFC community"
                width={600}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 rounded-xl bg-accent px-5 py-4 text-primary-dark shadow-lg">
              <p className="text-2xl font-bold">3+</p>
              <p className="text-xs font-semibold uppercase tracking-wider">
                Years of
                <br />
                Community Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Core Objectives ───── */}
      <section className="bg-light-bg">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-dark">
              Our Core Objectives
            </h2>
            <p className="mt-3 text-sm text-muted">
              We focus our energy on three strategic pillars designed to
              cultivate excellence and independence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {objectives.map((obj) => (
              <div
                key={obj.title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {obj.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary-dark">
                  {obj.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Team Section ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark">
              The Visionaries Behind AFC
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted">
              Our leadership team is comprised of dedicated women committed to
              the socio-economic advancement of our community.
            </p>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            View Full Directory
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name}>
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-gray-200">
                <Image
                  src={`/images/team-${member.name.split(" ").pop()?.toLowerCase()}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-primary-dark/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    Leadership Profile
                  </span>
                </div>
              </div>
              <h4 className="mt-4 font-semibold text-primary-dark">
                {member.name}
              </h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="bg-dark-bg">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-bold text-white md:text-4xl">
            Be part of our growing community and shape the future together.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-dark"
            >
              Register as a Member
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark"
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
