// Helper functions to import JSON content at build time

export type Product = {
  name: string;
  price: string;
  category: "Nuts" | "Seeds" | "Peanuts" | "Snacks & Crackers";
  description?: string;
  image?: string;
  featured?: boolean;
};

export type Offer = {
  title: string;
  description: string;
  discount?: number;
  startDate: string;
  endDate: string;
  active: boolean;
  banner?: string;
};

export function importAllJson<T = unknown>(glob: Record<string, () => Promise<unknown>>): T[] {
  return Object.values(glob).map((loader) => loader() as Promise<T>) as unknown as T[];
}

// Vite supports import.meta.glob for eager JSON imports
export function loadProducts(): Product[] {
  const modules = import.meta.glob("../data/products/*.json", { eager: true, import: "default" }) as Record<string, Product>;
  return Object.values(modules);
}

export function loadOffers(): Offer[] {
  const modules = import.meta.glob("../data/offers/*.json", { eager: true, import: "default" }) as Record<string, Offer>;
  return Object.values(modules);
}

// Eager JSON import via Vite glob is simpler for TypeScript
export function loadContact(): { phone: string; email: string; whatsapp: string; address: string } {
  const modules = import.meta.glob("../data/settings/contact.json", { eager: true, import: "default" }) as Record<string, any>;
  const [value] = Object.values(modules);
  return value as { phone: string; email: string; whatsapp: string; address: string };
}


