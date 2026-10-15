import Image from "next/image";
import {
  beforeAfter,
  googleRating,
  proofFallback,
  reviewsHeading,
  testimonials,
  trustBadges,
} from "@/content/site";
import { CheckIcon } from "./icons";
import { sectionHeading, sectionInner } from "./ui";

/** Real reviews only. Until there are some, plain commitments carry the trust. */
export function Proof() {
  const hasReviews = googleRating !== null || testimonials.length > 0 || beforeAfter.length > 0;
  return (
    <section aria-labelledby="proof-heading" className="bg-paper">
      <div className={sectionInner}>{hasReviews ? <Reviews /> : <Commitments />}</div>
    </section>
  );
}

function Commitments() {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
      <div>
        <h2 id="proof-heading" className={sectionHeading}>
          {proofFallback.heading}
        </h2>
        <p className="mt-4 max-w-[50ch] text-lg">{proofFallback.body}</p>
      </div>
      {trustBadges.length > 0 ? (
        <ul className="space-y-3 text-lg">
          {trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-3">
              <CheckIcon className="size-6 shrink-0 text-canopy" />
              {badge}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Reviews() {
  return (
    <div className="space-y-10">
      <h2 id="proof-heading" className={sectionHeading}>
        {reviewsHeading}
      </h2>
      {googleRating ? (
        <p className="font-display text-3xl font-bold text-canopy">
          {googleRating.value.toFixed(1)} stars on Google
          <span className="mt-1 block font-sans text-base font-normal text-ink">
            from {googleRating.count} reviews
          </span>
        </p>
      ) : null}
      {testimonials.length > 0 ? (
        <ul className="space-y-8">
          {testimonials.map((testimonial) => (
            <li key={`${testimonial.name}-${testimonial.quote}`}>
              <blockquote className="text-lg">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <p className="mt-2 font-bold text-canopy">
                {testimonial.name}, {testimonial.town}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {beforeAfter.map((item) => (
        <figure key={item.caption}>
          <div className="grid grid-cols-2 gap-2">
            <Image {...item.before} alt={item.before.alt} className="h-auto w-full rounded-xl" />
            <Image {...item.after} alt={item.after.alt} className="h-auto w-full rounded-xl" />
          </div>
          <figcaption className="mt-2 text-sm">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
