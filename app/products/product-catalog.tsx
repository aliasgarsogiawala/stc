"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CatalogCategory } from "./catalog-data";
import { WhatsApp } from "../icons";

const WA_NUMBER = "919920755226";
function waHref(product: string) {
  const text = `Hi Supreme Trading, I'd like to enquire about ${product}. Please share grade, packing and availability.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

type ProductCatalogProps = {
  categories: CatalogCategory[];
};

const PAGE_SIZE = 24;

const productImages: Record<string, string> = {
  jeevanti: "/supreme/source/1a.png",
  kaiphal: "/supreme/source/2a.png",
  "kahruba tukda": "/supreme/source/3.png",
  kababchini: "/supreme/source/4.png",
  "jund badaster": "/supreme/source/5.png",
  "jeera sufaid": "/supreme/source/6.png",
};

function imageForProduct(name: string) {
  return productImages[name.trim().toLocaleLowerCase()];
}

// Short category codes used on the neutral tiles.
const categoryCode: Record<string, string> = {
  "herbs-spices": "HB",
  oils: "OL",
  honey: "HY",
  "food-herbs": "FD",
  industrial: "IN",
};

export default function ProductCatalog({ categories }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const products = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return categories
      .flatMap((category) => category.products.map((product) => ({ ...product, categoryName: category.name })))
      .filter((product) => activeCategory === "all" || product.category === activeCategory)
      .filter((product) => {
        if (!normalizedQuery) return true;
        return [product.name, product.detail, product.subgroup, product.categoryName]
          .filter(Boolean)
          .some((value) => value!.toLocaleLowerCase().includes(normalizedQuery));
      });
  }, [activeCategory, categories, query]);

  const pageCount = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const visibleProducts = products.slice(pageStart, pageStart + PAGE_SIZE);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setPage(1);
  };

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("all");
    setPage(1);
  };

  const changePage = (nextPage: number) => {
    setPage(Math.max(1, Math.min(nextPage, pageCount)));
    document.querySelector("#catalog-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filterBtn = (active: boolean) =>
    `min-h-[44px] px-3.5 rounded-full border cursor-pointer text-xs font-extrabold transition ${
      active ? "border-deep bg-deep text-white" : "border-line bg-transparent text-ink hover:border-deep hover:bg-deep hover:text-white"
    }`;
  const pagerBtn = "w-fit min-h-[42px] px-4 border border-deep rounded bg-deep text-white text-[11px] font-black cursor-pointer disabled:border-line disabled:bg-transparent disabled:text-muted disabled:cursor-not-allowed disabled:opacity-55";
  const clearBtn = "pb-1 border-0 border-b border-line cursor-pointer bg-transparent text-ink font-extrabold text-xs";

  return (
    <section className="py-[112px] max-[720px]:py-[78px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 gs-reveal" id="catalog">
      <div className="grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] max-[1100px]:grid-cols-1 gap-[38px] items-end">
        <div>
          <label htmlFor="product-search" className="mb-3 block text-clay text-[11px] font-black uppercase">Search products</label>
          <div className="h-[60px] px-[18px] border border-ink flex items-center gap-3 bg-white focus-within:outline focus-within:outline-[3px] focus-within:outline-[rgba(184,103,79,0.2)]">
            <span aria-hidden="true" className="text-[28px] leading-none">⌕</span>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => { setQuery(event.target.value); setPage(1); }}
              placeholder="Product or English name"
              className="w-full border-0 outline-0 bg-transparent text-ink text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end max-[1100px]:justify-start gap-2 flex-wrap" aria-label="Filter by product category">
          <button type="button" className={filterBtn(activeCategory === "all")} onClick={() => selectCategory("all")}>
            All <span className={`ml-1.5 text-[10px] ${activeCategory === "all" ? "text-white/60" : "text-muted"}`}>{categories.reduce((total, category) => total + category.products.length, 0)}</span>
          </button>
          {categories.map((category) => (
            <button type="button" className={filterBtn(activeCategory === category.id)} onClick={() => selectCategory(category.id)} key={category.id}>
              {category.shortName} <span className={`ml-1.5 text-[10px] ${activeCategory === category.id ? "text-white/60" : "text-muted"}`}>{category.products.length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-[52px] pb-3.5 border-b-2 border-ink flex justify-between items-center scroll-mt-[110px]" id="catalog-results" aria-live="polite">
        <p className="m-0 text-muted text-xs">
          {products.length > 0
            ? <>Showing <strong className="text-ink">{pageStart + 1}–{Math.min(pageStart + PAGE_SIZE, products.length)}</strong> of {products.length}</>
            : "No matching products"}
        </p>
        {(query || activeCategory !== "all") && (
          <button type="button" className={clearBtn} onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      {visibleProducts.length ? (
        <>
          <div className="mt-[18px] grid grid-cols-4 max-[1180px]:grid-cols-3 max-[820px]:grid-cols-2 max-[720px]:grid-cols-1 gap-3.5 gs-stagger">
            {visibleProducts.map((product, index) => {
              const image = imageForProduct(product.name);
              return (
                <article className="group min-w-0 min-h-[320px] p-[18px] border border-line rounded-[7px] flex flex-col bg-white overflow-hidden transition-[transform,box-shadow,border-color] duration-200 hover:border-black/[0.34] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(19,32,27,0.09)]" key={product.id}>
                  <div className="flex justify-between gap-2.5 text-clay text-[9px] font-black uppercase">
                    <span>{String(pageStart + index + 1).padStart(3, "0")}</span>
                    <span className="max-w-[72%] text-muted overflow-hidden text-right text-ellipsis whitespace-nowrap">{product.categoryName}</span>
                  </div>
                  {image ? (
                    <div className="h-[126px] -mx-[18px] mt-4 mb-5 py-2.5 px-3.5 border-y border-line grid place-items-center bg-[#f7f7f2] overflow-hidden">
                      <Image src={image} alt={product.name} width={360} height={247} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.05]" />
                    </div>
                  ) : (
                    <div className="h-[126px] -mx-[18px] mt-4 mb-5 border-y border-line grid place-items-center relative overflow-hidden [background:radial-gradient(circle_at_28%_22%,rgba(47,111,199,0.12),transparent_62%),linear-gradient(150deg,#eef3fb,#dde8f6)] before:content-[''] before:absolute before:right-[-26px] before:top-[-26px] before:w-24 before:h-24 before:border before:border-[rgba(47,111,199,0.16)] before:rounded-[22px] before:rotate-[30deg]" aria-hidden="true">
                      <span className="font-heading text-[54px] font-bold leading-none text-[#2f6fc7]">{product.name.trim().charAt(0)}</span>
                      <span className="absolute right-3 bottom-2 text-[9px] font-black tracking-[0.12em] text-[rgba(10,44,102,0.42)]">{categoryCode[product.category] ?? "ST"}</span>
                    </div>
                  )}
                  <div className="mb-5">
                    <h2 className="m-0 font-heading text-[27px] leading-none [overflow-wrap:anywhere]">{product.name}</h2>
                    {product.detail && <p className="mt-2 text-muted text-[11px] leading-[1.5]">{product.detail}</p>}
                    {product.subgroup && <small className="mt-2.5 block text-clay text-[8px] font-black tracking-[0.04em] uppercase">{product.subgroup}</small>}
                  </div>
                  <a
                    className="mt-auto py-2 px-[13px] inline-flex items-center gap-[7px] w-fit border border-[rgba(37,160,90,0.28)] rounded-full bg-[rgba(37,211,102,0.08)] text-[#1f7d45] text-[11px] font-extrabold transition hover:bg-[rgba(37,211,102,0.16)] hover:border-[rgba(37,160,90,0.5)] hover:-translate-y-px [&_.ico-wa]:text-[#25a05a]"
                    href={waHref(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                  >
                    <WhatsApp /> Enquire on WhatsApp
                  </a>
                </article>
              );
            })}
          </div>

          {pageCount > 1 && (
            <nav className="mt-9 py-[18px] border-y border-line grid grid-cols-[1fr_auto_1fr] items-center gap-5" aria-label="Catalogue pages">
              <button className={pagerBtn} type="button" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <p className="m-0 text-muted text-[11px]">Page <strong className="text-ink">{currentPage}</strong> of {pageCount}</p>
              <button className={`${pagerBtn} justify-self-end`} type="button" onClick={() => changePage(currentPage + 1)} disabled={currentPage === pageCount}>
                Next
              </button>
            </nav>
          )}
        </>
      ) : (
        <div className="min-h-[280px] grid place-content-center justify-items-center gap-3.5 text-muted">
          <p>No products match “{query}”.</p>
          <button type="button" className={clearBtn} onClick={clearFilters}>View all products</button>
        </div>
      )}
    </section>
  );
}
