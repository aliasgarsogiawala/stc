import Image from "next/image";
import Link from "next/link";

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
              <p className="footer-column-heading">Company</p>
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
                51/A, Essaji Street, Vadgadi,
                <br />
                Masjid Bunder (W), Mumbai 400003
              </address>
              <a href="tel:+912223455226">+91 22 2345 5226</a>
              <a href="mailto:info@supremetrading.in">info@supremetrading.in</a>
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
