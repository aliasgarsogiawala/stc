import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  MUMBAI_OFFICE,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
} from "./contact-details";

export default function SiteFooter() {
  return (
    <footer className="site-footer site-footer-professional">
      <div className="footer-dark">
        <span className="footer-blue-rule" aria-hidden="true" />
        <div className="footer-dark-inner">
          <div className="footer-main footer-motion">
            <div className="footer-brand">
              <Image
                src="/supreme/supreme_logo@3x.png"
                alt="Supreme Trading Corp"
                width={1071}
                height={270}
                unoptimized
              />
              <p>
                Import, export and bulk trading of industrial chemicals, food herbs,
                honey and speciality raw materials—from Mumbai since 2002.
              </p>
            </div>

            <nav className="footer-column" aria-label="Company">
              <p className="footer-column-heading">Pages</p>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <nav className="footer-column" aria-label="Product range">
              <p className="footer-column-heading">Product range</p>
              <Link href="/products/chemicals">Industrial chemicals</Link>
              <Link href="/products/honey">Honey</Link>
              <Link href="/products/petals">Petals</Link>
              <Link href="/products/herbs">Medicinal herbs &amp; spices</Link>
              <Link href="/products/food-ingredients">Food herbs</Link>
            </nav>

            <div className="footer-column footer-office">
              <p className="footer-column-heading">Mumbai head office</p>
              <address>
                {MUMBAI_OFFICE.lineOne}
                <br />
                {MUMBAI_OFFICE.lineTwo}
              </address>
              <div className="footer-phone-links">
                <a href={PRIMARY_PHONE.href}>{PRIMARY_PHONE.compactDisplay}</a>
                <span aria-hidden="true">/</span>
                <a href={SECONDARY_PHONE.href}>{SECONDARY_PHONE.compactDisplay}</a>
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="footer-bottom footer-motion">
            <span>© 2026 Supreme Trading Corp · Mumbai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
