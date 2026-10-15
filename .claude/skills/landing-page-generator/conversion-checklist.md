# Conversion, SEO & Performance Checklist

Reference for phases 6 (audits), 8 (review), and 9 (verify) of the landing-page-generator workflow. Report each item as pass/fail with evidence.

## Above the Fold

- [ ] Headline communicates value in under 6 seconds
- [ ] CTA visible without scrolling on mobile (375px viewport) and desktop (1440px)
- [ ] No more than one navigation option (or none)
- [ ] Subheadline adds specificity to the headline
- [ ] Visual supports the message (not decorative)

## Page-Wide

- [ ] Single conversion goal throughout the page
- [ ] CTA appears 2–3 times (hero, mid-page, footer)
- [ ] Social proof within the first two scrolls
- [ ] Every feature has a corresponding benefit
- [ ] Objections addressed before the final CTA
- [ ] Risk reversal stated near every CTA
- [ ] No external links competing with the CTA
- [ ] Form asks for the minimum required information

## Trust and Credibility

- [ ] Testimonials are named, specific, and real (placeholders listed as launch blockers)
- [ ] Company logos used with permission
- [ ] Security badges and certifications visible if relevant
- [ ] Privacy policy linked from any data collection form
- [ ] Physical address or company information available

## Mobile

- [ ] Page loads under 3 seconds on mobile
- [ ] CTA button thumb-friendly (minimum 48px height)
- [ ] Text readable without zooming (16px minimum)
- [ ] No horizontal scrolling
- [ ] Forms usable on mobile keyboards (correct input types)

## SEO

- [ ] Title tag: primary keyword + brand, 50–60 characters
- [ ] Meta description: benefit + CTA, 150–160 characters
- [ ] One H1, includes primary keyword
- [ ] OG image 1200×630 with product name and value proposition
- [ ] Canonical URL set
- [ ] Alt text on all images
- [ ] FAQPage structured data if FAQ section exists
- [ ] Mobile viewport meta tag present

## Performance Targets

Measure on a production build, not a dev server.

| Metric | Target | How to Achieve |
|--------|--------|---------------|
| Largest Contentful Paint (LCP) | < 2.5s | Optimize hero image, modern formats (WebP/AVIF) |
| Cumulative Layout Shift (CLS) | < 0.1 | Explicit dimensions on all images and embeds |
| Interaction to Next Paint (INP) | ≤ 200ms | Defer non-critical JS, break up long tasks |
| Time to First Byte (TTFB) | < 600ms | CDN, server-side rendering, or static generation |
| Total page weight | < 1MB | Compress images, minimize JS bundles |

## Best Practices

1. **One page, one goal** — if an element doesn't help convert, remove it.
2. **Match the message** — H1 mirrors the ad, email, or link. Mismatch is the top bounce cause.
3. **Remove navigation** — every exit path is a lost conversion.
4. **Mobile first** — design for 375px first; most ad traffic is mobile.
5. **Above-the-fold CTA** — on both desktop and mobile.
6. **Social proof early** — within the first two scrolls.
7. **Minimize form fields** — every extra field reduces conversion.
8. **Speed is conversion** — each second of load costs roughly 7% conversion.
9. **Test relentlessly** — headlines alone swing conversion 20–50% (see ab-testing.md).
10. **Risk reversal near every CTA** — remove the last objection at the moment of decision.

## Success Criteria

- Primary CTA conversion above 6.6% (2025 cross-industry median)
- Mobile load under 3s (LCP < 2.5s, CLS < 0.1)
- CTA above the fold at 1440px and 375px
- Single conversion goal, no competing navigation or exit paths
- H1 mirrors the traffic source
- Social proof within the first two scrolls
- High-traffic pages always running a headline or CTA A/B test

## Troubleshooting

Diagnose with superpowers:systematic-debugging before changing anything.

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| High bounce from paid traffic | Headline doesn't match the ad | Exact message match between ad copy and H1 |
| CTA below fold on mobile | Hero too tall or CTA not prioritized | Check at 375px; CTA must show without scrolling |
| Good traffic, zero conversions | Conversion tracking broken | Verify the pixel/event fires on success; test with a real conversion |
| Slow mobile load (>3s) | Unoptimized images, heavy JS | Run the web-perf skill on a production build; WebP/AVIF, defer non-critical JS |
| Form submissions but no leads in CRM | Form-to-CRM integration broken | Submit end-to-end; check webhook/API connection |
| Visitors confused by CTAs | Too many conversion paths | One goal; all CTAs drive the same action |
| Low conversion despite good copy | No social proof or risk reversal | Re-run this checklist; add real testimonials and risk reversal near CTAs |

## Scope & Limitations

**In scope:** page structure, section patterns, copy frameworks, conversion optimization, CTA strategy, SEO meta, A/B testing, design style guidance.

**Out of scope:** writing ad campaigns, CMS/website-builder administration, creating analytics or ad accounts and their conversion actions. Firing the page's conversion event with a supplied ID is in scope.

**Benchmarks vary** by industry, traffic source, and offer. The 6.6% median spans all industries; SaaS trials may see 10–25%, e-commerce 2–3%.
