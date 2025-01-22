import { useState } from "react";
import { useEffect } from "react";

import productsData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";

const filter = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50-$100", min: 50, max: 100 },
    { label: "$100-$200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};
const ShopPage = () => {
  const [products, setproducts] = useState(productsData);
  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  // filtering functions

  const applyFilters = () => {
    let filteredProducts = productsData;

    // filter by category

    if (filterState.category && filterState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterState.category
      );
    }

    // filter by color

    if (filterState.color && filterState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filterState.color
      );
    }

    // filter by price range

    if (filterState.priceRange) {
      const [minPrice, maxPrice] = filterState.priceRange
        .split("-")
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setproducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filterState]);

  // clear the filters

  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  // Debugging the `filter` object
  console.log("Filters object:", filter);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est omnis
          quisquam esse eius sapiente provident vel delectus tempore modi,
          voluptatem dolore quo doloribus asperiores inventore quasi excepturi.
          Similique, totam ab.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/*left side */}
          <ShopFiltering
            filters={filter}
            filterState={filterState}
            setFilterState={setFilterState}
            clearFilters={clearFilters}
          />
          {/* right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Products Available: {products.length}
            </h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ShopPage;
