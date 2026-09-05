import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { useState } from "react";
const dispatch = useDispatch();
const [addedItems, setAddedItems] = useState([]);
<button
  onClick={() => {
    dispatch(addToCart(plant));
    setAddedItems([...addedItems, plant.id]);
  }}
  disabled={addedItems.includes(plant.id)}
>
  {addedItems.includes(plant.id) ? "Added to Cart" : "Add to Cart"}
</button>
