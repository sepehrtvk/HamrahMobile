import React from "react";
import classes from "./PhonePrice.module.css";
import { Card, Button } from "react-bootstrap";
import PhoneDetails from "./PhoneDetails";
import PhonePriceRange from "./PhonePriceRange";
import PhoneSearchForm from "./PhoneSearchForm";
const PhonePrice = () => {
  return (
    <section className={classes.sectionBack}>
      <Card className={`${classes.phonePrice} shadow-lg`}>
        <Card.Body className="d-flex justify-content-between p-0">
          <div className="flex-fill mx-4">
            <PhoneSearchForm />
          </div>
          <div className={classes.backgroundPhoto}>
            <h4 className="mb-3">قیمت روز موبایل</h4>
            <Card.Text className="mb-5">قیمت موبایل نو و کارکرده</Card.Text>
            <Button variant="outline-light">بیشتر بدانید</Button>
          </div>
        </Card.Body>
      </Card>
      <Card className={`${classes.phonePrice} shadow-lg mt-5`}>
        <Card.Body className="d-flex justify-content-between p-0">
          <div className="w-50">
            <PhoneDetails />
          </div>
          <div className="w-50 border-end">
            <PhonePriceRange />
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default PhonePrice;
