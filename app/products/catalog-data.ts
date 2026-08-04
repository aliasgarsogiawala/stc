export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  detail?: string;
  subgroup?: string;
  bestseller?: boolean;
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
    name: "Medicinal Herbs & Spices",
    shortName: "Medicinal herbs & spices",
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
    id: "honey",
    name: "Honey",
    shortName: "Honey",
    path: "Honey.asp",
    description: "Natural and infused honey varieties for food, wellness and Ayurvedic applications.",
    fallback: [
      ["Wild Forest Honey", "Apis dorsata"], ["Black Forest Honey", "Apis dorsata"],
      ["Himalayan Multi-flora Honey", ""], ["Sidr / Berry / Jujube Honey", ""],
      ["Litchi Honey", ""], ["Jamun / Wild Berry Honey", ""], ["Tulsi Honey", ""],
      ["Shisham / Rosewood Honey", ""], ["Eucalyptus / Safeda Honey", ""],
      ["Ajwain / Carom Seeds Honey", ""], ["Sunflower Honey", ""],
      ["Mustard / White / Creamy Honey", ""], ["Barseem / Clover Honey", ""],
      ["Rajasthan Acacia / Kikar / Babool Honey", ""],
      ["Kashmiri Acacia / Keekar Honey", ""], ["Saunf / Aniseed Honey", ""],
      ["Coriander / Dhaniya Honey", ""], ["Red Honey", ""], ["Karanj Honey", ""],
      ["Brankut Honey", "Aravalli Hills, Rajasthan"], ["Sundarvan Forest / Mangrove Honey", ""],
      ["Cinnamon Honey", "Infused"], ["Lemon Honey", "Infused"],
      ["Ginger Honey", "Infused"], ["Vanilla Honey", "Infused"],
      ["Ashwagandha Honey", "Infused"], ["Coffee Honey", "Infused"],
      ["Amla Honey", "Infused"], ["Moringa Honey", "Infused"],
      ["Chocolate Honey", "Infused"],
    ],
  },
  {
    id: "petals",
    name: "Petals",
    shortName: "Petals",
    path: "Herbs-Spices.asp",
    description: "Dried petals for teas, blends, fragrance, wellness and traditional applications.",
    fallback: [
      ["Rose Petals", "Gulab"], ["Chamomile", "Babuna"],
      ["Hibiscus", "Gudhal"], ["Lavender", "Ustekhadus"],
      ["Butterfly Pea", "Clitoria ternatea"], ["Calendula", "Calendula officinalis"],
      ["Blue Pea", "Clitoria ternatea"], ["Jasmine", "Jasmine petals"],
      ["Lemongrass", "Cymbopogon"],
    ],
  },
  {
    id: "food-herbs",
    name: "Food Herbs",
    shortName: "Food herbs",
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
    name: "Chemicals",
    shortName: "Industrial",
    path: "Industrial-Chemicals.asp",
    description: "Resins, additives, pigments, cellulose products and specialty industrial chemicals.",
    fallback: [
      ["Acrylic Polyol", "Resins"], ["Polyurethane Dispersion", "Resins"],
      ["Wetting & Dispersing", "Additives"], ["Hydroxyethyl Cellulose (HEC)", "Cellulose"],
      ["Organic Pigments", "Water & Solvent Based Pigments"], ["Acetic Acid", "Industrial Chemicals"],
      ["Citric Acid", "Industrial Chemicals"], ["Glycerine", "Industrial Chemicals"],
      ["Titanium Dioxide (Indian Rutile Grade / Imported)", "Industrial Chemicals"],
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
    const cleanName = clean(name);
    const cleanDetail = detail ? clean(detail).replace(/^\*+$/, "") : undefined;

    if (
      source.id === "petals" &&
      !/petal|flower|rose|gulab|gudhal|hibiscus|chamomile|babuna|banafsha/i.test(`${cleanName} ${cleanDetail ?? ""}`)
    ) return [];

    return [{
      id: `${source.id}-${index + 1}`,
      name: cleanName,
      category: source.id,
      detail: cleanDetail,
      subgroup: subgroup ? clean(subgroup) : undefined,
    }];
  });
}

function fallbackProducts(source: (typeof sources)[number]): CatalogProduct[] {
  return source.fallback.map(([name, detail], index) => ({
    id: `${source.id}-fallback-${index + 1}`,
    name,
    category: source.id,
    detail: source.id === "herbs-spices" || source.id === "petals" ? detail || undefined : undefined,
    subgroup: source.id === "food-herbs" || source.id === "industrial" ? detail || undefined : undefined,
  }));
}

const nameOverrides: Partial<Record<(typeof sources)[number]["id"], { pattern: RegExp; name: string }[]>> = {
  industrial: [
    { pattern: /titanium\s*dioxide/i, name: "Titanium Dioxide (Indian Rutile Grade / Imported)" },
  ],
};

function applyNameOverrides(products: CatalogProduct[], categoryId: string): CatalogProduct[] {
  const overrides = nameOverrides[categoryId as keyof typeof nameOverrides];
  if (!overrides) return products;

  return products.map((product) => {
    const override = overrides.find((entry) => entry.pattern.test(product.name));
    return override ? { ...product, name: override.name } : product;
  });
}

const bestsellerPatterns: Partial<Record<(typeof sources)[number]["id"], RegExp>> = {
  industrial: /titanium\s*dioxide/i,
};

function promoteBestseller(products: CatalogProduct[], categoryId: string): CatalogProduct[] {
  const pattern = bestsellerPatterns[categoryId as keyof typeof bestsellerPatterns];
  if (!pattern) return products;

  const index = products.findIndex((product) => pattern.test(product.name));
  if (index === -1) return products;

  const bestseller: CatalogProduct = { ...products[index], bestseller: true };
  return [bestseller, ...products.slice(0, index), ...products.slice(index + 1)];
}

export async function getCatalog(): Promise<CatalogCategory[]> {
  return Promise.all(sources.map(async (source) => {
    const sourceUrl = `https://supremetrading.in/${source.path}`;
    let products: CatalogProduct[] = source.id === "petals" ? fallbackProducts(source) : [];

    if (source.id !== "petals") {
      try {
        const response = await fetch(sourceUrl, { next: { revalidate: 86_400 } });
        if (response.ok) products = parseProducts(await response.text(), source);
      } catch {
        // The local fallback keeps the catalogue usable when the source is temporarily unavailable.
      }
    }

    return {
      id: source.id,
      name: source.name,
      shortName: source.shortName,
      sourceUrl,
      description: source.description,
      products: promoteBestseller(
        applyNameOverrides(products.length ? products : fallbackProducts(source), source.id),
        source.id,
      ),
    };
  }));
}
