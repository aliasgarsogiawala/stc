import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Image src="/supreme/source/footer-logo.svg" alt="Supreme Trading Corp" width={300} height={86} />
          <p>Import, export and bulk trading of raw materials from Mumbai since 2002.</p>
        </div>

        <div className="site-footer-nav">
          <p>Navigate</p>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="site-footer-contact">
          <p>Mumbai head office</p>
          <address>51/A, Essaji Street, Vadgadi,<br />Masjid Bunder (W), Mumbai 400003</address>
          <a href="tel:+912223455226">+91 22 2345 5226</a>
          <a href="mailto:info@supremetrading.in">info@supremetrading.in</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 Supreme Trading Corp</span>
        <span>India · Wholesale · Import · Export</span>
      </div>
    </footer>
  );
}
