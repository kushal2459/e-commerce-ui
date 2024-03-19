import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = "https://freetestapi.com/api/v1/products";

    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold my-5">New Arrival</h2>
      <div className="grid place-items-center gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            title={item.name}
            body={item.description}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
