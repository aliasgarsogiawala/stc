"use client";

import { useMemo, useState } from "react";

export type HoneyVariant = {
  name: string;
  detail?: string;
};

type HoneyCatalogProps = {
  naturalHoney: HoneyVariant[];
  infusedHoney: HoneyVariant[];
};

export default function HoneyCatalog({ naturalHoney, infusedHoney }: HoneyCatalogProps) {
  const [query, setQuery] = useState("");

  const { natural, infused, total } = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    const matches = (variant: HoneyVariant) =>
      !normalized ||
      [variant.name, variant.detail]
        .filter(Boolean)
        .some((value) => value!.toLocaleLowerCase().includes(normalized));

    const filteredNatural = naturalHoney.filter(matches);
    const filteredInfused = infusedHoney.filter(matches);

    return {
      natural: filteredNatural,
      infused: filteredInfused,
      total: filteredNatural.length + filteredInfused.length,
    };
  }, [infusedHoney, naturalHoney, query]);

  return (
    <section className="honey-variants scroll-mt-24" id="category-products">
      <div className="relative z-[1] mb-11 grid grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] max-[820px]:grid-cols-1 gap-12 items-end">
        <div className="max-w-[640px]">
          <h2 className="mt-3 mb-0 font-heading text-[clamp(40px,4.6vw,64px)] leading-none font-semibold text-ink" data-reveal>
            Product Index
          </h2>
          <p className="mt-4 mb-0 text-muted text-[clamp(16px,1.12vw,20px)]">
            Natural and infused varieties available against your required grade and quantity.
          </p>
        </div>

        <label className="grid gap-2.5">
          <span className="text-[clamp(12px,0.85vw,15px)] font-bold tracking-[0.025em] text-muted">Search honey</span>
          <input
            className="h-14 px-4 border border-line rounded-md outline-none bg-white text-ink text-[clamp(15px,1.05vw,18px)] transition-[border,box-shadow] focus:ring-4 focus:border-[#4d78a5] focus:ring-[#4d78a5]/15"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Enter product name"
          />
        </label>
      </div>

      <div
        className="relative z-[1] mb-10 pb-4 border-b-2 border-ink flex items-center justify-between gap-5 text-[clamp(13px,0.92vw,16px)] text-muted"
        aria-live="polite"
      >
        <p className="m-0">
          {total ? <>Showing <strong className="text-ink">{total}</strong> of {naturalHoney.length + infusedHoney.length}</> : "No matching products"}
        </p>
        {query && (
          <button
            className="pb-1 border-b border-current cursor-pointer bg-transparent text-ink text-[clamp(13px,0.92vw,16px)] font-black"
            type="button"
            onClick={() => setQuery("")}
          >
            Clear search
          </button>
        )}
      </div>

      {total === 0 && (
        <div className="relative z-[1] min-h-[280px] grid place-content-center text-muted">
          No products match “{query}”.
        </div>
      )}

      {natural.length > 0 && (
        <div className="honey-catalog-group">
          <div className="honey-catalog-heading">
            <div>
              <span>01</span>
              <h3>Natural Honey</h3>
            </div>
            <p>{natural.length} varieties</p>
          </div>
          <div className="honey-variant-grid honey-catalog-grid gs-stagger">
            {natural.map((variant, index) => (
              <article className="honey-variant-card honey-catalog-card tilt-card" key={variant.name}>
                <span className="honey-variant-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{variant.name}</h3>
                {variant.detail && <p>{variant.detail}</p>}
                <a
                  className="honey-catalog-enquire"
                  href={`mailto:info@supremetradingcorp.com?subject=${encodeURIComponent(`Honey enquiry: ${variant.name}`)}`}
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>
      )}

      {infused.length > 0 && (
        <div className={`honey-catalog-group ${natural.length > 0 ? "honey-catalog-group-infused" : ""}`}>
          <div className="honey-catalog-heading">
            <div>
              <span>02</span>
              <h3>Infused Natural Honey</h3>
            </div>
            <p>{infused.length} varieties</p>
          </div>
          <div className="honey-variant-grid honey-catalog-grid gs-stagger">
            {infused.map((variant, index) => (
              <article className="honey-variant-card honey-catalog-card tilt-card" key={variant.name}>
                <span className="honey-variant-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{variant.name}</h3>
                <a
                  className="honey-catalog-enquire"
                  href={`mailto:info@supremetradingcorp.com?subject=${encodeURIComponent(`Honey enquiry: ${variant.name}`)}`}
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
