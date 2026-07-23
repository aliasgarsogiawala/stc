import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import Splash from "./splash";
import HeroCarousel from "./hero-carousel";

const categories = [
  {
    name: "Industrial Chemicals",
    detail: "Acids, solvents, salts and process chemicals for dependable production supply.",
    examples: "Acids · Solvents · Salts",
    image: "/supreme/source/industrial_chemicals.png",
    imageAlt: "Laboratory glassware for industrial chemical supply",
  },
  {
    name: "Resins & Additives",
    detail: "Coating resins, cellulose products, pigments and performance additives.",
    examples: "Resins · Pigments · Cellulose",
    image: "/supreme/source/tren-pro4.png",
    imageAlt: "Powder and liquid raw material samples",
  },
  {
    name: "Oils & Liquid Ingredients",
    detail: "Essential, medical and speciality oils supplied against your required grade.",
    examples: "Essential · Medical · Carrier",
    image: "/supreme/source/essential_oil.png",
    imageAlt: "Speciality oils in laboratory bottles",
  },
  {
    name: "Custom Bulk Sourcing",
    detail: "Specified grades, bulk quantities and harder-to-find materials across categories.",
    examples: "Grade · Quantity · Destination",
    image: "/supreme/source/nb.png",
    imageAlt: "Bulk ingredient sample and dispensing bottle",
  },
];

const materialGroups = [
  { code: "01", name: "Industrial chemicals", note: "Acids, solvents, salts and process materials", image: "/supreme/source/industrial_chemicals.png" },
  { code: "02", name: "Resins & polymers", note: "Acrylic, polyurethane and speciality resin systems", image: "/supreme/source/tren-pro4.png" },
  { code: "03", name: "Additives & cellulose", note: "Wetting agents, defoamers, HPMC, HEC and CMC", image: "/supreme/source/tren-pro3.png" },
  { code: "04", name: "Oils & liquids", note: "Essential, medical, carrier and speciality oils", image: "/supreme/source/essential_oil.png" },
  { code: "05", name: "Food ingredients", note: "Powders, spices and dehydrated ingredients", image: "/supreme/source/honey_img.png" },
  { code: "06", name: "Specified sourcing", note: "Grade-led, quantity-led and destination-led supply", image: "/supreme/source/nb.png" },
];

const process = [
  "Requirement mapping",
  "Material shortlisting",
  "Quality review",
  "Bulk dispatch",
];

