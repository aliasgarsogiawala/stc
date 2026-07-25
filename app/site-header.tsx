import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  theme?: "light" | "solid";
};

const productLinks = [
  { href: "/products/chemicals", label: "Industrial chemicals" },
  { href: "/products/oils", label: "Oils & liquids" },
  { href: "/products/honey", label: "Honey" },
  { href: "/products/herbs", label: "Herbs & spices" },
  { href: "/products/food-ingredients", label: "Food ingredients" },
];

const navLinkClass =
  "relative py-3 text-[16px] font-semibold tracking-[-0.012em] text-[#24384b]/82 hover:text-[#0d2a45] transition-colors " +
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
        <Link className={navLinkClass} href="/">Home</Link>
        <Link className={navLinkClass} href="/about">About</Link>
        <div className="group/products relative">
          <Link className={`${navLinkClass} inline-flex items-center gap-2`} href="/products">
            Products
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/products:rotate-180 group-focus-within/products:rotate-180" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="m2.5 4.5 3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <div className="invisible opacity-0 translate-y-2 group-hover/products:visible group-hover/products:opacity-100 group-hover/products:translate-y-0 group-focus-within/products:visible group-focus-within/products:opacity-100 group-focus-within/products:translate-y-0 absolute top-[calc(100%-2px)] left-1/2 -translate-x-1/2 w-[270px] pt-5 transition-[opacity,transform,visibility] duration-200">
            <div className="border border-[#173a57]/16 bg-[#f8fbfd] p-2">
              <Link className="flex items-center justify-between px-4 py-3.5 border-b border-[#173a57]/12 text-[13px] font-bold text-[#123451] hover:bg-[#e7f0f8]" href="/products">
                All categories
                <span aria-hidden="true">→</span>
              </Link>
              {productLinks.map((link) => (
                <Link key={link.href} className="block px-4 py-3 text-[13px] font-semibold text-[#40556a] hover:bg-[#e7f0f8] hover:text-[#174f84] transition-colors" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link className={navLinkClass} href="/contact">Contact</Link>
      </nav>

      <Link
        className="justify-self-end max-[1060px]:hidden inline-flex items-center justify-center min-h-[46px] px-[24px] border border-[#356fa7] bg-[#356fa7] text-white text-[14px] font-bold tracking-[-0.005em] transition-colors hover:bg-[#2d6193] hover:border-[#2d6193]"
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
          <Link className="py-3.5 border-b border-[#16344f]/12 text-[14px] font-semibold tracking-[-0.01em]" href="/">Home</Link>
          <Link className="py-3.5 border-b border-[#16344f]/12 text-[14px] font-semibold tracking-[-0.01em]" href="/about">About</Link>
          <details className="group/mobile-products border-b border-[#16344f]/12">
            <summary className="list-none cursor-pointer py-3.5 flex items-center justify-between text-[14px] font-semibold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
              Products
              <span className="text-lg font-normal transition-transform group-open/mobile-products:rotate-45" aria-hidden="true">+</span>
            </summary>
            <div className="pb-3 grid">
              <Link className="py-2 text-[12px] font-bold text-[#174f84]" href="/products">All categories</Link>
              {productLinks.map((link) => (
                <Link key={link.href} className="py-2 text-[12px] font-medium text-[#52677b]" href={link.href}>{link.label}</Link>
              ))}
            </div>
          </details>
          <Link className="py-3.5 border-b border-[#16344f]/12 text-[14px] font-semibold tracking-[-0.01em]" href="/contact">Contact</Link>
          <Link className="mt-5 min-h-11 px-4 grid place-items-center bg-[#356fa7] text-white text-[12px] font-bold tracking-[0.025em]" href="/contact#enquiry">Enquire now</Link>
        </nav>
      </details>
    </header>
  );
}
