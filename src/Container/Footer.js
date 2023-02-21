import { Col, Row } from "antd";
import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
function Footer(props) {
  return (
    <div className="bg-[#e9e9e9] pt-7 ">
      <Row className="xl:w-[1200px] mx-auto">
        <Col xs={24} md={6}>
          <div className="flex  flex-col items-center ">
            <img
              src="https://mogi.vn/content/images/logo.svg"
              alt=""
              className="w-24 h-8"
            />
            <div className="flex items-center">
              <PhoneOutlined />
              <span className="pl-2">0368172473</span>
            </div>
            <div className="flex items-center">
              <MailOutlined />
              <span className="pl-2">phucnguyendx9012@gmail.com</span>
            </div>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <Row className="pb-5 hidden">
            <Col xs={24} sm={12} md={6}>
              <div className="flex flex-col items-center text-center">
                <ul>
                  <h1 className="font-bold">Bất động sản TPHCM</h1>
                  <li className="text-sm">Mua bán nhà đất TPHCM</li>
                  <li className="text-sm">Bán nhà quận 7</li>
                  <li className="text-sm">Căn hộ quận 7</li>
                  <li className="text-sm">Bán đất quận 9</li>
                  <li className="text-sm">Phòng trọ quận 10</li>
                  <li className="text-sm">Cho thuê nhà quận 8</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="flex flex-col items-center text-center">
                <ul>
                  <h1 className="font-bold">Bất động sản Hà Nội</h1>
                  <li className="text-sm">Bán đất Hà Nội</li>
                  <li className="text-sm">Bán nhà Hà Nội</li>
                  <li className="text-sm">Cho thuê nhà Hà Nội</li>
                  <li className="text-sm">Chung cư Hà Nội</li>
                  <li className="text-sm">Nhà đất Hà Nội</li>
                  <li className="text-sm">Phòng trọ Hà Nội</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="flex flex-col items-center text-center">
                <ul>
                  <h1 className="font-bold">Mua bán bất động sản</h1>
                  <li className="text-sm">Bán đất Bình Dương</li>
                  <li className="text-sm">Bất động sản Đà Nẵng</li>
                  <li className="text-sm">Căn hộ chung cư</li>
                  <li className="text-sm">Mua bán nhà đất</li>
                  <li className="text-sm">Nhà đất Hải Phòng</li>
                  <li className="text-sm">Sang quán cafe</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="flex flex-col items-center text-center">
                <ul>
                  <h1 className="font-bold">Cho thuê nhà đất</h1>
                  <li className="text-sm">Cho thuê căn hộ</li>
                  <li className="text-sm">Cho thuê mặt bằng</li>
                  <li className="text-sm">Cho thuê nhà nguyên căn</li>
                  <li className="text-sm">Cho thuê nhà xưởng</li>
                  <li className="text-sm">Cho thuê phòng trọ</li>
                  <li className="text-sm">Cho thuê văn phòng</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