export default function Home() {
  return (
    <main id="top">
      <Splash />
      <SiteHeader />

      <HeroCarousel />

      <section className="ticker" aria-label="Product specialities">
        <div>
          <span>Chemicals</span>
          <span>Resins</span>
          <span>Additives</span>
          <span>Oils</span>
          <span>Food ingredients</span>
          <span>Custom sourcing</span>
        </div>
      </section>

      <section className="section range gs-reveal" id="range">
        <div className="section-kicker">What we source</div>
        <div className="section-heading split-heading">
          <h2 data-reveal>Four material categories</h2>
          <p>
            Supreme works like a sourcing desk: understand the requirement, shortlist
            practical options, check material fit, then move the consignment cleanly.
          </p>
        </div>

        <div className="range-grid gs-stagger">
          {categories.map((category, index) => (
            <Link className="range-card" href="/products" key={category.name}>
              <span className="range-index">{String(index + 1).padStart(2, "0")}</span>
              <Image src={category.image} alt={category.imageAlt} width={290} height={239} />
              <div>
                <h3>{category.name}</h3>
                <p>{category.detail}</p>
                <small>{category.examples}</small>
                <span className="range-cta">Request availability</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bento">
        <Image className="bento-float bento-float-1" data-float src="/supreme/source/bg-leaf1.png" alt="" width={300} height={300} />
        <Image className="bento-float bento-float-2" data-float src="/supreme/source/bg-leaf2.png" alt="" width={210} height={210} />

        <div className="bento-head">
          <div className="section-kicker">Why Supreme</div>
          <h2 data-reveal>A sourcing desk built for scale</h2>
          <p>Two decades of material knowledge, a wide supplier network and a team that treats every consignment like a specification.</p>
        </div>

        <div className="bento-grid">
          <article className="bento-tile bento-hero bento-feature">
            <span className="bento-tag">Flagship capability</span>
            <div>
              <h3>Grade-led sourcing across five material families</h3>
              <p>From industrial chemicals and coating resins to essential oils, food ingredients and speciality raw materials — matched to your grade, quantity and destination.</p>
            </div>
            <Link className="text-link" href="/products">Browse the catalogue</Link>
          </article>

          <article className="bento-tile bento-stat">
            <span className="bento-tag">Established</span>
            <strong>2002</strong>
            <span>Trading from Mumbai</span>
          </article>

          <article className="bento-tile bento-stat bento-honey">
            <span className="bento-tag">Materials</span>
            <strong data-count="800" data-suffix="+">0</strong>
            <span>Grades sourced to spec</span>
          </article>

          <article className="bento-tile bento-wide">
            <Image className="bento-art" src="/supreme/source/honey_img.png" alt="" width={200} height={200} />
            <span className="bento-tag">Food & natural</span>
            <h3>Honey, herbs & food ingredients</h3>
            <p>Powders, spices, dehydrated ingredients and natural sweeteners for food brands and formulators.</p>
          </article>

          <article className="bento-tile">
            <Image className="bento-art" src="/supreme/source/essential_oil.png" alt="" width={160} height={160} />
            <span className="bento-tag">Oils</span>
            <h3>Essential & carrier oils</h3>
          </article>

          <article className="bento-tile bento-stat">
            <span className="bento-tag">Reach</span>
            <strong>India + Export</strong>
            <span>Bulk supply, cleanly handled</span>
          </article>
        </div>
      </section>

      <section className="material-study gs-reveal">
        <div className="study-source-image image-drift gs-clip">
          <Image
            src="/supreme/source/nb.png"
            alt="Ingredient and liquid material prepared for supply"
            width={570}
            height={400}
            sizes="(max-width: 720px) 92vw, 44vw"
          />
        </div>
        <div className="study-copy">
          <p className="eyebrow"><span /> Built for trade</p>
          <h2 data-reveal>Sourcing and bulk supply</h2>
          <p>
            Every enquiry is reviewed by material, grade, origin, handling,
            quantity and delivery timing.
          </p>
          <p>
            We support coating manufacturers, formulation houses, food brands, fragrance
            makers, wholesale traders and industrial buyers with practical material guidance
            and repeatable supply.
          </p>
        </div>
      </section>

      <section className="section products gs-reveal" id="products">
        <div className="section-kicker">Catalogue</div>
        <div className="section-heading product-heading">
          <h2 data-reveal>Product categories</h2>
          <Link className="text-link" href="/products">Explore full catalogue</Link>
        </div>

        <div className="material-family-grid gs-stagger">
          {materialGroups.map((group) => (
            <article className="material-family-card" key={group.name}>
              <span>{group.code}</span>
              <div className="material-family-image">
                <Image src={group.image} alt="" width={290} height={239} />
              </div>
              <h3>{group.name}</h3>
              <p>{group.note}</p>
              <Link href="/products" aria-label={`Browse ${group.name}`}>Browse range</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="standard gs-reveal" id="standard">
        <div className="standard-copy">
          <p className="eyebrow"><span /> Order handling</p>
          <h2 data-reveal>Supply process</h2>
          <p>
            Buyers do not need decorative promises. They need responsive sourcing,
            consistent material, sensible packing and a team that understands bulk trade.
          </p>
        </div>
        <div className="process-list gs-stagger">
          {process.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="contact gs-reveal" id="contact">
        <p className="eyebrow"><span /> Required details</p>
        <h2 data-reveal>Product enquiry</h2>
        <p>Send the material name, grade, quantity, packing requirement and delivery location.</p>
        <div className="contact-actions">
          <Link className="button button-honey" href="/contact#enquiry">Contact details</Link>
          <a className="phone-link" href="tel:+912223455226">+91 22 2345 5226</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
