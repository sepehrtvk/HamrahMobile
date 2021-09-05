import React from "react";
import {
  BiSupport,
  BiBadgeCheck,
  BiDollarCircle,
  BiUserCheck,
} from "react-icons/bi";
const IconSection = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container">
        <div className="row text-center">
          <h4 className="my-5">خدمات همراه موبایل</h4>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
            <BiSupport size="6rem" />
            <p className="mt-3"> پشتیبانی ۲۴ ساعته همراه موبایل</p>
          </div>
          <div className="col-md-3">
            <BiBadgeCheck size="6rem" />
            <p className="mt-3"> ضمانت بازگشت وجه تا یک هفته</p>
          </div>
          <div className="col-md-3">
            <BiDollarCircle size="6rem" />
            <p className="mt-3"> تضمین قیمت مناسب </p>
          </div>
          <div className="col-md-3">
            <BiUserCheck size="6rem" />
            <p className="mt-3"> کارشناسی دقیق و بی نقص</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconSection;
