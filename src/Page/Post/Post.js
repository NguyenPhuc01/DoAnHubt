import React from "react";
import LayoutPage from "../../Container/Layout";
import { Col, Row } from "antd";
import FormPost from "../../Container/FormPost";

export default function Post() {
  return (
    <div className="mt-16 ">
      <LayoutPage>
        <div className="">
          <Row>
            <Col xs={24} xl={5}></Col>
            <Col xs={24} xl={16} className="  md:p-6">
              <div className="">
                <FormPost />
              </div>
            </Col>
            <Col xs={24} xl={3}></Col>
          </Row>
        </div>
      </LayoutPage>
    </div>
  );
}
