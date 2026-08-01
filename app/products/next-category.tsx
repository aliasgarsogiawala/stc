import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../icons";
import { getNextProductCategory, type ProductCategoryId } from "./category-config";

type NextCategoryProps = {
  currentId: ProductCategoryId;
};

export default function NextCategory({ currentId }: NextCategoryProps) {
  const { href, image, name } = getNextProductCategory(currentId);

  return (
    <section className="next-category-section">
      <Link className="next-category-preview" href={href} aria-label={`View ${name}`}>
        <Image src={image} alt={`${name} prepared for bulk supply`} fill sizes="100vw" />
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
