import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import DemoPage from "./pages/demo/[slug].tsx";
import NotFound from "./pages/NotFound.tsx";
import RestaurantDetail from "./components/RestaurantDetail.tsx";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo/:slug" element={<DemoPage />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
