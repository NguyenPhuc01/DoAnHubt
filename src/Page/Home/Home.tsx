import { Col, Row, Tabs, Input } from "antd";
import React from "react";
import News from "../../Container/News";
import ProjectFloatingCarosel from "../../Container/ProjectFloatingCarosel";
import BDS from "../../Container/BDS";
import BDSLocation from "../../Container/BDSLocation";
import Tool from "../../Container/Tool";
import Footer from "../../Container/Footer";
import bgHome from "../../ultil/Images/bgHome.jpg";
const { Search } = Input;

function Home() {
  const onSearch = (value: string) => console.log(value);
  const items = [
    {
      label: "Mua",
      key: "item-1",
      children: (
        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
      ),
    }, // remember to pass the key prop
    {
      label: "Thuê",
      key: "item-2",
      children: (
        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
      ),
    },
    {
      label: "Giá nhà đất",
      key: "item-3",
      children: (
        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="mt-16">
        <Row>
          <Col xs={24}>
            {/* <div className="imageBackground relative"></div> */}
            <div>
              <img
                src={bgHome}
                alt=""
                style={{ width: "100%" }}
                className="h-[30vh] md:h-[40vh]  xl:h-[60vh]"
              />
            </div>
          </Col>
        </Row>

        <Row className="w-full absolute md:top-[15vh]  xl:top-[22vh]">
          <Col xs={24} md={6} xl={8}></Col>
          <Col xs={24} md={12} xl={8}>
            <div className=" flex flex-col items-center justify-center text-white h-56">
              <h1 className="text-3xl font-bold text-white">
                An tâm chọn, An tâm mua
              </h1>
              <div className="card-container  bg-[rgba(40,40,46,.7)] w-full rounded-md hidden md:block  p-5">
                <Tabs type="card" items={items} />
              </div>
            </div>
          </Col>
          <Col xs={24} md={6} xl={8}></Col>
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
