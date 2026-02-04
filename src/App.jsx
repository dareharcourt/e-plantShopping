import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList.jsx";

function App() {
  return (
    <BrowserRouter basename="/shoppingreact">
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                padding: "40px",
              }}
            >
              <h1>Paradise Nursery</h1>
              <p style={{ maxWidth: "500px", fontSize: "18px" }}>
                Welcome to Paradise Nursery, your one-stop shop for beautiful,
                healthy houseplants that bring life and calm into your home.
              </p>

              <Link to="/products">
                <button
                  style={{
                    marginTop: "20px",
                    padding: "12px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          }
        />

        {/* Product List Page */}
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
