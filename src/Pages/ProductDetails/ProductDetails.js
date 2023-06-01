import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Axios";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const id = useParams().productId;
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const response = await axiosInstance
      .get(`/products/${productId}`)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; 
  return productDetails ? (
    <div className="details">

      <div class="container">
      <Link to={`/product-list`} class="btn btn-primary w-25">
        Back
      </Link>
        <div class="row justify-content-center align-items-center g-2">
        
          <div class="card mt-5 w-75 d-flex justify-content-center align-items-center text-center">
            <img src={productDetails.thumbnail} className="mt-2" />
            <p>
              <strong>Name:</strong> {productDetails.title}
            </p>
            <p>
              <strong>Price:</strong> {productDetails.price}
            </p>
            <p>
              <strong>Category:</strong>
              {productDetails.category}
            </p>
            <p>
              <strong>Description:</strong>
              {productDetails.description}
            </p>
            <p>
              <strong>Rating:</strong>
              {productDetails.rating}
            </p>
            <p>
              <strong>Discount:</strong>
              {productDetails.discountPercentage}
            </p>
            <p>
              <strong>Stock:</strong>
              {productDetails.stock}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center">
      <h1>Loading...</h1>
    </div>
  );
};

export default ProductDetails;
