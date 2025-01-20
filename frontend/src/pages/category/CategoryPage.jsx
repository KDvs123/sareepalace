import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCards";
const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setfilteredProducts] = useState([]);
  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLowerCase()
    );
    setfilteredProducts(filtered);
  }, [categoryName]);

  useEffect(()=>window.scrollTo(0,0))

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          animi velit, minima ducimus eligendi adipisci? Optio ab, mollitia
          architecto facere minima eaque aut numquam! Atque fuga molestiae
          facere porro repudiandae?
        </p>
      </section>

      {/*Products card */}
      <div className="section__container">
        <ProductCards products={filteredProducts}/>
      </div>
    </>
  );
};
export default CategoryPage;
