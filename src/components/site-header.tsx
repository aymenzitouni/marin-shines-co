import { quoteCta, site } from "@/content/site";
import { PhoneIcon } from "./icons";
import { PhoneLink } from "./phone-link";
import { QuoteLink } from "./quote-link";
import { focusRing, primaryButton, secondaryButton } from "./ui";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "#service-area", label: "Areas" },
];

/**
 * One nav, two layouts: a scrollable second row on small screens, inline from lg up.
 * Sticky from md up only, so on phones it never stacks with the bottom quote bar.
 */
export function SiteHeader() {
  return (
    <header className="z-30 border-b border-canopy/10 bg-fog/95 backdrop-blur md:sticky md:top-0">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-4 py-3 md:px-8">
        <a href="#top" className={`rounded font-display text-xl font-bold text-canopy md:text-2xl ${focusRing}`}>
          {site.name}
        </a>
        <div className="ml-auto flex items-center gap-2 lg:order-last">
          <PhoneLink className={secondaryButton}>
            <PhoneIcon className="size-5" />
            <span className="xl:hidden">Call</span>
            <span className="hidden xl:inline">
              <span className="sr-only">Call or text </span>
              {site.phone.display}
            </span>
          </PhoneLink>
          {/* Hidden on phones: the hero form sits right below, and the sticky bar takes over after it. */}
          <span className="hidden sm:block">
            <QuoteLink className={primaryButton}>{quoteCta}</QuoteLink>
          </span>
        </div>
        <nav aria-label="Main" className="w-full overflow-x-auto lg:w-auto">
          <ul className="flex gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block whitespace-nowrap rounded-lg px-2 py-2 text-sm font-bold text-canopy hover:bg-paper md:text-base ${focusRing}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
