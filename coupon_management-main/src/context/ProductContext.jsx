import React, { useState, createContext } from "react";

// Create a context for product state
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      avatar: "https://via.placeholder.com/250x200",
      description: "Description of Product 1",
      vailability: "In stock",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      avatar: "https://via.placeholder.com/250x200",
      description: "Description of Product 2",
      vailability: "Out of stock",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      avatar: "https://via.placeholder.com/250x200",
      description: "Description of Product 3",
      vailability: "In stock",
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
      avatar: "https://via.placeholder.com/250x200",
      description: "Description of Product 4",
      vailability: "In stock",
    },
    {
      id: 5,
      name: "Product 5",
      price: 50,
      avatar: "https://via.placeholder.com/250x200",
      description: "Description of Product 5",
      vailability: "In stock",
    },
    {
      id: 6,
      name: "Product 6",
      price: 60,
      avatar: "https://via.placeholder.com/250x200",
      description: "Description of Product 6",
      vailability: "In stock",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
