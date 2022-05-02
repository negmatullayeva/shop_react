import React from "react";

export default function BasketItem(props) {
  const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
    props;
  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          href="#/"
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>
        </a>
        <a
          href="#/"
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(id)}
          style={{ marginLeft: "10px" }}
        >
          <i className="material-icons left">exposure_minus_1</i>
        </a>

        <i
          className="material-icons basket-delete"
          onClick={() => props.removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}
