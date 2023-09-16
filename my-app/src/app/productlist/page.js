"use client"
import { useState, useEffect } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
      setProduct(data.products);
  }, []);

  return (
    <div>
      <h1>Client Component Product</h1>
      {product.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
}
