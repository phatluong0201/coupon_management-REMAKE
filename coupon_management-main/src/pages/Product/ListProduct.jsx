import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListProduct = () => {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length === 0) {
        try {
          const response = await axios.get("/api/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products", error);
        }
      }
    };

    fetchProducts();
  }, [products, setProducts]);

  const handleClickProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">List products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border rounded-md shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              onClick={() => handleClickProduct(product)}
            >
              <img
                src={product.avatar}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-800 font-bold">Giá: ${product.price}</p>
              <p
                className={`mt-2 font-bold ${
                  product.vailability === "In stock"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {product.vailability}
              </p>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
