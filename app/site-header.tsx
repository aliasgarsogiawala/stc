"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_PHONE } from "./contact-details";
import { productCategoryCards } from "./products/category-config";

type SiteHeaderProps = {
  theme?: "light" | "solid";
};

const productLinks = productCategoryCards.map((category) => ({
  href: category.href,
  label: category.name,
}));

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 14 14 4M7 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function SiteHeader({ theme = "light" }: SiteHeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`site-header block fixed inset-x-0 top-0 z-50 h-[82px] max-[720px]:h-[74px] p-0 shadow-none backdrop-blur-xl backdrop-saturate-150 ${
        theme === "solid" ? "bg-[#fbfbf8]/98" : "bg-[#fbfbf8]/96"
      }`}
    >
      <div className="h-full grid grid-cols-[1fr_auto_1fr] max-[1120px]:grid-cols-[1fr_auto]">
        <Link
          className="group/logo h-full px-[clamp(24px,5vw,82px)] max-[720px]:px-5 inline-flex items-center justify-start"
          href="/"
          aria-label="Supreme Trading Corp home"
        >
          <Image
            src="/supreme/supreme_logo@3x.png"
            alt="Supreme Trading Corp"
            width={1071}
            height={270}
            className="w-[clamp(230px,18vw,280px)] max-[720px]:w-[180px] max-[390px]:w-[164px] h-auto transition-opacity duration-300 group-hover/logo:opacity-80"
            preload
            unoptimized
          />
        </Link>

        <div className="hidden min-[1120px]:contents">
            <nav className="h-full justify-self-center flex items-stretch gap-[clamp(26px,2.8vw,46px)]" aria-label="Primary navigation">
              {primaryLinks.map((link) =>
                link.href === "/products" ? (
                  <div className="group/products relative h-full flex items-stretch" key={link.href}>
                    <Link
                      className={`group/nav-link relative h-full inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                        isActive(link.href) ? "text-[#286fa9]" : "text-[#2c4358] hover:text-[#286fa9]"
                      }`}
                      href={link.href}
                    >
                      {link.label}
                      <svg
                        className="h-3 w-3 transition-transform duration-300 group-hover/products:rotate-180 group-focus-within/products:rotate-180"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="m2.5 4.5 3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <span
                        className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#3f7fb7] transition-transform duration-300 ${
                          isActive(link.href)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover/nav-link:scale-x-100"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>

                    <div className="invisible absolute left-1/2 top-full w-[290px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover/products:visible group-hover/products:translate-y-0 group-hover/products:opacity-100 group-focus-within/products:visible group-focus-within/products:translate-y-0 group-focus-within/products:opacity-100">
                      <div className="bg-[#fbfcfd] p-2">
                        <Link
                          className="flex min-h-[48px] items-center justify-between px-4 bg-[#edf5fb] text-[12px] font-bold text-[#286fa9]"
                          href="/products"
                        >
                          All product categories
                          <span aria-hidden="true">→</span>
                        </Link>
                        {productLinks.map((product) => (
                          <Link
                            key={product.href}
                            className={`flex min-h-[45px] items-center px-4 text-[13px] font-semibold transition-colors ${
                              pathname === product.href
                                ? "bg-[#e5f0f8] text-[#22679f]"
                                : "text-[#40576b] hover:bg-[#edf5fb] hover:text-[#22679f]"
                            }`}
                            href={product.href}
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    className={`group/nav-link relative h-full inline-flex items-center text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                      isActive(link.href) ? "text-[#286fa9]" : "text-[#2c4358] hover:text-[#286fa9]"
                    }`}
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#3f7fb7] transition-transform duration-300 ${
                        isActive(link.href)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover/nav-link:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                ),
              )}
            </nav>

            <Link
              className="header-enquiry-button group/enquire self-center justify-self-end"
              href="/contact#enquiry"
            >
              <span className="header-enquiry-label">Send enquiry</span>
              <span className="header-enquiry-icon">
                <ArrowUpRight />
              </span>
            </Link>
        </div>

        <details className="group hidden max-[1120px]:block relative self-center justify-self-end mr-5">
          <summary
            className="list-none cursor-pointer w-11 h-11 border border-[#2f6fa9]/38 grid place-items-center text-[#174f84] [&::-webkit-details-marker]:hidden"
            aria-label="Open navigation menu"
          >
            <span className="w-[18px] h-[14px] flex flex-col justify-between" aria-hidden="true">
              <i className="block w-full h-[1.5px] bg-current transition-transform duration-300 group-open:translate-y-[6.25px] group-open:rotate-45" />
              <i className="block w-full h-[1.5px] bg-current transition-opacity duration-200 group-open:opacity-0" />
              <i className="block w-full h-[1.5px] bg-current transition-transform duration-300 group-open:-translate-y-[6.25px] group-open:-rotate-45" />
            </span>
          </summary>

          <nav
            className="absolute right-0 top-[52px] grid w-[min(350px,calc(100vw-40px))] border border-[#2f6fa9]/20 bg-[#fbfcfd]"
            aria-label="Mobile navigation"
          >
            <div className="px-5 pt-2">
              {primaryLinks.slice(0, 2).map((link) => (
                <Link
                  className={`flex min-h-[52px] items-center justify-between border-b border-[#2f6fa9]/12 text-[15px] font-semibold ${
                    isActive(link.href) ? "text-[#17609a]" : "text-[#314a60]"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                  {isActive(link.href) && <span className="h-1.5 w-1.5 bg-[#3f7fb7]" aria-hidden="true" />}
                </Link>
              ))}

              <details className="group/mobile-products border-b border-[#2f6fa9]/12">
                <summary className="list-none cursor-pointer min-h-[52px] flex items-center justify-between text-[15px] font-semibold text-[#314a60] [&::-webkit-details-marker]:hidden">
                  Products
                  <svg
                    className="h-3 w-3 transition-transform group-open/mobile-products:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="m2.5 4.5 3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </summary>
                <div className="grid pb-3">
                  <Link className="py-2.5 text-[12px] font-bold text-[#17609a]" href="/products">
                    View all categories
                  </Link>
                  {productLinks.map((product) => (
                    <Link
                      key={product.href}
                      className={`flex items-center justify-between py-2.5 text-[13px] font-medium ${
                        pathname === product.href ? "text-[#17609a]" : "text-[#526b81]"
                      }`}
                      href={product.href}
                    >
                      {product.label}
                      <span className="w-3.5 opacity-45"><ArrowUpRight /></span>
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                className={`flex min-h-[52px] items-center justify-between border-b border-[#2f6fa9]/12 text-[15px] font-semibold ${
                  isActive("/contact") ? "text-[#17609a]" : "text-[#314a60]"
                }`}
                href="/contact"
              >
                Contact
                {isActive("/contact") && <span className="h-1.5 w-1.5 bg-[#3f7fb7]" aria-hidden="true" />}
              </Link>
            </div>

            <div className="m-3 mt-5 grid grid-cols-2 border border-[#2f6fa9]/14">
              <a className="min-h-[46px] px-4 flex items-center text-[12px] font-semibold text-[#31516d]" href={PRIMARY_PHONE.href}>
                Call the desk
              </a>
              <Link
                className="min-h-[46px] px-4 bg-[#3c79ae] text-white flex items-center justify-between gap-3 text-[12px] font-bold"
                href="/contact#enquiry"
              >
                Enquire
                <span className="w-3.5"><ArrowUpRight /></span>
              </Link>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
