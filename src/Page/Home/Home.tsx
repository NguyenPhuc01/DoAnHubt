import { Col, Row, Tabs } from "antd";
import React from "react";
import News from "../../Container/News";
import ProjectFloatingCarosel from "../../Container/ProjectFloatingCarosel";
import BDS from "../../Container/BDS";
import BDSLocation from "../../Container/BDSLocation";
import Tool from "../../Container/Tool";
import Footer from "../../Container/Footer";
import happy from "../../ultil/Images/happy.png";
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab Title ${id}`,
    key: id,
    children: (
      <div>
        <p className="text-white">Content of Tab Pane {id}</p>
        <p className="text-white">Content of Tab Pane {id}</p>
        <p className="text-white">Content of Tab Pane {id}</p>
      </div>
    ),
  };
});
function Home() {
  return (
    <>
      <div className="mt-16">
        <Row>
          <Col xs={24}>
            {/* <div className="imageBackground relative"></div> */}
            <div>
              <img
                src={happy}
                alt=""
                style={{ width: "100%" }}
                className=" md:h-[380px]"
              />
            </div>
          </Col>
        </Row>

        <Row className="w-full absolute top-40">
          <Col xs={24} md={6}></Col>
          <Col xs={24} md={12}>
            <div className="max-h-[440px] flex items-center justify-center text-white ">
              <div className="card-container  bg-[rgba(40,40,46,.7)] w-full rounded-md hidden md:block ">
                <Tabs type="card" items={items} />
              </div>
            </div>
          </Col>
          <Col xs={24} md={6}></Col>
        </Row>
        <div className="max-w-[1140px] mx-auto px-4">
          <News />
          <h1 className="mt-8 w-full text-xl font-bold">
            Bất động sản đăng bán
          </h1>

          <ProjectFloatingCarosel title="" />
          <div className="banner mt-8">
            <img
              src="https://cdn.mogi.vn/banner/2023/6_5ec744aa-7e25-4736-86ee-3d6bef160625.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <BDS />
          <h1 className="mt-8 w-full text-xl font-bold">Dự án nổi bật</h1>

          <ProjectFloatingCarosel title="" />
          <BDSLocation />
          <Tool />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
