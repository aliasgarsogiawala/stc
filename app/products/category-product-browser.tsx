"use client";

import { useMemo, useState } from "react";
import type { CatalogProduct } from "./catalog-data";

type ProductBrowserProps = {
  categoryName: string;
  products: CatalogProduct[];
  theme: "chemicals" | "food";
};

const PAGE_SIZE = 24;

const themeClasses = {
  chemicals: {
    badge: "border-[#86b5bd]/35 bg-[#86b5bd]/10 text-[#b9dde2]",
    index: "text-[#78aeb8]",
    cardHover: "hover:border-[#78aeb8]/65 hover:shadow-[0_20px_50px_rgba(7,39,47,0.12)]",
    button: "border-[#173e47] bg-[#173e47] text-white hover:bg-[#0b2f37]",
    focus: "focus:border-[#4f8994] focus:ring-[#4f8994]/15",
  },
  food: {
    badge: "border-[#b86d45]/30 bg-[#b86d45]/10 text-[#8d452a]",
    index: "text-[#b5653e]",
    cardHover: "hover:border-[#b5653e]/60 hover:shadow-[0_20px_50px_rgba(110,54,30,0.11)]",
    button: "border-[#8d452a] bg-[#8d452a] text-white hover:bg-[#71351f]",
    focus: "focus:border-[#b5653e] focus:ring-[#b5653e]/15",
  },
} as const;

export default function CategoryProductBrowser({ categoryName, products, theme }: ProductBrowserProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const styles = themeClasses[theme];

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return products;

    return products.filter((product) =>
      [product.name, product.detail, product.subgroup]
        .filter(Boolean)
        .some((value) => value!.toLocaleLowerCase().includes(normalized)),
    );
  }, [products, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const changePage = (nextPage: number) => {
    setPage(Math.max(1, Math.min(nextPage, pageCount)));
    document.querySelector("#category-products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="py-[112px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 bg-[#fbfaf5] gs-reveal scroll-mt-24"
      id="category-products"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] max-[820px]:grid-cols-1 gap-12 items-end">
        <div>
          <span className={`inline-flex px-3 py-2 border rounded-full text-[9px] font-black tracking-[0.08em] uppercase ${styles.badge}`}>
            Product index
          </span>
          <h2 className="max-w-[760px] mt-5 mb-0 font-heading text-[clamp(44px,5vw,70px)] leading-[0.96] font-semibold text-ink">
            Available materials
          </h2>
        </div>

        <label className="grid gap-2.5">
          <span className="text-[10px] font-black tracking-[0.05em] uppercase text-muted">Search {categoryName}</span>
          <input
            className={`h-14 px-4 border border-line rounded-md outline-none bg-white text-ink text-sm transition-[border,box-shadow] focus:ring-4 ${styles.focus}`}
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setPage(1); }}
            placeholder="Enter product name"
          />
        </label>
      </div>

      <div className="mt-12 pb-4 border-b-2 border-ink flex items-center justify-between gap-5 text-xs text-muted" aria-live="polite">
        <p className="m-0">
          {filtered.length
            ? <>Showing <strong className="text-ink">{start + 1}–{Math.min(start + PAGE_SIZE, filtered.length)}</strong> of {filtered.length}</>
            : "No matching products"}
        </p>
        {query && (
          <button className="pb-1 border-b border-current cursor-pointer bg-transparent text-ink text-xs font-black" type="button" onClick={() => { setQuery(""); setPage(1); }}>
            Clear search
          </button>
        )}
      </div>

      {visible.length ? (
        <div className="mt-5 grid grid-cols-4 max-[1180px]:grid-cols-3 max-[840px]:grid-cols-2 max-[580px]:grid-cols-1 gap-3 gs-stagger">
          {visible.map((product, index) => (
            <article
              className={`tilt-card min-h-[260px] p-5 border border-line rounded-lg flex flex-col bg-white transition-[transform,border-color,box-shadow] duration-300 ${styles.cardHover}`}
              key={product.id}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`text-[10px] font-black ${styles.index}`}>{String(start + index + 1).padStart(3, "0")}</span>
                {product.subgroup && <span className="max-w-[64%] px-2.5 py-1 rounded-full bg-[#f1f1eb] text-muted text-[8px] font-black uppercase text-right">{product.subgroup}</span>}
              </div>
              <div className="mt-auto pt-14">
                <h3 className="m-0 font-heading text-[28px] leading-none font-bold text-ink break-words">{product.name}</h3>
                {product.detail && <p className="mt-2 mb-0 text-muted text-[11px] leading-[1.55]">{product.detail}</p>}
              </div>
              <a
                className="w-fit mt-6 pb-1 border-b border-current text-ink text-[10px] font-black"
                href={`mailto:info@supremetrading.in?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`}
                aria-label={`Enquire about ${product.name}`}
              >
                Enquire <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="min-h-[280px] grid place-content-center text-muted">No products match “{query}”.</div>
      )}

      {pageCount > 1 && (
        <nav className="mt-10 py-5 border-y border-line grid grid-cols-[1fr_auto_1fr] max-[580px]:grid-cols-2 items-center gap-5" aria-label={`${categoryName} catalogue pages`}>
          <button
            className={`w-fit min-h-11 px-4 border rounded cursor-pointer text-[11px] font-black disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-transparent disabled:text-muted disabled:border-line ${styles.button}`}
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <p className="m-0 text-muted text-[11px] max-[580px]:col-span-2 max-[580px]:row-start-1 max-[580px]:text-center">Page <strong className="text-ink">{currentPage}</strong> of {pageCount}</p>
          <button
            className={`w-fit min-h-11 px-4 border rounded cursor-pointer justify-self-end text-[11px] font-black disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-transparent disabled:text-muted disabled:border-line ${styles.button}`}
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Next →
          </button>
        </nav>
      )}
    </section>
  );
}
