import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About Supreme Trading Corp | Mumbai Raw Material Supplier",
  description:
    "Established in Mumbai in 2002, Supreme Trading Corp imports, exports and supplies industrial and natural raw materials to manufacturers and traders.",
  path: "/about",
  image: "/og-materials.png",
  imageAlt: "Supreme Trading Corp industrial and natural raw materials",
  imageWidth: 1726,
  imageHeight: 911,
});

const industries = [
  "Paint Manufacturers",
  "Perfumery & Essence",
  "Agarbatti",
  "Ayurvedic & Unani Pharmacies",
  "Industrial Formulation",
];

const qualitySteps = [
  {
    number: "01",
    title: "Product quality",
    text: "Materials are reviewed against the required grade, specification and intended application.",
  },
  {
    number: "02",
    title: "Buyer requirements",
    text: "Product form, quantity and packing are aligned with the buyer’s stated requirement.",
  },
  {
    number: "03",
    title: "Commercial clarity",
    text: "Commercial terms, payment and availability are confirmed before the order proceeds.",
  },
  {
    number: "04",
    title: "Dispatch coordination",
    text: "Packing, documentation and movement are coordinated for domestic or export supply.",
  },
];

const label =
  "font-sans text-[#356fa7] text-[clamp(11px,0.78vw,14px)] font-extrabold tracking-[0.075em] uppercase";
const h2 =
  "font-heading text-[clamp(40px,4.4vw,68px)] leading-[1.02] font-bold tracking-[-0.045em] m-0";

export default function AboutPage() {
  return (
    <main className="refined-about bg-paper">
      <SiteHeader theme="solid" />

      <section className="about-hero">
        <div className="about-hero-backdrop" aria-hidden="true">
          <span>STC</span>
        </div>
        <div className="about-hero-shell">
          <div className="about-hero-copy" data-hero-copy>
            <div className="catalog-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </div>
            <p className="eyebrow">
              <span /> Mumbai · Established 2002
            </p>
            <h1>About Us</h1>
            <p>
              Supreme Trading Corp is a trusted trading & sourcing company specializing
              in Raw Herbs , Food Herbs , Floral Petals , Raw Honey & Industrial Chemicals
              operating from Mumbai , India
            </p>
          </div>

          <div className="about-hero-media" data-hero-media>
            <Image
              className="image-drift"
              src="/supreme/source/abouts.png"
              alt="Herbal raw materials handled by Supreme Trading Corp"
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
        </div>
      </section>

      <section className="refined-about-intro gs-reveal">
        <div>
          <h2 className={h2}>A reliable link between trusted sources and growing industries.</h2>
          <div className="refined-about-copy">
            <p>
              We are a trusted trading and sourcing company specializing in
              {" "}<strong>raw herbs, floral petals, food herbs, and industrial chemicals</strong>,
              catering to diverse industries with a strong focus on quality,
              consistency, and reliable supply. With a commitment to building
              long-term partnerships, we carefully source products from dependable
              suppliers and deliver solutions that meet the evolving needs of our
              customers.
            </p>
            <p>
              Our portfolio brings together the <strong>purity of nature and the
              precision of industry</strong>—from carefully selected herbs and petals
              to quality food ingredients and industrial chemicals. We believe in
              transparent business practices, competitive value, timely delivery,
              and personalized service, making us a dependable sourcing partner for
              businesses across various sectors.
            </p>
            <p>
              Driven by integrity, quality, and continuous growth, we aim to create
              lasting value for our customers and suppliers while establishing
              ourselves as a <strong>reliable link between trusted sources and growing
              industries</strong>.
            </p>
          </div>
        </div>
      </section>

      <section
        className="refined-about-facts gs-reveal"
        aria-label="Company facts"
      >
        {[
          { s: "Established", n: "2002", p: "Mumbai, Maharashtra" },
          { s: "Catalogue", n: "800+", p: "Listed raw materials" },
          { s: "Trade", n: "Import / Export", p: "Domestic and international enquiries" },
          { s: "Supply", n: "Bulk supply", p: "Wholesale requirements" },
        ].map((fact) => (
          <article className="tilt-card" key={fact.s}>
            <span>{fact.s}</span>
            <div>
              <strong>{fact.n}</strong>
              <p>{fact.p}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="refined-about-industries gs-reveal">
        <div className="refined-about-image-primary image-drift">
          <Image
            src="/supreme/source/abu.png"
            alt="Traditional raw material preparation"
            width={570}
            height={354}
          />
        </div>
        <div className="refined-about-image-secondary image-drift">
          <Image
            src="/supreme/generated/about-paint-coatings.png"
            alt="Industrial paint tins, pigment powders and coating preparation equipment"
            width={1536}
            height={1024}
            sizes="(max-width: 720px) 100vw, 32vw"
          />
        </div>
        <div className="refined-about-industries-copy">
          <span className={label}>Applications</span>
          <h2 className={`${h2} mt-4 text-white`}>Industries supplied</h2>
          <p>
            The company’s range serves traditional medicine, food, fragrance
            and industrial formulation businesses.
          </p>
          <div className="refined-about-industry-list gs-stagger">
            {industries.map((industry, index) => (
              <div key={industry}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="refined-about-quality gs-reveal">
        <div className="refined-about-quality-inner">
          <div className="refined-about-quality-heading">
            <span className={label}>Quality approach</span>
            <h2>Quality reviewed before supply.</h2>
            <p>
              Supreme Trading Corp states that stringent quality control and
              all-round excellence remain central to its operations. Each
              enquiry begins with the buyer’s actual material requirement.
            </p>
          </div>

          <ol className="refined-about-quality-list gs-stagger">
            {qualitySteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="refined-about-principles gs-reveal">
        <div>
          <span className={label}>Working principles</span>
          <h2 className={`${h2} mt-4`}>What the business is built around.</h2>
        </div>
        <ul>
          {[
            "Product quality",
            "Customisation against buyer requirements",
            "Competitive commercial terms",
            "Clear payment communication",
            "Quality-control focus",
          ].map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className="refined-about-cta gs-reveal">
        <div>
          <span className={label}>Enquiries</span>
          <h2 className={`${h2} mt-4 text-white`}>
            Discuss a material requirement.
          </h2>
        </div>
        <div>
          <p>
            Share the product name, grade, quantity, packing and destination
            with the sourcing desk.
          </p>
          <Link className="button button-light" href="/contact#enquiry">
            Send enquiry
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
