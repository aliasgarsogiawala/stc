"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "../../icons";
import { WHATSAPP_NUMBER } from "../../contact-details";
import type { CatalogProduct } from "../catalog-data";

function waHref(product: string) {
  const text = `Hi Supreme Trading, I'd like to enquire about ${product}. Please share grade, packing and availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const productImages: Record<string, string> = {
  "Rose Petals": "/supreme/generated/petals/rose-petals.png",
  Chamomile: "/supreme/generated/petals/chamomile.png",
  Hibiscus: "/supreme/generated/petals/hibiscus.png",
  Lavender: "/supreme/generated/petals/lavender.png",
  "Butterfly Pea": "/supreme/generated/petals/butterfly-pea.png",
  Calendula: "/supreme/generated/petals/calendula.png",
  "Blue Pea": "/supreme/generated/petals/blue-pea.png",
  Jasmine: "/supreme/generated/petals/jasmine.png",
  Lemongrass: "/supreme/generated/petals/lemongrass.png",
};

type PetalProductGridProps = {
  products: CatalogProduct[];
};

export default function PetalProductGrid({ products }: PetalProductGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return products;

    return products.filter((product) =>
      [product.name, product.detail, product.subgroup]
        .filter(Boolean)
        .some((value) => value!.toLocaleLowerCase().includes(normalized)),
    );
  }, [products, query]);

  return (
    <section
      className="scroll-mt-24 bg-[#fbfaf5] px-[clamp(22px,4.5vw,76px)] py-[112px] max-[760px]:px-5 max-[760px]:py-20 gs-reveal"
      id="category-products"
    >
      <div className="mx-auto max-w-[1660px] grid grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] max-[820px]:grid-cols-1 gap-12 items-end">
        <div className="max-w-[820px]">
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,70px)] font-semibold leading-[0.96] text-[#123451]">
            Product Index
          </h2>
          <p className="mt-5 mb-0 max-w-[620px] text-[15px] leading-[1.75] text-[#607384]">
            Nine dried botanical ingredients, supplied against your required form,
            grade, quantity and packing specification.
          </p>
        </div>

        <label className="grid gap-2.5">
          <span className="text-[clamp(12px,0.85vw,15px)] font-bold tracking-[0.025em] text-[#607384]">Search petals</span>
          <input
            className="h-14 px-4 border border-[#173a57]/20 rounded-md outline-none bg-white text-[#123451] text-[clamp(15px,1.05vw,18px)] transition-[border,box-shadow] focus:ring-4 focus:border-[#4d78a5] focus:ring-[#4d78a5]/15"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Enter product name"
          />
        </label>
      </div>

      <div
        className="mx-auto mt-12 mb-9 max-w-[1660px] pb-4 border-b-2 border-[#123451] flex items-center justify-between gap-5 text-[clamp(13px,0.92vw,16px)] text-[#607384]"
        aria-live="polite"
      >
        <p className="m-0">
          {filtered.length
            ? <>Showing <strong className="text-[#123451]">{filtered.length}</strong> of {products.length}</>
            : "No matching products"}
        </p>
        {query && (
          <button
            className="pb-1 border-b border-current cursor-pointer bg-transparent text-[#123451] text-[clamp(13px,0.92vw,16px)] font-black"
            type="button"
            onClick={() => setQuery("")}
          >
            Clear search
          </button>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="min-h-[280px] grid place-content-center text-[#607384]">
          No products match “{query}”.
        </div>
      )}

      <div className="mx-auto grid max-w-[1660px] grid-cols-3 gap-x-6 gap-y-9 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gs-stagger">
        {filtered.map((product, index) => (
          <article
            className="tilt-card group rounded-2xl border border-[#173a57]/15 bg-white p-3 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-[#356fa7]/55 hover:shadow-[0_24px_55px_rgba(26,73,116,0.12)]"
            key={product.id}
          >
            <div className="relative aspect-square overflow-hidden rounded-[8px] bg-[#f2ede4]">
              <Image
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                src={productImages[product.name]}
                alt={`${product.name} prepared for bulk supply`}
                fill
                sizes="(max-width: 600px) calc(100vw - 64px), (max-width: 960px) 44vw, 29vw"
              />
              <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center border border-[#173a57]/15 bg-white/88 text-[clamp(10px,0.72vw,12px)] font-black tracking-[0.06em] text-[#356fa7] backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex min-h-[154px] flex-col px-3 pt-6 pb-4">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="m-0 font-heading text-[clamp(26px,2.4vw,34px)] font-bold leading-none text-[#123451]">
                    {product.name}
                  </h3>
                  {product.detail && (
                    <p className="mt-2 mb-0 text-[clamp(13px,0.95vw,17px)] leading-[1.55] text-[#718191]">
                      {product.detail}
                    </p>
                  )}
                </div>
                <ArrowUpRight />
              </div>

              <a
                className="mt-auto w-10 h-10 grid place-items-center border border-line transition-colors hover:border-black/25"
                href={waHref(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${product.name} on WhatsApp`}
                title={`WhatsApp enquiry for ${product.name}`}
              >
                <Image src="/whats.avif" alt="" width={740} height={740} className="w-5 h-5 object-contain" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
