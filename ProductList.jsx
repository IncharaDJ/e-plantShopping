import React from "react";

function ProductList({ addToCart }) {
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
    {
      id: 3,
      name: "Rose Plant",
      category: "Flowering Plants",
      price: 249,
      image: "/images/rose.jpg",
    },
    {
      id: 4,
      name: "Peace Lily",
      category: "Indoor Plants",
      price: 349,
      image: "/images/peace-lily.jpg",
    },
    {
      id: 5,
      name: "Money Plant",
      category: "Indoor Plants",
      price: 199,
      image: "/images/money-plant.jpg",
    },
    {
      id: 6,
      name: "Jasmine",
      category: "Flowering Plants",
      price: 299,
      image: "/images/jasmine.jpg",
    },
  ];

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-list">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>

                  <button onClick={() => addToCart(plant)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
