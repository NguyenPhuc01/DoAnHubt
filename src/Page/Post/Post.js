import React, { useState } from "react";
import LayoutPage from "../../Container/Layout";
import Footer from "../../Container/Footer";
import { Button, Col, Row } from "antd";
import FormPost from "../../Container/FormPost";

export default function Post() {
  return (
    <div className="mt-16 ">
      <LayoutPage>
        <div className="overflow-y-auto">
          <Row>
            <Col xs={24} xl={4}></Col>
            <Col
              xs={24}
              xl={16}
              className="bg-[#fff] shadow-lg rounded-md  p-6"
            >
              <div className="">
                <FormPost />
              </div>
            </Col>
            <Col xs={24} xl={4}></Col>
          </Row>
        </div>
      </LayoutPage>
      <Footer />
    </div>
  );
}
