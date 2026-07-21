export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  detail?: string;
  subgroup?: string;
};

export type CatalogCategory = {
  id: string;
  name: string;
  shortName: string;
  sourceUrl: string;
  description: string;
  products: CatalogProduct[];
};

const sources = [
  {
    id: "herbs-spices",
    name: "Herbs & Spices",
    shortName: "Herbs",
    path: "Herbs-Spices.asp",
    description: "Whole botanicals, roots, barks, seeds, flowers, gums and trade spices.",
    fallback: [
      ["Ajwain", "Carom Seed"], ["Amla", "Indian Myrobalan"], ["Ashwagandha", "Withania Root"],
      ["Dalchini", "Cinnamon"], ["Giloy", "Moon Creeper"], ["Gulab", "Rose Petals"],
      ["Haldi", "Turmeric"], ["Isabgol", "Psyllium Husk"], ["Jeevanti", ""],
      ["Kababchini", "Cubeba"], ["Kaiphal", "Box Myrtle"], ["Mulethi", "Liquorice Root"],
    ],
  },
  {
    id: "oils",
    name: "Medical & Essential Oils",
    shortName: "Oils",
    path: "Essential-MedicalOil.asp",
    description: "Natural, essential, aroma, personal-care and traditional massage oils.",
    fallback: [
      ["Ajwain Oil", ""], ["Almond Oil", ""], ["Amla Oil", ""], ["Argan Oil", ""],
      ["Basil Oil / Tulsi Oil", ""], ["Citronella Oil", ""], ["Clove Oil", ""],
      ["Eucalyptus Oil", ""], ["Lavender Oil", ""], ["Rosemary Oil", ""],
    ],
  },
  {
    id: "honey",
    name: "Honey",
    shortName: "Honey",
    path: "Honey.asp",
    description: "Selected natural honey variants for food, wellness and Ayurvedic applications.",
    fallback: [
      ["Multiflora Honey", ""], ["Raw Forest Honey", ""], ["Jamun Honey", ""],
      ["Ajwain Honey", ""], ["Litchi Honey", ""], ["Eucalyptus Honey", ""],
      ["Neem Honey", ""], ["Tulsi Honey", ""],
    ],
  },
  {
    id: "food-herbs",
    name: "Food Herbs & Powders",
    shortName: "Food",
    path: "Food-Herbs.asp",
    description: "Dehydrated vegetables, Ayurvedic powders, spices and spray-dried produce powders.",
    fallback: [
      ["Basil Leaves", "Dehydrated Vegetables"], ["Beet Root Powder", "Dehydrated Vegetables"],
      ["Kasuri Methi Leaves", "Dehydrated Vegetables"], ["Amla Powder", "Herbal & Ayurvedic"],
      ["Ashwagandha Powder", "Herbal & Ayurvedic"], ["Moringa Leaves Powder", "Herbal & Ayurvedic"],
      ["Cumin Powder", "Spices"], ["Turmeric Powder", "Spices"],
      ["Mango Powder", "Spray Dried Fruit & Vegetable Powder"],
    ],
  },
  {
    id: "industrial",
    name: "Industrial Chemicals",
    shortName: "Industrial",
    path: "Industrial-Chemicals.asp",
    description: "Resins, additives, pigments, cellulose products and specialty industrial chemicals.",
    fallback: [
      ["Acrylic Polyol", "Resins"], ["Polyurethane Dispersion", "Resins"],
      ["Wetting & Dispersing", "Additives"], ["Hydroxyethyl Cellulose (HEC)", "Cellulose"],
      ["Organic Pigments", "Water & Solvent Based Pigments"], ["Acetic Acid", "Industrial Chemicals"],
      ["Citric Acid", "Industrial Chemicals"], ["Glycerine", "Industrial Chemicals"],
      ["Titanium Dioxide", "Industrial Chemicals"],
    ],
  },
] as const;

function clean(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function parseProducts(html: string, source: (typeof sources)[number]): CatalogProduct[] {
  const rows = html.match(/<tr><td>[\s\S]*?<\/tr>/gi) ?? [];

  return rows.flatMap((row, index) => {
    const name = row.match(/class="product-name">([\s\S]*?)<\/td>/i)?.[1];
    if (!name) return [];

    const detail = row.match(/class="english-name">([\s\S]*?)<\/td>/i)?.[1];
    const subgroup = row.match(/class="category-badge">([\s\S]*?)<\/span>/i)?.[1];

    return [{
      id: `${source.id}-${index + 1}`,
      name: clean(name),
      category: source.id,
      detail: detail ? clean(detail).replace(/^\*+$/, "") : undefined,
      subgroup: subgroup ? clean(subgroup) : undefined,
    }];
  });
}

function fallbackProducts(source: (typeof sources)[number]): CatalogProduct[] {
  return source.fallback.map(([name, detail], index) => ({
    id: `${source.id}-fallback-${index + 1}`,
    name,
    category: source.id,
    detail: source.id === "herbs-spices" ? detail || undefined : undefined,
    subgroup: source.id === "food-herbs" || source.id === "industrial" ? detail || undefined : undefined,
  }));
}

export async function getCatalog(): Promise<CatalogCategory[]> {
  return Promise.all(sources.map(async (source) => {
    const sourceUrl = `https://supremetrading.in/${source.path}`;
    let products: CatalogProduct[] = [];

    try {
      const response = await fetch(sourceUrl, { next: { revalidate: 86_400 } });
      if (response.ok) products = parseProducts(await response.text(), source);
    } catch {
      // The local fallback keeps the catalogue usable when the source is temporarily unavailable.
    }

    return {
      id: source.id,
      name: source.name,
      shortName: source.shortName,
      sourceUrl,
      description: source.description,
      products: products.length ? products : fallbackProducts(source),
    };
  }));
}
