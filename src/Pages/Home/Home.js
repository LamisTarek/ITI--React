import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div class="container">
      <div class="row justify-content-center align-items-center">
      <div class="col-md-4 text-center mt-5 p-5">
      <h1 style={{fontWeight:"900"}}>Electronic Shop</h1>
      <p style={{fontWeight:"600"}}>Where Your Dreams Come True</p>
      <Link to="/product-list" class="btn btn-primary p-3">Product List</Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
