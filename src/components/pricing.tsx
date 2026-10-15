import { pricing, quoteCta } from "@/content/site";
import { QuoteLink } from "./quote-link";
import { primaryButton, sectionHeading, sectionInner } from "./ui";

const subheading = "font-display text-2xl font-bold text-canopy";
const cell = "px-1.5 py-3 sm:px-4";

function price(amount: number) {
  return `$${amount}`;
}

/** Flat rates laid out as tables you can read at a glance: find your row, find your column. */
export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-t border-eucalyptus bg-paper">
      <div className={sectionInner}>
        <h2 id="pricing-heading" className={sectionHeading}>
          {pricing.heading}
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg">{pricing.intro}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-12">
          <div>
            <h3 id="standard-heading" className={subheading}>
              Standard cleaning
            </h3>
            <p id="standard-note" className="mt-1 text-sm">
              Furnished home, price per clean.
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-canopy/15">
              <table
                aria-labelledby="standard-heading"
                aria-describedby="standard-note"
                className="w-full border-collapse text-center text-sm tabular-nums sm:text-base"
              >
                <thead>
                  <tr className="bg-canopy text-fog">
                    <th scope="col" className={`${cell} text-left`}>
                      Bedrooms
                    </th>
                    {pricing.bathCounts.map((baths) => (
                      <th key={baths} scope="col" className={cell}>
                        {baths} {baths === 1 ? "bath" : "baths"}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.standard.map((row) => (
                    <tr key={row.bedrooms} className="border-t border-eucalyptus/50 even:bg-fog">
                      <th scope="row" className={`${cell} text-left font-bold text-canopy`}>
                        {row.bedrooms}
                        {/* Phones show just the number under the "Bedrooms" column; screen readers always hear the word. */}
                        <span className="sr-only sm:not-sr-only"> {row.bedrooms === 1 ? "bedroom" : "bedrooms"}</span>
                      </th>
                      {row.prices.map((amount, index) => (
                        <td key={pricing.bathCounts[index]} className={`${cell} font-bold`}>
                          {amount === null ? (
                            <>
                              <span aria-hidden="true" className="font-normal text-ink/50">
                                —
                              </span>
                              <span className="sr-only">Not offered</span>
                            </>
                          ) : (
                            price(amount)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="self-start rounded-2xl bg-fog p-6">
            <h3 id="recurring-heading" className={subheading}>
              Save with a recurring plan
            </h3>
            <ul aria-labelledby="recurring-heading" className="mt-4 divide-y divide-eucalyptus">
              {pricing.recurring.map((plan) => (
                <li key={plan.label} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-bold">{plan.label}</span>
                  <span className="font-display text-2xl font-bold text-canopy">{plan.discount}% off</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">Off every clean. {pricing.recurringNote}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 id="move-heading" className={subheading}>
              Move-in / move-out cleaning
            </h3>
            <p id="move-note" className="mt-1 text-sm">
              {pricing.moveNote}
            </p>
            <table
              aria-labelledby="move-heading"
              aria-describedby="move-note"
              className="mt-4 w-full border-collapse tabular-nums"
            >
              <thead className="sr-only">
                <tr>
                  <th scope="col">Home size</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-eucalyptus border-y border-eucalyptus">
                {pricing.move.map((tier) => (
                  <tr key={tier.size}>
                    <th scope="row" className="py-3 text-left font-normal">
                      {tier.size}
                    </th>
                    <td className="py-3 text-right font-display text-xl font-bold text-canopy">{price(tier.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className={subheading}>Good to know</h3>
            <ul className="mt-4 space-y-3">
              {pricing.terms.map((term) => (
                <li key={term} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-eucalyptus" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border-2 border-eucalyptus bg-fog p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-bold text-canopy">{pricing.offChart}</p>
          <QuoteLink className={`${primaryButton} w-full sm:w-auto`}>{quoteCta}</QuoteLink>
        </div>
      </div>
    </section>
  );
}
