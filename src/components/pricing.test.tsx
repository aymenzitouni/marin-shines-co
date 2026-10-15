import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { quoteCta } from "@/content/site";
import { Pricing } from "./pricing";

// The published rates this page matches, row by row (bedrooms 1-5, baths 1-5). null = not offered.
const STANDARD_RATES: (number | null)[][] = [
  [229, 249, null, null, null],
  [249, 269, 289, null, null],
  [279, 299, 319, 339, null],
  [329, 349, 369, 389, 409],
  [379, 399, 419, 439, 459],
];

describe("Pricing", () => {
  it("is the #pricing section the navbar links to", () => {
    const { container } = render(<Pricing />);
    expect(container.querySelector("section#pricing")).not.toBeNull();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("shows every standard-cleaning rate by bedrooms and bathrooms", () => {
    render(<Pricing />);
    const table = screen.getByRole("table", { name: /standard cleaning/i });
    const columns = within(table).getAllByRole("columnheader").map((cell) => cell.textContent);
    expect(columns).toEqual(["Bedrooms", "1 bath", "2 baths", "3 baths", "4 baths", "5 baths"]);

    const rows = within(table).getAllByRole("row").slice(1);
    expect(rows).toHaveLength(STANDARD_RATES.length);
    rows.forEach((row, index) => {
      const bedrooms = index + 1;
      expect(within(row).getByRole("rowheader")).toHaveTextContent(`${bedrooms} bedroom`);
      const cells = within(row).getAllByRole("cell").map((cell) => cell.textContent);
      expect(cells).toEqual(STANDARD_RATES[index].map((price) => (price === null ? "—Not offered" : `$${price}`)));
    });
  });

  it("lists the recurring discounts", () => {
    render(<Pricing />);
    const list = screen.getByRole("list", { name: /recurring/i });
    const items = within(list).getAllByRole("listitem").map((item) => item.textContent);
    expect(items).toEqual([
      expect.stringMatching(/Weekly.*15% off/),
      expect.stringMatching(/Every 2 weeks.*10% off/),
      expect.stringMatching(/Monthly.*5% off/),
    ]);
    expect(screen.getByText(/no long-term contracts/i)).toBeInTheDocument();
  });

  it("lists the move-in / move-out flat rates by square footage", () => {
    render(<Pricing />);
    const table = screen.getByRole("table", { name: /move-in/i });
    const prices = within(table).getAllByRole("cell").map((cell) => cell.textContent);
    expect(prices).toEqual(["$299", "$399", "$499", "$599"]);
    const sizes = within(table).getAllByRole("rowheader").map((cell) => cell.textContent);
    expect(sizes).toEqual(["Up to 1,000 sq ft", "1,001–2,000 sq ft", "2,001–3,000 sq ft", "3,001–4,000 sq ft"]);
  });

  it("states payment and cancellation terms", () => {
    render(<Pricing />);
    expect(screen.getByText(/cash, check, or zelle/i)).toBeInTheDocument();
    expect(screen.getByText(/less than 24 hours.*50%/i)).toBeInTheDocument();
    expect(screen.getByText(/100%/)).toBeInTheDocument();
  });

  it("sends anything off the chart to the free quote", () => {
    render(<Pricing />);
    const cta = screen.getByRole("link", { name: quoteCta });
    expect(cta).toHaveAttribute("href", "#quote");
    expect(cta).toHaveAttribute("data-cta", "quote");
  });
});
