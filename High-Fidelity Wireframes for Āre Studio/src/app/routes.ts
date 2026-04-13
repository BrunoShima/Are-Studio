import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Magazine from "./pages/Magazine";
import Product from "./pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "magazine", Component: Magazine },
      { path: "product", Component: Product },
    ],
  },
]);
