import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div className="status-message">Loading products...</div>;
  if (isError) return <div className="status-message error">Error: {error.message}</div>;

  return (
    <div className="product-grid">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
