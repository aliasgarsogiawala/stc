export const dedicatedPages: Record<string, string> = {
  "herbs-spices": "/products/herbs",
  honey: "/products/honey",
  petals: "/products/petals",
  "food-herbs": "/products/food-ingredients",
  industrial: "/products/chemicals",
};

export const categoryImages: Record<string, string> = {
  "herbs-spices": "/supreme/generated/medicinal-herbs-flatlay.jpg",
  honey: "/supreme/generated/honey-flatlay-full-hero.png",
  petals: "/supreme/generated/petals-flatlay-full-hero.png",
  "food-herbs": "/supreme/generated/food-herbs-flatlay-full-hero.png",
  industrial: "/supreme/generated/industrial-flatlay-full-hero.png",
};

export const categoryTones: Record<string, string> = {
  "herbs-spices": "bg-[#e7eee8]",
  honey: "bg-[#f3e8cf]",
  petals: "bg-[#edf2f7]",
  "food-herbs": "bg-[#efe5da]",
  industrial: "bg-[#dceaf3]",
};

export const categoryOfferings: Record<string, string[]> = {
  "herbs-spices": ["Whole herbs", "Roots & barks", "Seeds & flowers", "Trade spices"],
  honey: ["Multiflora honey", "Forest honey", "Monofloral honey", "Bulk packing"],
  petals: ["Rose petals", "Hibiscus petals", "Chamomile petals", "Traditional petals"],
  "food-herbs": ["Dehydrated vegetables", "Ayurvedic powders", "Ground spices", "Spray-dried powders"],
  industrial: ["Resins", "Performance additives", "Pigments", "Cellulose & process chemicals"],
};

export const productCategoryCards = [
  {
    id: "herbs-spices",
    name: "Medicinal herbs & spices",
    note: "Whole botanicals, roots, barks, seeds, flowers and trade spices.",
    image: categoryImages["herbs-spices"],
    href: dedicatedPages["herbs-spices"],
  },
  {
    id: "honey",
    name: "Honey",
    note: "Natural and infused honey varieties for food, wellness and Ayurvedic applications.",
    image: categoryImages.honey,
    href: dedicatedPages.honey,
  },
  {
    id: "petals",
    name: "Petals",
    note: "Dried petals for teas, blends, fragrance, wellness and traditional applications.",
    image: categoryImages.petals,
    href: dedicatedPages.petals,
  },
  {
    id: "food-herbs",
    name: "Food herbs",
    note: "Dehydrated vegetables, Ayurvedic powders, spices and spray-dried produce powders.",
    image: categoryImages["food-herbs"],
    href: dedicatedPages["food-herbs"],
  },
  {
    id: "industrial",
    name: "Chemicals",
    note: "Resins, additives, pigments, cellulose products and speciality industrial chemicals.",
    image: categoryImages.industrial,
    href: dedicatedPages.industrial,
  },
] as const;

export type ProductCategoryId = (typeof productCategoryCards)[number]["id"];

export function getNextProductCategory(currentId: ProductCategoryId) {
  const currentIndex = productCategoryCards.findIndex((category) => category.id === currentId);
  return productCategoryCards[(currentIndex + 1) % productCategoryCards.length];
}
