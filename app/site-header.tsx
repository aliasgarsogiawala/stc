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
  "relative py-3 text-[12px] font-extrabold tracking-[0.055em] uppercase text-[#24384b]/75 hover:text-[#0d2a45] transition-colors " +
  "after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-full after:origin-right after:scale-x-0 " +
  "after:bg-[#2d68a0] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100";

export default function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] max-[1060px]:grid-cols-[1fr_auto] items-center gap-[28px] h-[82px] max-[720px]:h-[70px] px-[clamp(22px,4.5vw,78px)] max-[720px]:px-5 border-b border-[#16344f]/15 backdrop-blur-xl backdrop-saturate-150 ${
        theme === "solid" ? "bg-[#faf9f5]/98" : "bg-[#faf9f5]/94"
      }`}
    >
      <Link className="justify-self-start inline-flex" href="/" aria-label="Supreme Trading Corp home">
        <Image
          src="/supreme/supreme_logo@3x.png"
          alt="Supreme Trading Corp"
          width={1071}
          height={270}
          className="w-[clamp(230px,18vw,280px)] max-[720px]:w-[195px] h-auto"
          priority
          unoptimized
        />
      </Link>

      <nav className="hidden min-[1060px]:flex items-center gap-[clamp(26px,3vw,48px)]" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link key={link.href} className={navLinkClass} href={link.href}>{link.label}</Link>
        ))}
      </nav>

      <Link
        className="justify-self-end max-[1060px]:hidden inline-flex items-center justify-center min-h-[44px] px-[22px] border border-[#123451] bg-[#123451] text-white text-[11px] font-extrabold tracking-[0.065em] uppercase transition-colors hover:bg-[#2d68a0] hover:border-[#2d68a0]"
        href="/contact#enquiry"
      >
        Enquire now
      </Link>

      <details className="hidden max-[1060px]:block relative justify-self-end">
        <summary className="list-none cursor-pointer min-h-10 px-4 border border-[#123451] grid place-items-center text-[#123451] text-[11px] font-extrabold tracking-[0.08em] uppercase [&::-webkit-details-marker]:hidden">Menu</summary>
        <nav className="w-[250px] p-5 grid border border-[#16344f]/15 bg-[#faf9f5] absolute top-[48px] right-0 shadow-[0_22px_50px_rgba(17,42,64,0.14)]" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} className="py-3.5 border-b border-[#16344f]/12 text-[12px] font-extrabold tracking-[0.04em] uppercase" href={link.href}>{link.label}</Link>
          ))}
          <Link className="mt-5 min-h-11 px-4 grid place-items-center bg-[#123451] text-white text-[11px] font-extrabold tracking-[0.06em] uppercase" href="/contact#enquiry">Enquire now</Link>
        </nav>
      </details>
    </header>
  );
}
