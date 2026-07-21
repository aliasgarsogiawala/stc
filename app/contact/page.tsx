import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Supreme Trading Corp",
  description: "Supreme Trading Corp office addresses, phone numbers, email and product enquiry details.",
  openGraph: {
    title: "Contact | Supreme Trading Corp",
    description: "Mumbai head office and branch office contact information for Supreme Trading Corp.",
    images: [{ url: "/supreme/contact-source-hero.jpg", width: 1920, height: 987, alt: "Supreme Trading Corp contact" }],
  },
};

const offices = [
  {
    type: "Head office",
    city: "Mumbai",
    address: "51/A, Essaji Street, Opp. Shah Roadways, Vadgadi, Masjid Bunder (W), Mumbai 400003, Maharashtra, India",
  },
  {
    type: "Branch office",
    city: "Indore",
    address: "Loha Mandi, Siyaganj, Indore, Madhya Pradesh",
  },
  {
    type: "Branch office",
    city: "Haridwar",
    address: "Jamalpur Kalan, District Haridwar, Uttarakhand",
  },
];

const phoneNumbers = [
  { display: "+91 22 2345 5226", href: "+912223455226" },
  { display: "+91 99207 55226", href: "+919920755226" },
  { display: "+91 97138 55870", href: "+919713855870" },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader theme="solid" />

      <section className="contact-page-hero">
        <Image
          data-hero-media
          src="/supreme/contact-source-hero.jpg"
          alt="Mortar, pestle and raw materials"
          fill
          priority
          sizes="100vw"
        />
        <div className="contact-page-hero-shade" />
        <div className="contact-page-hero-copy" data-hero-copy>
          <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></div>
          <h1>Contact</h1>
          <p>Head office in Mumbai with branch offices in Indore and Haridwar.</p>
        </div>
      </section>

      <section className="contact-directory gs-reveal">
        <div className="contact-directory-heading">
          <span>Office details</span>
          <h2>Locations and direct contacts</h2>
        </div>

        <div className="office-grid gs-stagger">
          {offices.map((office, index) => (
            <article className="office-card" key={office.city}>
              <div className="office-card-top">
                <Image src="/supreme/contact-pin.png" alt="" width={32} height={32} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p>{office.type}</p>
              <h3>{office.city}</h3>
              <address>{office.address}</address>
            </article>
          ))}
        </div>

        <div className="direct-contact-grid gs-stagger">
          <article>
            <Image src="/supreme/contact-phone.png" alt="" width={32} height={32} />
            <div>
              <span>Phone</span>
              {phoneNumbers.map((phone) => <a href={`tel:${phone.href}`} key={phone.href}>{phone.display}</a>)}
            </div>
          </article>
          <article>
            <Image src="/supreme/contact-email.png" alt="" width={24} height={24} />
            <div>
              <span>Email</span>
              <a href="mailto:info@supremetrading.in">info@supremetrading.in</a>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-enquiry-layout gs-reveal" id="enquiry">
        <ContactForm />
        <aside className="contact-enquiry-guide">
          <span>Information to include</span>
          <ol>
            <li><b>01</b><div><strong>Product name</strong><p>Trade name or English name.</p></div></li>
            <li><b>02</b><div><strong>Grade</strong><p>Required specification or application.</p></div></li>
            <li><b>03</b><div><strong>Quantity</strong><p>Trial, wholesale or bulk requirement.</p></div></li>
            <li><b>04</b><div><strong>Destination</strong><p>City, state or export country.</p></div></li>
          </ol>
        </aside>
      </section>

      <section className="contact-map-section gs-reveal">
        <div className="contact-map-heading">
          <span>Mumbai head office</span>
          <h2>Map</h2>
        </div>
        <iframe
          title="Supreme Trading Corp Mumbai head office map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30188.49523647128!2d72.835988!3d18.950776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2445fe9359%3A0xe8c4e71d26263e7a!2sTitanium%20Dioxide%20Suppliers%20-%20Supreme%20Trading%20Corp.!5e0!3m2!1sen!2sin!4v1765969497421!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      <SiteFooter />
    </main>
  );
}
