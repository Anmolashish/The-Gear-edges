import ProductCard from "../components/ProductCard";

export default function ProductPage1(props) {
  return (
    <div className="products-section">
      <div className="top-text">
        <div className="product-page-heading">{props.categoryName}</div>
        <small className="product-page-subline">
          {props.categoryDescription}
        </small>
      </div>
      <div className="products-category">
        {props.data.map((element) => {
          return (
            <ProductCard
              key={element.id}
              name={element.name}
              description={element.description}
              review={element.review}
              image={element.image}
            />
          );
        })}
      </div>
    </div>
  );
}
