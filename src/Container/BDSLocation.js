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
          <div>
            <img
              src="http://file1.dangcongsan.vn/DATA/3/2017/02/tphcm_8217-14_33_49_718.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="http://file1.dangcongsan.vn/DATA/3/2017/02/tphcm_8217-14_33_49_718.jpg"
                  alt=""
                  className="rounded-md w-full h-fu"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="http://file1.dangcongsan.vn/DATA/3/2017/02/tphcm_8217-14_33_49_718.jpg"
                  alt=""
                  className="rounded-md w-full h-fu"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="http://file1.dangcongsan.vn/DATA/3/2017/02/tphcm_8217-14_33_49_718.jpg"
                  alt=""
                  className="rounded-md w-full h-fu"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div>
                <img
                  src="http://file1.dangcongsan.vn/DATA/3/2017/02/tphcm_8217-14_33_49_718.jpg"
                  alt=""
                  className="rounded-md w-full h-fu"
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
