import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../icons";

type NextCategoryProps = {
  href: string;
  image: string;
  imageAlt: string;
  name: string;
};

export default function NextCategory({ href, image, imageAlt, name }: NextCategoryProps) {
  return (
    <section className="next-category-section">
      <Link className="next-category-preview" href={href} aria-label={`View ${name}`}>
        <Image src={image} alt={imageAlt} fill sizes="100vw" />
        <span className="next-category-overlay" aria-hidden="true" />
        <div className="next-category-copy">
          <h2>{name}</h2>
          <span className="next-category-button">
            Explore category
            <ArrowRight />
          </span>
        </div>
      </Link>
    </section>
  );
}
