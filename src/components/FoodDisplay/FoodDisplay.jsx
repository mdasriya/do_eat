import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
const navigate = useNavigate()
  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = food_list.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {currentProducts.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
     <Link to={"/dishes"}><span className="explore_more" onClick={navigate("/dishes")}>View More...</span></Link>   
      </div>
    
    </div>
  );
};

export default FoodDisplay;
