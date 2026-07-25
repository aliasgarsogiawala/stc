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
  "relative py-3 text-[13px] font-semibold tracking-[0.025em] text-[#24384b]/78 hover:text-[#0d2a45] transition-colors " +
  "after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-full after:origin-right after:scale-x-0 " +
  "after:bg-[#2d68a0] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100";

export default function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] max-[1060px]:grid-cols-[1fr_auto] items-center gap-[28px] h-[82px] max-[720px]:h-[70px] px-[clamp(22px,4.5vw,78px)] max-[720px]:px-5 border-b border-[#16344f]/15 backdrop-blur-xl backdrop-saturate-150 ${
        theme === "solid" ? "bg-[#faf9f5]/98" : "bg-[#faf9f5]/94"
      }`}
    >
      <Link className="justify-self-start inline-flex" href="/" aria-label="Supreme Trading Corp home">
        <Image
          src="/supreme/supreme_logo@3x.png"
          alt="Supreme Trading Corp"
          width={1071}
          height={270}
          className="w-[clamp(230px,18vw,280px)] max-[720px]:w-[180px] max-[390px]:w-[164px] h-auto"
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
        className="justify-self-end max-[1060px]:hidden inline-flex items-center justify-center min-h-[44px] px-[22px] border border-[#123451] bg-[#123451] text-white text-[12px] font-bold tracking-[0.035em] transition-colors hover:bg-[#2d68a0] hover:border-[#2d68a0]"
        href="/contact#enquiry"
      >
        Enquire now
      </Link>

      <details className="group hidden max-[1060px]:block relative justify-self-end">
        <summary className="list-none cursor-pointer w-11 h-11 border border-[#123451] grid place-items-center text-[#123451] [&::-webkit-details-marker]:hidden" aria-label="Open navigation menu">
          <span className="w-[18px] h-[14px] flex flex-col justify-between" aria-hidden="true">
            <i className="block w-full h-[1.5px] bg-current transition-transform duration-300 group-open:translate-y-[6.25px] group-open:rotate-45" />
            <i className="block w-full h-[1.5px] bg-current transition-opacity duration-200 group-open:opacity-0" />
            <i className="block w-full h-[1.5px] bg-current transition-transform duration-300 group-open:-translate-y-[6.25px] group-open:-rotate-45" />
          </span>
        </summary>
        <nav className="w-[250px] p-5 grid border border-[#16344f]/15 bg-[#faf9f5] absolute top-[48px] right-0 shadow-[0_22px_50px_rgba(17,42,64,0.14)]" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} className="py-3.5 border-b border-[#16344f]/12 text-[14px] font-semibold tracking-[-0.01em]" href={link.href}>{link.label}</Link>
          ))}
          <Link className="mt-5 min-h-11 px-4 grid place-items-center bg-[#123451] text-white text-[12px] font-bold tracking-[0.025em]" href="/contact#enquiry">Enquire now</Link>
        </nav>
      </details>
    </header>
  );
}
