import { Col, Row } from "antd";
import React from "react";

function BDSLocation(props) {
  return (
    <div>
      <h1 className="mt-8 w-full text-xl font-bold">
        Bất động sản theo địa điểm
      </h1>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div className="h-full ">
            <img
              src="https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg"
              alt=""
              className="rounded-md h-full w-full  "
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-1.jpg"
                  alt=""
                  className="rounded-md w-full h-full"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-1.jpg"
                  alt=""
                  className="rounded-md w-full h-full"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-2.jpg"
                  alt=""
                  className="rounded-md w-full h-full"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-1.jpg"
                  alt=""
                  className="rounded-md w-full h-full"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BDSLocation;
