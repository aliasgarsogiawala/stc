import Link from "next/link";

export default function HoneyHero() {
  return (
    <section className="honey-hero">
      <video
        className="honey-hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/supreme/media/honey-pour-loop-poster.jpg"
      >
        <source src="/supreme/media/honey-pour-loop.mp4" type="video/mp4" />
      </video>
      <div className="honey-hero-tint" />

      <div className="honey-hero-inner">
        <div className="catalog-breadcrumb" data-hero-item>
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">Products</Link><span>/</span>
          <span>Honey</span>
        </div>
        <p className="eyebrow honey-eyebrow" data-hero-item><span /> Bulk supply</p>
        <h1 data-hero-item>Raw Honey</h1>
        <div className="honey-hero-actions" data-hero-item>
          <a className="button button-honey" href="#variants">View variants</a>
          <Link className="text-link" href="/contact#enquiry">Send requirement</Link>
        </div>
      </div>
    </section>
  );
}
