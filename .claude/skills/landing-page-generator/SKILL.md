---
name: landing-page-generator
description: Use when creating, redesigning, or optimizing a landing page, campaign page, lead capture page, promo page, or other single-goal conversion page — especially one receiving paid ad, email, or launch traffic, or when its conversion rate, CTA placement, message match, or Core Web Vitals are in question.
license: MIT
metadata:
  version: 1.1.0
  author: borghei
  category: marketing
  domain: conversion
  updated: 2026-10-12
---
# Landing Page Generator

## Overview

A landing page has one audience, one offer, one CTA. The conversion craft (copy frameworks, section patterns, CTA strategy, CWV targets) lives in the reference files. Delivery runs through the superpowers workflow so the page ships designed, planned, tested, reviewed, and verified.

**Core rule: the brainstorming path decides which phases run; deadlines change only their depth.**
- **Architectural** — a new landing or campaign page: all 10 phases.
- **Bounded** — editing copy, a section, or the CTA of an existing page, or adding an A/B variant: phases 1 (short chat design + approval), 2, 4 (edit directly; no plan to execute), 5, 6, 8, 9, 10. Phase 6 for copy changes = conversion + SEO audits; changed above-the-fold assets, scripts, or layout add performance. No plan doc. Changing the offer, service, audience, or lead path is architectural, not bounded.
- **Spike** — "which headline/framework converts better?": answer it, then [ab-testing.md](ab-testing.md).

Within a path, a phase is skipped only when the user names it ("no tests", "skip review"). "Don't overthink it" or "I need it tonight" means the fast lane column.

## Workflow

| # | Phase | Skill | Landing-page input | Fast lane (deadline) |
|---|-------|-------|--------------------|----------------------|
| 1 | Discover & design | superpowers:brainstorming | Inputs + brief below; framework, style, section order go in the spec | Every brainstorming step, each brief: blocking questions only, two one-line approaches, 1-page spec |
| 2 | Isolate | superpowers:using-git-worktrees | Branch `landing/<campaign>` | Same |
| 3 | Plan | superpowers:writing-plans | One task per section, plus lead capture, SEO/meta, tracking | Short plan, same task list |
| 4 | Build | superpowers:subagent-driven-development (or superpowers:executing-plans if inline chosen) | [section-library.md](section-library.md) | Inline execution |
| 5 | Test-first logic | superpowers:test-driven-development | "What to TDD" below | Lead capture + JSON-LD tests |
| 6 | Parallel audits | superpowers:dispatching-parallel-agents | "Audits" below | Same (concurrent, no extra wall-clock) |
| 7 | Debug | superpowers:systematic-debugging | Troubleshooting in [conversion-checklist.md](conversion-checklist.md) | Same |
| 8 | Review | superpowers:requesting-code-review, then superpowers:receiving-code-review | Spec + conversion checklist | One reviewer pass on the whole diff |
| 9 | Verify | superpowers:verification-before-completion | "Evidence" below | Same — never shortened |
| 10 | Finish | superpowers:finishing-a-development-branch | Launch blockers; offer deployment if traffic starts soon | Same |

## Phase 1 inputs

**Blocking — ask one per message, skipping any the request already answers:**
1. **Lead destination**: where submissions go (email, CRM, booking tool), or phone-only — then the CTA is a `tel:` link. Service credentials come from the user as env vars. A form wired to nothing silently burns ad spend.
2. **Conversion goal & offer**: the single action and what the visitor gets.
3. **Traffic source + exact source text**. Paid search: the H1 contains the searched keyword and the ad's promise. Other sources: the H1 mirrors the ad or email headline.

**Non-blocking — assume, and list the assumption at the top of the spec:** audience & awareness level, key pain & benefit, design style, final domain (for canonical/OG URLs), ad-platform conversion ID (placeholders until supplied).

**Facts come only from the user:** testimonials, logos, ratings, customer counts, prices, guarantees, offer terms. Until supplied, use marked placeholders and list each as a launch blocker. If one won't exist by launch, remove that element rather than show a placeholder to real traffic.

