import { useState } from "react";
import { Card } from "@/components/ui/card";

const productCategories = {
  Nuts: [
    { name: "Almonds", price: "$12.99/lb" },
    { name: "Cashews", price: "$14.99/lb" },
    { name: "Hazelnut", price: "$13.99/lb" },
    { name: "Macadamia Nuts", price: "$18.99/lb" },
    { name: "Mixed Nuts", price: "$15.99/lb" },
    { name: "Pistachio", price: "$16.99/lb" },
    { name: "Walnuts", price: "$11.99/lb" },
  ],
  Seeds: [
    { name: "Black Watermelon Seeds", price: "$8.99/lb" },
    { name: "Egyptian Seeds", price: "$9.99/lb" },
    { name: "Pumpkin Seeds", price: "$10.99/lb" },
    { name: "Squash Seeds", price: "$9.49/lb" },
    { name: "Sunflower Seeds", price: "$7.99/lb" },
  ],
  Peanuts: [
    { name: "Coated Peanuts", price: "$6.99/lb" },
    { name: "Peanuts", price: "$5.99/lb" },
  ],
  "Snacks & Crackers": [
    { name: "Chickpeas", price: "$7.99/lb" },
    { name: "Oriental Mix", price: "$12.99/lb" },
    { name: "Puffed Rice", price: "$4.99/lb" },
    { name: "Shoestring Potatoes", price: "$5.99/lb" },
    { name: "Sprouted Spelt", price: "$8.99/lb" },
    { name: "Toasted Corn Nuts", price: "$6.49/lb" },
  ],
};

const Products = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof productCategories>("Nuts");

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
          {Object.keys(productCategories).map((category) => (
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
          {productCategories[activeTab].map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl md:text-5xl">🥜</span>
                </div>
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
