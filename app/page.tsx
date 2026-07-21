import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

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
      <SiteHeader />

      <section className="hero home-hero">
        <div className="hero-media-shell" data-hero-media>
          <Image
            className="hero-image"
            src="/supreme/neutral-materials-hero.png"
            alt="Industrial liquids, powders, resins and raw material samples in a neutral sourcing studio"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <Image className="hero-static-branch hero-static-branch-left" src="/supreme/source/ban-leafleft.png" alt="" width={249} height={307} />
        <Image className="hero-static-branch hero-static-branch-right" src="/supreme/source/ban-leafright.png" alt="" width={196} height={306} />

        <div className="hero-copy" data-hero-copy>
          <p className="eyebrow"><span /> Established in Mumbai in 2002</p>
          <h1>Industrial Chemicals & Raw Materials</h1>
          <p className="hero-intro">
            Industrial chemicals, resins, oils, food ingredients and speciality raw materials
            sourced for manufacturers, wholesalers and export buyers who need consistency at scale.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/products">View products</Link>
            <Link className="text-link" href="/contact#enquiry">Send enquiry</Link>
          </div>
        </div>

        <div className="hero-proof" aria-label="Company highlights" data-hero-meta>
          <div><strong>2002</strong><span>Established in Mumbai</span></div>
          <div><strong>800+</strong><span>Materials sourced</span></div>
          <div><strong>Bulk</strong><span>India and export supply</span></div>
        </div>

        <div className="hero-material-index" aria-hidden="true" data-hero-meta>
          <span>Material index</span>
          <div><i /> Industrial</div>
          <div><i /> Resins</div>
          <div><i /> Oils</div>
          <div><i /> Food</div>
        </div>
      </section>

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
          <h2>Four material categories</h2>
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

      <section className="material-study gs-reveal">
        <div className="study-source-image image-drift">
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
          <h2>Sourcing and bulk supply</h2>
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
          <h2>Product categories</h2>
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
              <Link href="/products" aria-label={`Browse ${group.name}`}>Browse range <b aria-hidden="true">↗</b></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="standard gs-reveal" id="standard">
        <div className="standard-copy">
          <p className="eyebrow"><span /> Order handling</p>
          <h2>Supply process</h2>
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
        <h2>Product enquiry</h2>
        <p>Send the material name, grade, quantity, packing requirement and delivery location.</p>
        <div className="contact-actions">
          <Link className="button button-light" href="/contact#enquiry">Contact details</Link>
          <a className="phone-link" href="tel:+912223455226">+91 22 2345 5226</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
