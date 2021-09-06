import React from "react";
import iphoneSample from "../../assets/images/samsaung.png";

const PhoneDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center flex-column mb-3">
        <img src={iphoneSample} alt="iphone" className="w-50 mt-4" />
        <h4 className="mb-4 mt-4 fw-bold">Iphone 12 Pro Max</h4>
      </div>
      <div className="mx-4" >
        <h4 className="mb-2" >مشخصات</h4>
        <div className="border-bottom py-2">
          <span>برند: </span>
          <span className="text-primary" >apple</span>
        </div>
        <div className="border-bottom py-2">
          <span> رنگ: </span>
          <span className="text-primary">آبی</span>
        </div>
        <div className="border-bottom py-2">
          <span>شارژر: </span>
          <span className="text-danger">ندارد</span>
        </div>
        <div className="border-bottom py-2 mb-4">
          <span>بدنه: </span>
          <span className="text-primary">۲ ضربه کوچک</span>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
