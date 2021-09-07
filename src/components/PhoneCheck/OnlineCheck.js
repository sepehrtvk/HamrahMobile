import React from "react";
import { Ri24HoursLine } from "react-icons/ri";
import {
  AiOutlineFieldTime,
  AiOutlineCloudUpload,
  AiFillFileAdd,
  AiOutlinePhone,
} from "react-icons/ai";
import classes from "./OnlineCheck.module.css";
const OnlineCheck = () => {
  return (
    <div className="mt-5 border rounded-3 shadow p-0 d-flex justify-content-between ">
      <div className={`${classes.photo} text-white `}>
        <h4 className="m-4 pb-2 fw-bold">کارشناسی آنلاین موبایل</h4>
        <p className="mx-4">
          کارشناسان ما در ۲۴ ساعت روز آماده خدمت رسانی به شما هستند.{" "}
        </p>
      </div>
      <div className="flex-fill">
        <div className="mt-4 px-4">
          <p className="mb-4">ویژگی های کارشناسی آنلاین همراه موبایل : </p>
          <div className="text-secondary m-2">
            <Ri24HoursLine size="1.4rem" />
            <span className="me-2 mdFont">دسترسی ۲۴ ساعته</span>
          </div>
          <div className="text-secondary m-2">
            <AiOutlineFieldTime size="1.5rem" />
            <span className="me-2 mdFont">جواب دهی در کمترین زمان </span>
          </div>
          <div className="text-secondary m-2">
            <AiOutlineCloudUpload size="1.5rem" />
            <span className="me-2 mdFont">
              کارشناسی از طریق عکس های آپلود شده{" "}
            </span>
          </div>
          <div className="text-secondary m-2">
            <AiFillFileAdd size="1.5rem" />
            <span className="me-2 mdFont">
              ارايه فایل حاوی مشخصات موبایل بعد از کارشناسی
            </span>
          </div>
        </div>
        <div className="mt-5 mb-4 mx-3">
          <p className="text-muted smFont">
            <AiOutlinePhone size="1.2rem" />
            <span className="me-2">
              جهت کسب اطلاعات بیشتر با کارشناسان ما تماس بگیرید
            </span>
          </p>
        </div>
        <div className="text-center">
          <button className="btn btn-secondary btn-sm mb-4">
            درخواست کارشناسی{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineCheck;
