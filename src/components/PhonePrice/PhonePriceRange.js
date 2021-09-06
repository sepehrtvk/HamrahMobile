import React from "react";

const PhonePriceRange = () => {
  return (
    <div className="my-4 text-center">
      <h4 className="border-bottom pb-3 me-3">قیمت گوشی iphone 12 pro max</h4>
      <div className="d-flex justify-content-around align-items-center mt-4">
        <span className="fs-5 text-primary">قیمت کارشناسی : </span>
        <span className="fs-3"> ۲۸،۰۰۰،۰۰۰ </span>
        <span className="text-">تومان</span>
      </div>
      <div className="mt-5">
        <p className="fs-4 text-primary"> حد بالای قیمت </p>
        <span className="border border-2 p-2 fs-2 rounded-3 text-danger fw-bold">
          ۳۲،۰۰۰،۰۰۰
        </span>
        <p className="fs-4 text-primary mt-4"> حد پایین قیمت</p>
        <span className="border border-2 p-2 fs-2 rounded-3 text-success fw-bold">
          ۲۲،۰۰۰،۰۰۰
        </span>
      </div>
      <div className="d-flex justify-content-around align-items-center mt-5" >
        <button className="btn btn-primary">خرید سفارشی</button>
        <button className="btn btn-outline-primary">فروش سفارشی</button>
      </div>
    </div>
  );
};

export default PhonePriceRange;
