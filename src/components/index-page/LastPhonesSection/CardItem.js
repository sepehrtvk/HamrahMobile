import React from "react";
import classes from "./CardItem.module.css";
const CardItem = (props) => {
  return (
    <div className={`card rounded-3 border-0 ${classes.box}`}>
      <img src={props.image} className="card-img-top w-100" alt="iphone" />
      <div className="card-body text-start">
        <h5 className="card-title mb-4 text-center fw-bold"> {props.title}</h5>
        <p className="card-text">
          {" "}
          وضعیت :<span className="text-warning"> {props.status}</span>
        </p>
        <p className="card-text">
          توضیحات :<span className="text-secondary"> {props.description}</span>
        </p>
        <p className="card-text mb-4">
          قیمت :<span className="text-info"> {props.price} تومان</span>
        </p>
        <a href="#" className="btn btn-primary w-100">
          خرید
        </a>
      </div>
    </div>
  );
};

export default CardItem;
