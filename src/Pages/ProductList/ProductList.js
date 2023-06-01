import { axiosInstance } from "../../Axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const response = await axiosInstance.get("/products"); // https://dummyjson.com/api/products
    console.log(response);
    setProductList(response.data.products);
  };

  return (
    <section>
      <div class="product-list">
        <h1 class="text-center pt-3">All Products</h1>
        <div class="container">
          <div class="row align-items-center">
            {productList.map((product) => (
              <div class="col-md-4 mt-5" key={product.id}>
                <div class="card mt-5" style={{ height: "38rem" }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    class="card-img-top"
                  />
                  <div class="card-body py-3">
                    <h1>{product.title}</h1>
                    <p>
                      <strong>{product.description}</strong>
                    </p>
                    <p>
                      <strong>Price: </strong>
                      {product.price}
                    </p>
                    <p>
                      <strong>Category: </strong>
                      {product.category}
                    </p>
                    <div class="details-btn">
                      <Link
                        to={`/product-details/${product.id}`}
                        class="btn btn-primary"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
