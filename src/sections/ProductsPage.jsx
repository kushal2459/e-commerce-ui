import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from 'react-router'
// import { useContext } from "react";
// import myContext from "../context/myContext";

const ProductsPage = () => {
  const navigate = useNavigate();

  // const context = useContext(myContext);
  // const { getAllProducts } = context;

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = "http://localhost:4000/Pruduct";

    fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
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
    <div className="container mx-auto py-5" id="products">
      <h2 className="text-2xl font-semibold mb-5">New Arrival</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            body={item.description}
            price={item.price}
            image={item.image_url}
            rating={item.rating}
            onClick={()=> navigate(`productinfo/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
