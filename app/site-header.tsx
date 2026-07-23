import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

type SiteHeaderProps = {
  theme?: "light" | "solid";
};

export default function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  return (
    <header className={`site-header site-header-${theme}`}>
      <Link className="brand" href="/" aria-label="Supreme Trading Corp home">
        <Image
          src="/supreme/supreme_logo.png"
          alt="Supreme Trading Corp"
          width={357}
          height={90}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <Link className="button button-small button-honey link-arrow" href="/contact#enquiry">
        Request quote <ArrowUpRight />
      </Link>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </details>
    </header>
  );
}
