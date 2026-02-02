import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Management } from "./pages/Management";
import { Covenants } from "./pages/Covenants";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "management", Component: Management },
      { path: "covenants", Component: Covenants },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
    ],
  },
]);
