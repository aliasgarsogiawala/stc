import Image from "next/image";
import Link from "next/link";

export default function HoneyHero() {
  return (
    <section className="product-detail-hero honey-hero">
      <Image
        className="honey-hero-video"
        src="/supreme/generated/honey-flatlay-full-hero.png"
        alt="Top-view natural honey arrangement prepared for bulk supply"
        fill
        priority
        sizes="100vw"
      />
      <div className="honey-hero-tint" />

      <div className="honey-hero-inner">
        <div className="catalog-breadcrumb" data-hero-item>
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">Products</Link><span>/</span>
          <span>Honey</span>
        </div>
        <h1 data-hero-item>Raw Honey</h1>
        <div className="honey-hero-actions" data-hero-item>
          <a className="button button-honey" href="#category-products">View variants</a>
        </div>
      </div>
    </section>
  );
}
