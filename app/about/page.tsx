import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "About Supreme Trading Corp | Mumbai",
  description: "Supreme Trading Corp was established in Mumbai in 2002 and supplies raw materials for industrial, food, fragrance, Ayurvedic and Unani applications.",
  openGraph: {
    title: "About Supreme Trading Corp",
    description: "Raw material import, export and wholesale supply from Mumbai since 2002.",
    images: [{ url: "/supreme/source/abouts.png", width: 570, height: 354, alt: "Supreme Trading Corp raw materials" }],
  },
};

const industries = [
  "Paint & polish",
  "Perfumery & essence",
  "Agarbatti",
  "Ayurvedic pharmacy",
  "Unani pharmacy",
  "Food manufacturing",
  "Industrial formulation",
  "Wholesale trade",
];

const qualitySteps = [
  { number: "01", title: "Requirement review", text: "Material, grade, intended application, quantity and destination are established before sourcing." },
  { number: "02", title: "Material assessment", text: "Products are reviewed against the required specification and the appropriate supply option is shortlisted." },
  { number: "03", title: "Packing and handling", text: "Packing format and handling requirements are aligned with the product and order size." },
  { number: "04", title: "Dispatch coordination", text: "Orders are prepared for domestic or export movement with clear delivery coordination." },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader theme="solid" />

      <section className="about-hero">
        <div className="about-hero-copy" data-hero-copy>
          <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><span>About</span></div>
          <p className="eyebrow"><span /> Mumbai · Since 2002</p>
          <h1>About Supreme Trading Corp</h1>
          <p>Import, export and wholesale supply of raw materials for manufacturers and traders.</p>
        </div>

        <div className="about-hero-media" data-hero-media>
          <Image
            className="image-drift"
            src="/supreme/source/abouts.png"
            alt="Raw materials handled by Supreme Trading Corp"
            width={570}
            height={354}
            priority
            sizes="(max-width: 820px) 92vw, 48vw"
          />
          <div className="about-hero-caption" data-hero-meta>
            <span>Head office</span>
            <strong>Mumbai, Maharashtra</strong>
          </div>
        </div>
      </section>

      <section className="about-introduction gs-reveal">
        <div className="about-section-label">Company</div>
        <div className="about-introduction-copy">
          <h2>Trading and sourcing across material categories</h2>
          <div className="about-copy-columns">
            <p>
              Supreme Trading Corp was established in Mumbai in 2002 with a focus on
              reliable supply and product quality. The company operates in imports,
              exports and wholesale trading.
            </p>
            <p>
              Its range serves Ayurvedic and Unani medicine, perfumery, essence, paint,
              polish, food and other industrial applications. The catalogue includes
              industrial chemicals, oils, gums, food ingredients, spices and botanical
              raw materials.
            </p>
          </div>
        </div>
      </section>

      <section className="about-facts gs-stagger" aria-label="Company facts">
        <article><span>Established</span><strong>2002</strong><p>Mumbai, Maharashtra</p></article>
        <article><span>Catalogue</span><strong>800+</strong><p>Listed raw materials</p></article>
        <article><span>Trade</span><strong>India</strong><p>Domestic and export enquiries</p></article>
        <article><span>Supply</span><strong>Bulk</strong><p>Wholesale requirements</p></article>
      </section>

      <section className="about-image-story gs-reveal">
        <div className="about-image-primary image-drift">
          <Image src="/supreme/source/abu.png" alt="Raw material preparation and handling" width={570} height={354} />
        </div>
        <div className="about-image-secondary image-drift">
          <Image src="/supreme/source/nb.png" alt="Liquid and powdered material samples" width={570} height={400} />
        </div>
        <div className="about-image-story-copy">
          <span>Applications</span>
          <h2>Industries supplied</h2>
          <div className="industry-list gs-stagger">
            {industries.map((industry, index) => (
              <div key={industry}><b>{String(index + 1).padStart(2, "0")}</b><span>{industry}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-quality gs-reveal">
        <div className="about-quality-heading">
          <span>Quality and order handling</span>
          <h2>From enquiry to dispatch</h2>
          <p>Material fit, quality requirements and handling details are reviewed before an order moves forward.</p>
        </div>
        <div className="about-quality-grid gs-stagger">
          {qualitySteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-principles gs-reveal">
        <div>
          <span>Working principles</span>
          <h2>Commercially practical supply</h2>
        </div>
        <ul>
          <li>Product quality and material fit</li>
          <li>Customisation against buyer requirements</li>
          <li>Competitive commercial terms</li>
          <li>Timely delivery coordination</li>
          <li>Clear payment and order communication</li>
        </ul>
      </section>

      <section className="about-cta gs-reveal">
        <div><span>Next step</span><h2>Discuss a material requirement</h2></div>
        <div><p>Share the product name, grade, quantity, packing and destination.</p><Link className="button button-light" href="/contact#enquiry">Send enquiry</Link></div>
      </section>

      <SiteFooter />
    </main>
  );
}
