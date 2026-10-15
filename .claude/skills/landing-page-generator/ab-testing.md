# A/B Testing Framework

Reference for the spike path ("which version converts better?") and for post-launch iteration. Each variant is a bounded change: brainstorm it, TDD any logic, verify before claiming it shipped.

## What to Test (Highest to Lowest Impact)

1. **Headline** — highest-impact element. Test 2–3 variants.
2. **CTA copy and color** — action text and visual prominence.
3. **Hero visual** — screenshot vs. illustration vs. video.
4. **Social proof placement** — above the fold vs. below benefits.
5. **Form length** — fewer fields vs. more qualified leads.
6. **Price display** — annual vs. monthly default, pricing anchor.

## Rules

- One variable at a time
- Minimum 14 days or 1,000 visitors per variant
- 95% statistical significance before declaring a winner
- Document hypothesis, variants, and results for every test
- Never end a test early on early results

## Test Documentation

```markdown
## A/B Test: [Name]
- Page: [URL]
- Hypothesis: [If we change X, then Y improves because Z]
- Control: [Current version]
- Variant: [Changed version]
- Primary metric: [Conversion rate / Click rate / Signup rate]
- Duration: [Start - End]
- Traffic per variant: [Number]
- Result: [Winner + lift + confidence]
- Learning: [What we apply going forward]
```
