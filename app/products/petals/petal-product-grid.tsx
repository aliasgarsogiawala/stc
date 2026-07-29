import Image from "next/image";
import { ArrowUpRight } from "../../icons";
import type { CatalogProduct } from "../catalog-data";

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
  return (
    <section
      className="scroll-mt-24 bg-[#fbfaf5] px-[clamp(22px,6vw,92px)] py-[112px] max-[760px]:px-5 max-[760px]:py-20 gs-reveal"
      id="category-products"
    >
      <div className="mx-auto mb-14 max-w-[820px] text-center">
        <p className="m-0 text-[10px] font-black uppercase tracking-[0.09em] text-[#356fa7]">
          Petal range
        </p>
        <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,70px)] font-semibold leading-[0.96] text-[#123451]">
          Available products
        </h2>
        <p className="mx-auto mt-5 mb-0 max-w-[620px] text-[15px] leading-[1.75] text-[#607384]">
          Nine dried botanical ingredients, supplied against your required form,
          grade, quantity and packing specification.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1380px] grid-cols-3 gap-x-6 gap-y-9 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gs-stagger">
        {products.map((product, index) => (
          <article
            className="tilt-card group border border-[#173a57]/15 bg-white p-3 transition-[border-color,box-shadow] duration-300 hover:border-[#356fa7]/55 hover:shadow-[0_24px_55px_rgba(26,73,116,0.12)]"
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
              <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center border border-[#173a57]/15 bg-white/88 text-[9px] font-black tracking-[0.06em] text-[#356fa7] backdrop-blur-sm">
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
                    <p className="mt-2 mb-0 text-[12px] leading-[1.55] text-[#718191]">
                      {product.detail}
                    </p>
                  )}
                </div>
                <ArrowUpRight />
              </div>

              <a
                className="mt-auto w-fit border-b border-[#356fa7] pb-1 text-[11px] font-bold text-[#2d68a0]"
                href={`mailto:info@supremetrading.in?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`}
              >
                Enquire
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
