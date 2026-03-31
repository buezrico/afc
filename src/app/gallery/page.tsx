"use client";

import Image from "next/image";
import { useState } from "react";
import { NewsletterCTA } from "@/components/newsletter-cta";

const filters = ["All Moments", "Workshops", "Community Outreach", "Events"];

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Community gathering", category: "Community Outreach", tall: true },
  { src: "/images/gallery-2.jpg", alt: "Workshop session", category: "Workshops", tall: false },
  { src: "/images/gallery-3.jpg", alt: "Youth empowerment", category: "Community Outreach", tall: false },
  { src: "/images/gallery-4.jpg", alt: "Group mentorship", category: "Events", tall: true },
  { src: "/images/gallery-5.jpg", alt: "Skills training", category: "Workshops", tall: false },
  { src: "/images/gallery-6.jpg", alt: "Speaking event", category: "Events", tall: true },
  { src: "/images/gallery-7.jpg", alt: "Collaboration session", category: "Workshops", tall: false },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Moments");

  const filtered =
    activeFilter === "All Moments"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          Capturing Resilience
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold text-primary-dark md:text-5xl">
          Impact in <span className="text-accent">Motion.</span>
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          A visual narrative of our community&apos;s journey&mdash;celebrating
          the strength, growth, and shared moments of the female youth in Port
          Harcourt.
        </p>
      </section>

      {/* ───── Filter Tabs ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary-dark text-white"
                  : "border border-gray-300 text-muted hover:border-primary-dark hover:text-primary-dark"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ───── Masonry Grid ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((img) => (
            <div
              key={img.src}
              className="mb-4 overflow-hidden rounded-2xl bg-gray-200 break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.tall ? 700 : 400}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-muted">
            No images found for this category.
          </p>
        )}
      </section>

      {/* ───── Load More ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 text-center">
        <button className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary">
          View More Impact Stories
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </section>

      {/* ───── Newsletter ───── */}
      <NewsletterCTA
        heading="Be part of the next chapter."
        subtitle="Join our mailing list to receive updates on upcoming events and see how your support changes lives."
      />
    </>
  );
}
