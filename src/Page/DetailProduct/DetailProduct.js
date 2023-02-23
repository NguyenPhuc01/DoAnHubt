import { Button, Col, Divider, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import "swiper/css";
import axios from "axios";
import Footer from "../../Container/Footer";
import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";
import ProjectFloatingCarosel from "../../Container/ProjectFloatingCarosel";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function DetailProduct() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/posts/get-post-by-id/${id}`)
      .then((res) => {
        setData(res.data.result);
        setLocation(res.data.result.address.addressDetails);
        setUserId(res.data.result.user.id);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);
  useEffect(() => {
    if (userId !== "") {
      axios
        .get(`${process.env.REACT_APP_URL}/api/v1/users/${userId}`)
        .then((res) => {
          setUser(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);
  useEffect(() => {
    if (location !== "") {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
        )
        .then((res) => {
          setLongitude(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function upperCase(str = "") {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return result.join(" ");
  }
  const time = (cre = "") => {
    let date = new Date(cre);
    let str = date.toLocaleDateString();
    return str;
  };
  return (
    <>
      <div className="lg:max-w-[1070px] mx-auto mt-24 px-4 xl:px-0">
        <Row gutter={{ xs: 0, md: 32 }} className="px-3 md:px-0">
          <Col xs={24} lg={16} md={24}>
            <div className="bg-[#f1f4f6]">
              <Swiper slidesPerView={1}>
                {data &&
                  data?.imageDetails?.map((e, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <img
                          src={e}
                          alt=""
                          className="w-full h-[250px] md:h-[415px]  object-contain"
                          loading="eager"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <div className="pt-5">
              <h1 className="text-lg font-semibold">{data?.name}</h1>
              <p>{data?.address?.addressDetails}</p>
              <h1 className="font-extrabold text-2xl text-teal-500 pt-2">
                {data?.compactNumber}
              </h1>
            </div>

            <div className="mt-7">
              <h1 className="text-lg font-bold">Thông tin Chính</h1>
              <div>
                <Row gutter={[32, 16]}>
                  <Col xs={24} md={12}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="w-40  text-slate-400">
                        Diện tích sử dụng
                      </span>
                      <span>{`${data?.useableArea}m`}</span>
                      <sup>2</sup>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="w-40  text-slate-400">Phòng ngủ</span>
                      <span>{data?.bedroom}</span>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="w-40  text-slate-400">Nhà tắm</span>
                      <span>{data?.bedroom}</span>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="w-40  text-slate-400">Pháp lý</span>
                      <span>Không xác định</span>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="w-40  text-slate-400">Ngày Đăng</span>
                      <span>{`${time(data?.createdTime)}`}</span>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      <span className="w-40  text-slate-400">Mã BDS</span>
                      <span>{data?.postCode}</span>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="mt-8 ">
                <h1 className="text-lg font-bold">Mổ tả</h1>
                <span>{data?.description}</span>
              </div>

              <div className="w-full h-64 mt-8 mb-14">
                <h1 className="text-lg font-bold">Tiện ích xung quanh</h1>
                {longitude ? (
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: process.env.REACT_APP_API_KEY,
                    }}
                    defaultCenter={{ lat: 10.99835602, lng: 77.01502627 }}
                    center={{
                      lat: Number(longitude.lat),
                      lng: Number(longitude.lon),
                    }}
                    defaultZoom={11}
                  >
                    <AnyReactComponent
                      lat={Number(longitude.lat)}
                      lng={Number(longitude.lon)}
                      text={<MdLocationOn size={35} color="red" />}
                    />
                  </GoogleMapReact>
                ) : null}
              </div>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="sticky top-24">
              <div className="rounded-md shadow-lg p-4">
                <div className=" flex">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                    alt=""
                    className="w-12 h-12"
                  />
                  <div className="pl-4">
                    <h4 className="font-bold text-md">{`${upperCase(
                      `${user?.firstName} ${user?.lastName}`
                    )}`}</h4>
                    <span>Đã tham gia: 8 ngày</span>
                  </div>
                </div>
                <Divider />
                <div className="border rounded-lg flex justify-between items-center mb-3 h-10">
                  <h1 className="m-0 pl-3">{user?.sdt}</h1>
                  <p className="m-0 pr-3">Bấm để hiện số</p>
                </div>
                <div className="  ">
                  <Button className="w-full rounded-lg p">Gửi tin nhắn</Button>
                </div>
              </div>
              <div
                className="shadow-lg mt-4 rounded-md flex justify-between p-4 mb-5 "
                onClick={showModal}
              >
                <span className="text-base font-medium">Vay mua nhà</span>
                <span className="text-base font-medium text-orange-400">
                  7triệu/tháng
                </span>
              </div>
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div className="p-5">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </div>
            </Modal>
          </Col>
        </Row>
        <div>
          <h1 className="mt-8 w-full text-xl font-bold">
            Bất động sản tương tự
          </h1>

          <ProjectFloatingCarosel title="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailProduct;
