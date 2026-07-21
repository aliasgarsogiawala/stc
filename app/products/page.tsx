import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { getCatalog } from "./catalog-data";
import ProductCatalog from "./product-catalog";

const categoryImages: Record<string, string> = {
  "herbs-spices": "/supreme/source/herbs_and_spices.png",
  oils: "/supreme/source/essential_oil.png",
  honey: "/supreme/source/honey_img.png",
  "food-herbs": "/supreme/source/food_herbs_final.png",
  industrial: "/supreme/source/industrial_chemicals.png",
};

export const metadata: Metadata = {
  title: "Product Catalogue | Supreme Trading Corp",
  description: "Search Supreme Trading Corp's range of herbs, spices, natural oils, honey, food powders and industrial chemicals.",
  openGraph: {
    title: "Product Catalogue | Supreme Trading Corp",
    description: "Search 700+ botanical, food, oil and industrial material listings.",
    images: [{ url: "/supreme/source/bredcrumb-bg.jpg", width: 1920, height: 987, alt: "Supreme Trading Corp raw material catalogue" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Catalogue | Supreme Trading Corp",
    description: "Search 700+ botanical, food, oil and industrial material listings.",
    images: ["/supreme/source/bredcrumb-bg.jpg"],
  },
};

export default async function ProductsPage() {
  const categories = await getCatalog();
  const totalProducts = categories.reduce((total, category) => total + category.products.length, 0);

  return (
    <main className="products-page">
      <SiteHeader theme="solid" />

      <section className="catalog-hero">
        <Image
          className="catalog-hero-image"
          data-hero-media
          src="/supreme/source/industrial_chemicals.png"
          alt="Industrial chemical laboratory glassware"
          width={580}
          height={478}
          priority
        />
        <div className="catalog-breadcrumb" data-hero-item><Link href="/">Home</Link><span>/</span><span>Products</span></div>
        <h1 data-hero-item>Product Catalogue</h1>
        <div className="catalog-hero-bottom" data-hero-meta>
          <p>
            {totalProducts} listed products across herbs and spices, oils, honey, food ingredients and industrial chemicals.
            Grade, packing and availability are confirmed on enquiry.
          </p>
          <a className="button button-light" href="#catalog">Browse catalogue</a>
        </div>
      </section>

      <section className="category-overview gs-reveal" aria-label="Product categories">
        <div className="category-intro">
          <p className="section-kicker">Catalogue</p>
          <h2>Product categories</h2>
        </div>
        <div className="category-cards gs-stagger">
          {categories.map((category, index) => (
            <a className="category-card" href={`#catalog`} key={category.id}>
              <div className="category-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{category.products.length}+</strong>
              </div>
              <Image
                src={categoryImages[category.id]}
                alt={`${category.name} category`}
                width={290}
                height={239}
              />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </a>
          ))}
        </div>
      </section>

      <ProductCatalog categories={categories} />

      <section className="catalog-enquiry gs-reveal">
        <div>
          <p className="eyebrow"><span /> Custom requirement</p>
          <h2>Product sourcing enquiry</h2>
        </div>
        <div>
          <p>Include the material name, grade, required quantity, packing preference and destination for a faster response.</p>
          <Link className="button button-light" href="/contact#enquiry">Send requirement</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