**Brief (goes into the spec):**
```markdown
- Product/Service:            - Offer:
- Value proposition:          - Lead destination:
- Target audience:            - Traffic source + exact ad/keyword/email text:
- Key pain point:             - Design style: dark-saas / clean-minimal / bold-startup / enterprise
- Key benefit:                - Copy framework: PAS / AIDA / BAB
```

**Framework:** problem-aware → PAS. Unaware, needs education → AIDA. Solution-aware, wants transformation → BAB.

**Section order:** Hero → Social proof bar → Problem → Solution/Benefits → How it works (≤4 steps) → Features→benefits → Testimonials → Pricing (if any) → FAQ → Final CTA. Campaign pages: no header nav; footer links only for legal. Per-section detail: [section-library.md](section-library.md).

## What to TDD (phase 5)

The logic is what loses money silently:
- **Lead form**: required fields, validation messages, submit reaches the destination, success and failure states, no double submit. Phone-only: the `tel:` link and its click event.
- **FAQ JSON-LD**: generated from the same array the FAQ renders; test they match.
- **Metadata**: title 50–60 chars, description 150–160 chars, canonical, OG image 1200×630 — assert on the metadata object.
- **Conversion event**: fires on successful submit, and only then.
- **CTA consistency**: every CTA targets the same action.
- **Copy-only change**: if a test asserts the old copy, update that test first. Otherwise screenshots are the evidence.

If the project has no test runner, the plan's first task adds one.

## Audits (phase 6)

Dispatch independent read-only agents:
1. **Performance**: the web-perf skill against a production build, not the dev server. Targets: LCP < 2.5s, CLS < 0.1, INP ≤ 200ms, page weight < 1MB.
2. **Conversion**: every item in [conversion-checklist.md](conversion-checklist.md), pass/fail with evidence.
3. **SEO & accessibility**: SEO checklist, WCAG AA contrast, alt text, ≥48px tap targets, ≥16px body text.

Failures become tasks. When the cause is unclear, use phase 7 first.

## Evidence (phase 9)

Each claim in the final message needs fresh output from this session:
- Build, lint, and tests pass.
- Screenshots at 375px and 1440px show the H1 and primary CTA above the fold (the run skill can capture them).
- The H1 matches the traffic-source text.
- New page or changed lead path: one end-to-end submission, sent to a test destination when the live one has side effects. Delivery is confirmed by the destination's response or by the user, never assumed.
- New page or changed above-the-fold assets/scripts: CWV from a production build.

The final message lists **launch blockers**: placeholders, missing conversion tracking, privacy policy, not deployed. Never say "ready to launch" while any remain.

## Red Flags

| Thought | Reality |
|---------|---------|
| "They said don't overthink it, so skip brainstorming/plan/review" | That sets depth, not scope. Fast lane. Only an explicit "skip X" skips X. |
| "Static marketing page — TDD is ceremony" | The form, JSON-LD, metadata, and conversion event are logic. They fail silently in production. |
| "Dev-server CWV numbers mean little" | Correct — so audit the production build. |
| "One page, short on time, review isn't worth it" | One reviewer pass catches the dead form or missing tracking that launch day can't. |
| "I'll follow verification's spirit without invoking it" | Invoke it. The evidence list is the contract. |
| "I'll ask about lead routing at the end" | Asked at the end = discovered after the ad spend. It's blocking input #1. |

## Common Mistakes

- Inventing testimonials, guarantees, or prices instead of using marked placeholders.
- H1 paraphrases the ad instead of mirroring it.
- Several competing CTAs, or nav links offering exits.
- No risk reversal near each CTA, or a risk reversal the business never agreed to.
- CTA pushed below the fold at 375px by a longer headline.

## Reference Files

- [section-library.md](section-library.md) — campaign and message-match rules, hero variants, each section's structure, PAS/AIDA/BAB applied, CTA placement and copy, design styles, visual hierarchy.
- [conversion-checklist.md](conversion-checklist.md) — conversion, trust, and mobile checklists; SEO checklist; CWV targets; best practices; success criteria; troubleshooting; scope.
- [ab-testing.md](ab-testing.md) — what to test, testing rules, test documentation template.

Keywords: landing page, conversion optimization, lead capture, lead gen, campaign page, promo page, hero section, above the fold, CTA, social proof, pricing table, FAQ schema, message match, Core Web Vitals, A/B testing.
