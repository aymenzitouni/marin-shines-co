# Section Library, Copy Frameworks, CTA & Design

Reference for phases 1 (spec) and 4 (build) of the landing-page-generator workflow.

## Campaign Pages & Message Match

For ad campaigns, email campaigns, or launch events.

**Message match.** The landing page headline MUST match the ad/email that drives traffic:
- If the ad says "Reduce churn by 30%," the H1 says "Reduce churn by 30%"
- Paid search: the H1 contains the searched keyword and the ad's promise
- Mismatched expectations cause immediate bounce

**Single message focus.** Remove all navigation, sidebar links, and secondary CTAs:
- No header navigation (removes exit paths)
- No footer links except legal requirements
- One CTA repeated 2–3 times on the page
- Every section supports the single conversion goal

**Traffic source adaptation:**

| Traffic Source | Page Adaptation |
|---------------|----------------|
| Paid search (Google) | Searched keyword + the ad's promise in the H1 |
| Paid social (Meta, LinkedIn) | Lead with the ad's hook/benefit |
| Email campaign | Lead with the email's promise |
| Organic search | Lead with the comprehensive answer |
| Referral/partner | Lead with the referrer's context |

## Section Order

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero | Communicate value in 5 seconds |
| 2 | Social proof bar | Build instant credibility |
| 3 | Problem statement | Show you understand their pain |
| 4 | Solution / Benefits | Present your answer |
| 5 | How it works | Reduce perceived complexity |
| 6 | Features with benefits | Detail what they get |
| 7 | Testimonials | Proof from real customers |
| 8 | Pricing (if applicable) | Help them decide |
| 9 | FAQ | Handle objections |
| 10 | Final CTA | Repeat the ask with risk reversal |

## Hero Section

The most important section. Must communicate value in 5 seconds.

**Components:** headline (primary value proposition) · subheadline (specificity) · primary CTA · optional lower-commitment secondary CTA · supporting visual (screenshot, illustration, video) · trust signal (proof bar, customer count, badge).

| Variant | Layout | Best For |
|---------|--------|----------|
| Centered | Text centered, CTA below, visual below | Simple offers, clear value props |
| Split | Text left, visual right (or vice versa) | Product with strong visual/screenshot |
| Video background | Text overlay on ambient video | Brand-heavy, awareness pages |
| Minimal | Headline + CTA only, no visual | High-intent traffic, direct offers |
| Social proof hero | Testimonial as the headline | Strong customer story to lead with |

**Copy:**
- Headline: 6–12 words, includes the primary benefit
- Subheadline: 1–2 sentences, adds specificity or addresses the "how"
- CTA: action verb + what they get ("Start my free trial")
- Below CTA: reduce friction ("No credit card required")

## Problem Section

Make the reader feel understood before pitching anything.
- 2–3 pain points in the reader's language
- Each pain point specific and recognizable
- Optional: quantify the cost ("This costs teams an average of $X per month")

## Solution / Benefits Section

- 3–5 key benefits (not features)
- Pattern: [What it does] > [Why that matters] > [Specific outcome]
- Visual support for each (icon, screenshot, illustration)

## How It Works Section

- Step 1–3: [Action] with brief description; optional Step 4: [Outcome] ("See results within [timeframe]")
- Never exceed 4 steps; each starts with an action verb; each understandable on its own

## Social Proof Section

| Type | Impact | Example |
|------|--------|---------|
| Named testimonial with metrics | Highest | "Reduced churn by 23% in 90 days" — Sarah Chen, VP Marketing |
| Customer logos | High | Row of recognizable brand logos |
| Aggregate metrics | High | "2,847 teams, 40+ countries, 4.8/5 rating" |
| Star ratings / review scores | Medium | "4.8 out of 5 on G2 (500+ reviews)" |
| Case study link | Medium | "See how [Company] achieved [result]" |
| Generic testimonial | Low | "Great product!" — John D. |

