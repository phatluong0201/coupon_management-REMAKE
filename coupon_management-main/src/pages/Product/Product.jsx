import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const { product } = location.state; // Nhận dữ liệu sản phẩm từ state

  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(product.price);
  const [errorMessage, setErrorMessage] = useState("");

  const coupons = {
    DISCOUNT10: 10,
    DISCOUNT20: 20,
  };

  const handleCouponSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    // Kiểm tra coupon
    if (coupons[couponCode]) {
      const discount = coupons[couponCode];
      const newPrice = product.price - (product.price * discount) / 100;
      setDiscountedPrice(newPrice);
    } else {
      setErrorMessage("Mã giảm giá không hợp lệ.");
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-600 py-8 m-auto w-max">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.avatar}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-800 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Mua ngay
                </button>
              </div>
              <div className="w-1/2 px-2">
                <form onSubmit={handleCouponSubmit}>
                  <input
                    type="text"
                    className="w-full p-2 rounded-xl focus:outline-none"
                    placeholder="Nhập mã giảm giá"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full bg-green-500 text-white py-2 rounded-xl font-bold hover:bg-green-400"
                  >
                    Áp dụng mã giảm giá
                  </button>
                </form>
                {errorMessage && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Giá:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${discountedPrice.toFixed(2)}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Tình trạng:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.vailability} {/* Hiển thị availability */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
