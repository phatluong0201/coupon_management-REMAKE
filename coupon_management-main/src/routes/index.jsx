import CreateCoupon from "../pages/Coupon/CreateCoupon";
import ListCoupon from "../pages/Coupon/ListCoupon";
import Product from "../pages/Product/Product"; // Component hiển thị chi tiết sản phẩm
import Login from "../pages/Auth/Login";
import Layout from "../components/Layout";
import EditCoupon from "../pages/Coupon/EditCoupon";
import ListProduct from "../pages/Product/ListProduct"; // Thêm import này

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "", // Trang chính có thể là danh sách sản phẩm hoặc bất kỳ trang nào bạn muốn
        element: <ListProduct />, // Nếu bạn muốn trang chủ là danh sách sản phẩm
      },
      {
        path: "coupon/create",
        element: <CreateCoupon />,
      },
      {
        path: "/coupon/edit/:id",
        element: <EditCoupon />,
      },
      {
        path: "coupon/show",
        element: <ListCoupon />,
      },
      {
        path: "product/show", // Đường dẫn cho danh sách sản phẩm
        element: <ListProduct />,
      },
      {
        path: "product/:id", // Đường dẫn cho sản phẩm chi tiết
        element: <Product />, // Sửa lại để chỉ định đến Product thay vì ProductDetail
      },
    ],
  },
];
