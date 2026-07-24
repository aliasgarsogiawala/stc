import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  theme?: "light" | "solid";
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const navLinkClass =
  "relative text-[15px] font-semibold text-ink/80 hover:text-ink transition-colors " +
  "after:absolute after:left-0 after:-bottom-2 after:h-[1.5px] after:w-full after:origin-right after:scale-x-0 " +
  "after:bg-[image:var(--amber-grad)] after:transition-transform after:duration-200 hover:after:origin-left hover:after:scale-x-100";

export default function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] max-[1060px]:grid-cols-[1fr_auto_auto] max-[720px]:grid-cols-[1fr_auto] items-center gap-[26px] h-24 max-[720px]:h-[74px] px-[clamp(24px,5vw,90px)] max-[720px]:px-5 border-b border-black/10 backdrop-blur-xl backdrop-saturate-150 ${
        theme === "solid" ? "bg-paper/97" : "bg-paper/90"
      }`}
    >
      <Link className="justify-self-start inline-flex" href="/" aria-label="Supreme Trading Corp home">
        <Image
          src="/supreme/supreme_logo@3x.png"
          alt="Supreme Trading Corp"
          width={1071}
          height={270}
          className="w-[clamp(200px,17vw,250px)] max-[720px]:w-44 h-auto"
          priority
          unoptimized
        />
      </Link>

      <nav className="hidden min-[1060px]:flex items-center gap-[clamp(30px,3.4vw,54px)]" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link key={link.href} className={navLinkClass} href={link.href}>{link.label}</Link>
        ))}
      </nav>

      <Link
        className="justify-self-end inline-flex items-center justify-center min-h-[46px] px-5 rounded-full border border-deep bg-deep text-white text-[13px] font-extrabold tracking-[0.01em] transition hover:-translate-y-0.5 hover:bg-ink"
        href="/contact#enquiry"
      >
        Request a quote
      </Link>

      <details className="hidden max-[1060px]:block relative justify-self-end">
        <summary className="list-none cursor-pointer text-[13px] font-extrabold tracking-wider uppercase [&::-webkit-details-marker]:hidden">Menu</summary>
        <nav className="w-[230px] p-[18px] grid gap-3.5 border border-line bg-paper absolute top-[34px] right-0 shadow-[0_18px_45px_rgba(19,32,27,0.12)]" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} className="py-2 border-b border-line text-[13px] font-extrabold" href={link.href}>{link.label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
