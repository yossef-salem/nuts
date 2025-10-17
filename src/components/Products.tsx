import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { loadProducts, type Product } from "@/lib/content";

const productCategoriesFromJson = () => {
  const all = loadProducts();
  return all.reduce((acc, p) => {
    const key = p.category as keyof typeof acc;
    if (!acc[key]) acc[key] = [] as Product[];
    acc[key].push(p);
    return acc;
  }, {} as Record<Product["category"], Product[]>);
};

const Products = () => {
  const categories = useMemo(productCategoriesFromJson, []);
  const [activeTab, setActiveTab] = useState<keyof typeof categories>("Nuts");

  return (
    <section id="products" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of nuts, seeds, and snacks
          </p>
        </div>

        {/* Tabbed Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category as keyof typeof productCategories)}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
          {categories[activeTab]?.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square bg-muted overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl md:text-5xl">🥜</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                  {product.name}
                </h3>
                <p className="text-secondary font-medium text-xs md:text-sm">
                  {product.price}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
