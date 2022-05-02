import React from "react";
import GoodItem from "./GoodItem";

export default function GoodList(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h1>Not here</h1>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
