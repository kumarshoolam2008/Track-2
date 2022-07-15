import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../actions";

const CartDetails = () => {
  const [data, setData] = useState();
  const [quantity, setquantity] = useState(0);
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    getProfuctDetails(id);
  }, []);
  const getProfuctDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  console.log(data);
  return (
    <div>
      <img
        src={data?.image}
        alt="img"
        className="img-resposive"
        style={{ width: "100%", height: "100px" }}
      />
      <h5>{data?.title}</h5>
      <h5> ${data?.price}</h5>

      <div>
        <span
          className="btn btn-primary"
          style={{ margin: "2px" }}
          onClick={() => setquantity((prev) => --prev)}
        >
          -
        </span>
        <span className="btn btn-info">{quantity}</span>
        <span
          className="btn btn-primary"
          style={{ margin: "2px" }}
          onClick={() => setquantity((prev) => ++prev)}
        >
          +
        </span>
      </div>
      <span
        className="badge badge-primary"
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(AddCart(data, quantity))}
      >
        Add To Cart
      </span>
    </div>
  );
};

export default CartDetails;
