import React from "react";
import { Container } from "react-bootstrap";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <Container fluid className={`${classes.main} p-0`}>
      <div className={classes.heading}>
        <h1>همراه موبایل</h1>
        <h2> خرید و فروش مطمین تلفن همراه</h2>
        <p>کارشناسی موبایل زیر نظر تیم کارشناسی همراه موبایل</p>
      </div>
    </Container>
  );
};

export default MainHeader;
