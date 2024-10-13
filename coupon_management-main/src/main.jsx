import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// styles
import "./assets/css/index.css";

// routes
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CouponProvider } from "./context/CouponContext";
import { ProductProvider } from "./context/ProductContext";
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <CouponProvider>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </CouponProvider>
  // </StrictMode>
);
