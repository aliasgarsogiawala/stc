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

const categoryImages: Record<string, string> = {
  "herbs-spices": "/supreme/source/herbs_and_spices.png",
  oils: "/supreme/source/essential_oil.png",
  honey: "/supreme/source/honey_img.png",
  "food-herbs": "/supreme/source/food_herbs_final.png",
  industrial: "/supreme/source/industrial_chemicals.png",
};

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

  return (
    <section className="catalog-shell gs-reveal" id="catalog">
      <div className="catalog-tools">
        <div className="catalog-search">
          <label htmlFor="product-search">Search products</label>
          <div className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(event) => { setQuery(event.target.value); setPage(1); }}
              placeholder="Product or English name"
            />
          </div>
        </div>

        <div className="category-filters" aria-label="Filter by product category">
          <button
            type="button"
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => selectCategory("all")}
          >
            All <span>{categories.reduce((total, category) => total + category.products.length, 0)}</span>
          </button>
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category.id ? "active" : ""}
              onClick={() => selectCategory(category.id)}
              key={category.id}
            >
              {category.shortName} <span>{category.products.length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-status" id="catalog-results" aria-live="polite">
        <p>
          {products.length > 0
            ? <>Showing <strong>{pageStart + 1}–{Math.min(pageStart + PAGE_SIZE, products.length)}</strong> of {products.length}</>
            : "No matching products"}
        </p>
        {(query || activeCategory !== "all") && (
          <button type="button" onClick={clearFilters}>Clear filters</button>
        )}
      </div>

      {visibleProducts.length ? (
        <>
          <div className="catalog-grid gs-stagger">
            {visibleProducts.map((product, index) => {
              const image = imageForProduct(product.name);
              return (
                <article className="catalog-card" key={product.id}>
                  <div className="catalog-card-top">
                    <span>{String(pageStart + index + 1).padStart(3, "0")}</span>
                    <span>{product.categoryName}</span>
                  </div>
                  {image ? (
                    <div className="catalog-card-image">
                      <Image src={image} alt={product.name} width={360} height={247} />
                    </div>
                  ) : (
                    <div className="catalog-card-neutral" aria-hidden="true">
                      <span className="ccn-mono">{product.name.trim().charAt(0)}</span>
                      <span className="ccn-code">{categoryCode[product.category] ?? "ST"}</span>
                    </div>
                  )}
                  <div className="catalog-card-copy">
                    <h2>{product.name}</h2>
                    {product.detail && <p>{product.detail}</p>}
                    {product.subgroup && <small>{product.subgroup}</small>}
                  </div>
                  <a
                    className="catalog-card-wa"
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
            <nav className="catalog-pagination" aria-label="Catalogue pages">
              <button className="pager-btn" type="button" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <p>Page <strong>{currentPage}</strong> of {pageCount}</p>
              <button className="pager-btn" type="button" onClick={() => changePage(currentPage + 1)} disabled={currentPage === pageCount}>
                Next
              </button>
            </nav>
          )}
        </>
      ) : (
        <div className="catalog-empty">
          <p>No products match “{query}”.</p>
          <button type="button" onClick={clearFilters}>View all products</button>
        </div>
      )}
    </section>
  );
}
