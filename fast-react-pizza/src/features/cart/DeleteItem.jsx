import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function onDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <>
      <Button type="small" onClick={onDeleteItem}>
        Delete
      </Button>
    </>
  );
}

export default DeleteItem;