Examples above are illustrative. Real proof comes from the user; until then, use marked placeholders, and remove the element before launch if none will exist.

## Pricing Section

- 2–4 tiers (3 is optimal); highlight the recommended tier
- Feature comparison per tier; enterprise tier with "Contact us"
- Annual vs. monthly toggle if offering both
- Trust signals near pricing (guarantee, cancel anytime)

## FAQ Section

- 5–8 questions addressing real buying objections; answers 1–3 sentences
- FAQPage schema markup (JSON-LD), generated from the same data the section renders
- Common questions: How does pricing work? Can I cancel anytime? How long does setup take? Free trial? Is my data secure? Integrations? How is this different from [competitor]?

## Final CTA Section

- Headline restating the core value + 1 sentence of support
- Primary CTA button (same as hero)
- Risk reversal (guarantee, no CC, cancel anytime), using only terms the business has confirmed
- Optional: customer count or testimonial snippet

## Copy Frameworks Applied

| Framework | Best When | Awareness Level |
|-----------|-----------|-----------------|
| PAS (Problem > Agitate > Solve) | Audience knows the problem | Problem-aware |
| AIDA (Attention > Interest > Desire > Action) | Audience needs education | Unaware to problem-aware |
| BAB (Before > After > Bridge) | Audience wants transformation | Solution-aware |

**PAS**

| Section | Element | Approach |
|---------|---------|----------|
| Hero headline | Problem | Name the pain directly |
| Problem section | Agitate | Show consequences of inaction |
| Solution section | Solve | Introduce product as the answer |
| CTA | Solve | Clear action to access the solution |

Example — Hero: "Your team wastes 4 hours every week on manual reporting." Problem: "That is 200 hours a year — a full-time employee lost to spreadsheets." Solution: "[Product] automates your reporting. Set it once, get reports every Monday." CTA: "Automate my reports — start free trial."

**AIDA**

| Section | Element | Approach |
|---------|---------|----------|
| Hero headline | Attention | Bold, attention-grabbing statement |
| Benefits section | Interest | Expand with relevant details and benefits |
| Social proof | Desire | Show proof and paint the transformation |
| CTA | Action | Clear, compelling call to action |

**BAB**

| Section | Element | Approach |
|---------|---------|----------|
| Hero + Problem | Before | Current painful state |
| Solution + Benefits | After | Desired future state |
| How it works | Bridge | How the product gets them there |

## CTA Strategy

| Position | Purpose | Copy Approach |
|----------|---------|---------------|
| Hero | Primary conversion point | Action + benefit: "Start my free trial" |
| After benefits | Capture interest momentum | Reinforce: "See it in action" |
| After social proof | Capitalize on trust | Social: "Join 2,847 teams" |
| Page footer | Final catch | Urgency: "Start today — free for 14 days" |

**Formula:** `[Action Verb] + [What They Get]` — "Start my free trial", "Get the complete guide", "See pricing for my team", "Create my first dashboard".

**Supporting text below the button:** "No credit card required" · "Set up in 2 minutes" · "Cancel anytime" · "Free for 14 days" · "Join 2,847 teams".

## Design Styles

| Style | Visual Tone | Best For |
|-------|-----------|----------|
| Dark SaaS | Dark backgrounds, vibrant accents, gradients | Developer tools, technical products, modern SaaS |
| Clean Minimal | White backgrounds, subtle borders, clean typography | Professional services, healthcare, education |
| Bold Startup | Large typography, bright colors, dynamic layouts | Consumer products, startups, creative tools |
| Enterprise | Muted tones, structured layouts, conservative design | B2B enterprise, finance, government |

**Visual hierarchy:**
1. Headline is the largest text element
2. CTA button is the most visually prominent element
3. Supporting text noticeably smaller than headlines
4. White space separates sections
5. Text contrast meets WCAG AA (4.5:1 minimum)
6. Recommended pricing tier visually distinguished
