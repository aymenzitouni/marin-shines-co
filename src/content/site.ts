// Every business fact and every line of page copy lives here, so changing the
// business means editing one file. Lines tagged LAUNCH-BLOCKER are placeholders:
// replace or delete them before real traffic arrives. `npm run launch-check`
// lists whatever is left.

export type Photo = { src: string; alt: string; width: number; height: number };

export const site = {
  name: "Marin Shine Co.",
  tagline: "A Higher Standard of Clean.",
  url: "https://www.example.com", // LAUNCH-BLOCKER: real domain
  phone: { display: "(415) 555-0123", tel: "+14155550123" }, // LAUNCH-BLOCKER: real phone number
  email: "hello@example.com", // LAUNCH-BLOCKER: real inbox
  responseTime: "2 business hours", // LAUNCH-BLOCKER: a reply time you can keep
  offer: "a free inside-oven or inside-fridge clean", // LAUNCH-BLOCKER: confirm the add-on and its terms
  priceRange: "$$", // LAUNCH-BLOCKER: confirm the price band shown to search engines
};

export const TOWNS = [
  "Belvedere",
  "Corte Madera",
  "Fairfax",
  "Greenbrae",
  "Kentfield",
  "Larkspur",
  "Mill Valley",
  "Novato",
  "Ross",
  "San Anselmo",
  "San Rafael",
  "Sausalito",
  "Tiburon",
] as const;
export const OTHER_TOWN = "Other Marin town";
export const TOWN_OPTIONS = [...TOWNS, OTHER_TOWN] as const;
export type Town = (typeof TOWN_OPTIONS)[number];

export const SERVICE_IDS = ["standard", "deep", "move", "vacation-rental"] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export type Service = {
  id: ServiceId;
  name: string;
  /** Short label for the form's service tiles. */
  formLabel: string;
  summary: string;
  includes: string[];
  startingPrice: string;
};

export const services: Service[] = [
  {
    id: "standard",
    name: "Standard cleaning",
    formLabel: "Standard",
    summary:
      "Regular upkeep for a home that's already in good shape, weekly, every other week, or monthly.",
    includes: [
      "Dusting reachable surfaces",
      "Kitchen counters, sink, and stovetop",
      "Bathrooms scrubbed and sanitized",
      "Vacuuming and mopping every floor",
    ],
    startingPrice: "From $229",
  },
  {
    id: "deep",
    name: "Deep cleaning",
    formLabel: "Deep clean",
    summary:
      "A top-to-bottom reset for homes that haven't had a professional clean in a while, or before a recurring plan starts.",
    includes: [
      "Everything in a standard clean",
      "Baseboards, door frames, and light switches",
      "Cabinet fronts and appliance exteriors",
      "Built-up grime in showers and tubs",
    ],
    startingPrice: "From $___", // LAUNCH-BLOCKER: starting price for deep cleaning
  },
  {
    id: "move",
    name: "Move-in / move-out cleaning",
    formLabel: "Move-in/out",
    summary: "An empty-home clean so you get your deposit back or start fresh in your new place.",
    includes: [
      "Inside cabinets, drawers, and closets",
      "Inside the oven and fridge",
      "Walls spot-cleaned",
      "Every floor and fixture",
    ],
    startingPrice: "From $299",
  },
  {
    id: "vacation-rental",
    name: "Vacation rental turnover",
    formLabel: "Vacation rental",
    summary: "Reliable turnovers between guests for Airbnb and VRBO hosts.",
    includes: [
      "Fresh linens and beds made",
      "Kitchen and bathrooms guest-ready",
      "Trash out and surfaces wiped",
      "Scheduled around your check-out times",
    ],
    startingPrice: "From $___", // LAUNCH-BLOCKER: starting price for vacation rental turnovers
  },
];

/** The label on every quote button and link. */
export const quoteCta = "Get a Free Quote";

export const hero = {
  headline: "House Cleaning in Marin County",
  subhead: `Come home to a spotless house without giving up your weekend. Your first clean includes ${site.offer}.`,
  subheadShort: `Free quote in under a minute. Your first clean includes ${site.offer}.`,
  reassurance: "Free quote. No commitment.",
};

export const trustBadges: string[] = [
  "Bonded & insured", // LAUNCH-BLOCKER: keep only if true
  "Background-checked cleaners", // LAUNCH-BLOCKER: keep only if true
  "Locally owned in Marin", // LAUNCH-BLOCKER: keep only if true
];

export const problem = {
  heading: "Your house shouldn't take your whole weekend",
  pains: [
    "Saturday disappears into scrubbing, vacuuming, and laundry.",
    "You clean on Sunday, and by Wednesday it's a mess again.",
    "Guests are on their way and the house isn't ready.",
  ],
  solution:
    "We handle the cleaning so you don't have to. Our team shows up when we say we will, brings everything we need, and leaves your home spotless, so your weekends are for the trails on Mt. Tam, not the mop bucket.", // LAUNCH-BLOCKER: confirm you bring supplies
};

