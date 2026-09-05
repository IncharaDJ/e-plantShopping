import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      category: "Indoor Plants",
      price: 299,
      image: "/images/aloe-vera.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      category: "Indoor Plants",
      price: 399,
      image: "/images/snake-plant.jpg",
    },
    // Add the remaining plants required by your rubric
  ];

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((prev) => [...prev, plant.id]);
  };

  return (
    <div className="product-list">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded =
                  addedItems.includes(plant.id) ||
                  cartItems.some((item) => item.name === plant.name);

                return (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />

                    <h3>{plant.name}</h3>
                    <p>₹{plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
