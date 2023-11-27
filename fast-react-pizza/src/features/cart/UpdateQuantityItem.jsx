import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getTotalCartQuantityById,
  increateItemQuantity,
} from "./cartSlice";

function UpdateQuantityItem({ pizzaId }) {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getTotalCartQuantityById(pizzaId));

  const increaseQuantity = () => {
    dispatch(increateItemQuantity(pizzaId));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex gap-1 md:gap-3 items-center">
      <Button type="round" onClick={decreaseQuantity}>
        -
      </Button>

      <span>{itemQuantity}</span>
      <Button type="round" onClick={increaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityItem;
