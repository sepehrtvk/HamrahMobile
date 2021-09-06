import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const PhoneSearchForm = () => {
  return (
    <>
      <Card.Title className="mb-4 mt-4">انتخاب موبایل</Card.Title>
      <Form.Select aria-label="phoneBrand" className="mb-3">
        <option>انتخاب برند</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select aria-label="phoneBrand" className="mb-3">
        <option>انتخاب رنگ</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select aria-label="phoneStatus" className="mb-5">
        <option>وضعیت بدنه</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Button variant="primary" className="mb-4">
        محاسبه قیمت
      </Button>
    </>
  );
};

export default PhoneSearchForm;
