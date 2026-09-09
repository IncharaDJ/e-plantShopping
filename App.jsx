import React, { useState } from "react";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>

      <button onClick={handleGetStartedClick}>
        Get Started
      </button>

      {showProductList && (
        <div>
          <h2>Product List</h2>
          <p>Explore our beautiful plants.</p>
        </div>
      )}
    </div>
  );
}

export default App;
