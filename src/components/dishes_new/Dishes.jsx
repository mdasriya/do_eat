import React, { useContext, useEffect, useState } from 'react'
import "../FoodDisplay/FoodDisplay.css"
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../context/StoreContext';

const Dishes = () => {
    const [dishes, setDishes] = useState([])
    const { food_list } = useContext(StoreContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
  
    // Logic for displaying products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = food_list.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      scrollToTop();
    };
    
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  

    useEffect(()=> {
      setDishes(food_list);
    },[]);
    console.log("dishes", dishes);

    return (
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {currentProducts.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() =>
              paginate(currentPage > 1 ? currentPage - 1 : 1)
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button>{currentPage}</button>
          <button
            onClick={() =>
              paginate(
                currentPage < Math.ceil(food_list.length / productsPerPage)
                  ? currentPage + 1
                  : currentPage
              )
            }
            disabled={
              currentPage ===
              Math.ceil(food_list.length / productsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    );
}

export default Dishes;
