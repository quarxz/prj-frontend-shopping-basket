import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Product } from "./components/Product";

function App() {
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const url = "https://prj-backend-shopping-basket.onrender.com";

  useEffect(() => {
    async function loadProducts(params) {
      console.log("Load Data");
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}/products`);
        console.log(response.data);
        console.log(response.status);
        setProducts(response.data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isError) {
    return (
      <>
        <h1>Componet Livecycle</h1>
        <p>oops - an error appeared!</p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to Tak Soft!</h1>
        <h2>Shopping Basket Project</h2>
        <h3>Top Products:</h3>

        {isloading ? (
          <span className="loader"></span>
        ) : (
          products.map((product) => {
            if (product.top === true) {
              return <Product product={product} />;
            }
          })
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