export const servicesIntro = {
  heading: "Cleaning for every kind of Marin home",
  body: "Not sure which one you need? Pick the closest match and we'll confirm it before your first clean.",
};

export const howItWorks = {
  heading: "How it works",
  steps: [
    { title: quoteCta, body: "Tell us about your home in under a minute." },
    { title: "Pick your date", body: "We'll confirm your price and find a time that works." },
    { title: "Relax", body: "Come home to a clean house." },
  ],
};

export type PriceRow = { bedrooms: number; prices: (number | null)[] };

/** Flat rates per clean. Standard prices are for a furnished home; null means that combination isn't offered. */
export const pricing = {
  heading: "Simple, flat-rate pricing",
  intro: "Find your bedrooms and bathrooms. That's your price per clean, with no hidden fees.",
  bathCounts: [1, 2, 3, 4, 5],
  standard: [
    { bedrooms: 1, prices: [229, 249, null, null, null] },
    { bedrooms: 2, prices: [249, 269, 289, null, null] },
    { bedrooms: 3, prices: [279, 299, 319, 339, null] },
    { bedrooms: 4, prices: [329, 349, 369, 389, 409] },
    { bedrooms: 5, prices: [379, 399, 419, 439, 459] },
  ] satisfies PriceRow[],
  recurring: [
    { label: "Weekly", discount: 15 },
    { label: "Every 2 weeks", discount: 10 },
    { label: "Monthly", discount: 5 },
  ],
  recurringNote: "No long-term contracts. Pause or change your schedule anytime.",
  move: [
    { size: "Up to 1,000 sq ft", price: 299 },
    { size: "1,001–2,000 sq ft", price: 399 },
    { size: "2,001–3,000 sq ft", price: 499 },
    { size: "3,001–4,000 sq ft", price: 599 },
  ],
  moveNote: "Empty-home flat rate, by square footage.",
  terms: [
    "Payment by cash, check, or Zelle, due at the time of service.",
    "Cancel or reschedule with less than 24 hours' notice: 50% of the service price.",
    "If our team can't get in on the day: 100% of the service price.",
  ],
  offChart: "Bigger home, or a mix not on the chart?",
};

export type Rating = { value: number; count: number };
export type Testimonial = { quote: string; name: string; town: string };
export type BeforeAfter = { caption: string; before: Photo; after: Photo };

// Real reviews only. Each block stays hidden while it is empty.
export const reviewsHeading = "What Marin clients say";
export const googleRating: Rating | null = null;
export const testimonials: Testimonial[] = [];
export const beforeAfter: BeforeAfter[] = [];

export const proofFallback = {
  heading: "What you can count on",
  body: "We're a new business, so we earn every review by doing the job right.",
};

export type Faq = { question: string; answer: string };

const townList = `${TOWNS.slice(0, -1).join(", ")}, and ${TOWNS[TOWNS.length - 1]}`;

export const faqs: Faq[] = [
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No. Many clients leave a key, a lockbox code, or a garage code. Whatever works for you.",
  },
  {
    question: "Do you bring your own supplies?",
    answer:
      "Yes, we bring all supplies and equipment. If you'd rather we use your products, just let us know.", // LAUNCH-BLOCKER: confirm supplies policy
  },
  {
    question: "How is the price determined?",
    answer:
      "Standard cleans are a flat rate by bedrooms and bathrooms, and move-in/move-out cleans by square footage. See the pricing table. Weekly, every-2-weeks, and monthly plans save 15%, 10%, or 5% on every clean.",
  },
  {
    question: "Are you insured?",
    answer: "Yes. We're bonded and insured, and every cleaner is background-checked.", // LAUNCH-BLOCKER: only if true
  },
  {
    question: "What if I'm not happy with the clean?",
    answer: "Tell us within 24 hours and we'll come back and re-clean those areas for free.", // LAUNCH-BLOCKER: confirm your guarantee
  },
  {
    question: "Do I have to sign a contract?",
    answer: "No. Book a single clean or a recurring plan, and change or cancel anytime.", // LAUNCH-BLOCKER: confirm contract policy
  },
  {
    question: "Which towns do you serve?",
    answer: `All of Marin County: ${townList}.`,
  },
  {
    question: "Is the free add-on really free?",
    answer: `Yes. Your first clean includes ${site.offer}.`, // LAUNCH-BLOCKER: confirm offer terms
  },
];

export const finalCta = {
  heading: quoteCta,
  body: `Tell us about your home and we'll send your price. Your first clean includes ${site.offer}.`,
};

export const serviceArea = {
  heading: "Serving all of Marin County",
  body: "We clean homes in every town from Sausalito to Novato.",
};
