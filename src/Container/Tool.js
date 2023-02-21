import { Col, Row } from "antd";
import React from "react";

function Tool(props) {
  return (
    <div className="pb-7">
      <h1 className="font-bold text-2xl py-4">Hỗ trợ tiện ích</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className="shadow-xl px-6 border flex items-center py-3 rounded-md">
            <img
              src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-ying-yang.svg"
              alt=""
              className="w-12 h-12 "
            />
            <span className="text-lg font-semibold pl-3">Xem tuổi xây nhà</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className="shadow-xl px-6 border flex items-center py-3 rounded-md">
            <img
              src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-house.svg"
              alt=""
              className="w-12 h-12 "
            />
            <span className="text-lg font-semibold pl-3">Chi phí làm nhà</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className="shadow-xl px-6 border flex items-center py-3 rounded-md">
            <img
              src="https://staticfile.batdongsan.com.vn/images/home/calculator.svg"
              alt=""
              className="w-12 h-12 "
            />
            <span className="text-lg font-semibold pl-3">Tính lãi suất</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className="shadow-xl px-6 border flex items-center py-3 rounded-md">
            <img
              src="https://staticfile.batdongsan.com.vn/images/icons/color/ic-feng-shui.svg"
              alt=""
              className="w-12 h-12 "
            />
            <span className="text-lg font-semibold pl-3">
              Tư vấn phong thủy
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Tool;
