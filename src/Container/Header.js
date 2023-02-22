import React, { useState } from "react";
import { Button, Col, Drawer, Dropdown, Menu, Row, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import logo from "../ultil/Images/logo.jpg";
import { MdMenu } from "react-icons/md";
import home from "../ultil/Images/icons8-home-64.png";
const menu = (
  <Menu
    style={{ width: "200px" }}
    items={[
      {
        key: "1",
        label: <p>Quản lý đăng tin</p>,
      },
      {
        key: "2",
        label: <p>Quản lý đăng tin</p>,
      },
      {
        key: "3",
        label: <p>Quản lý đăng tin</p>,
      },
      {
        key: "4",
        label: <p>Quản lý đăng tin</p>,
      },
      {
        key: "5",
        label: (
          <p
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Đăng xuất
          </p>
        ),
      },
    ]}
  />
);
function Header(props) {
  const loginResult = useSelector((state) => state.login.loginResult);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalRegister = () => {
    setIsModalRegisterOpen(true);
  };
  function Uppercase(string) {
    if (string) {
      return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
  }

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-16 px-4 flex items-center shadow-md fixed top-0 z-50 bg-white w-full">
      <Row className="w-full flex items-center h-12">
        <Col xs={12} md={4}>
          <Link to={"/"} className="flex md:justify-end w-full">
            <img src={logo} alt="" className="h-12 " />
          </Link>
        </Col>
        <Col xs={12} md={20}>
          <div className="flex h-12 items-center w-full  justify-end xl:pr-56">
            <div className="hidden lg:block">
              <Button style={{ fontWeight: "500" }} type="text">
                Tìm mua
              </Button>
              <Button style={{ fontWeight: "500" }} type="text">
                Tìm thuê
              </Button>
              <Button style={{ fontWeight: "500" }} type="text">
                Giá nhà đất
              </Button>
              <Button style={{ fontWeight: "500" }} type="text">
                Hỏi đáp
              </Button>
              <Button style={{ fontWeight: "500" }} type="text">
                Môi giới
              </Button>
              <Button style={{ fontWeight: "500" }} type="text">
                Dự án
              </Button>
              {loginResult ? (
                <Dropdown overlay={menu} className="mx-4">
                  <Space className="cursor-pointer text-xl ">
                    {`${Uppercase(loginResult)} `}
                    <DownOutlined className="text-sm mb-2" />
                  </Space>
                </Dropdown>
              ) : (
                <>
                  <Button
                    style={{ fontWeight: "600" }}
                    type="text"
                    onClick={showModal}
                  >
                    Đăng nhập{" "}
                  </Button>
                  <Button
                    style={{ fontWeight: "600" }}
                    type="text"
                    onClick={showModalRegister}
                  >
                    Đăng Ký{" "}
                  </Button>
                </>
              )}

              <Link to={"/dang-tin"}>
                <Button
                  className="ml-3 "
                  style={{ fontWeight: "600", borderRadius: "8px" }}
                >
                  Đăng tin{" "}
                </Button>
              </Link>
            </div>

            {/* Mobile show */}
            <div className="lg:hidden">
              <Button onClick={showDrawer}>
                <MdMenu size={20} />
              </Button>
              <Drawer placement="right" onClose={onClose} open={open}>
                <div className="flex justify-between">
                  <Button className="w-full mr-1 " style={{ borderRadius: 6 }}>
                    Đăng ký
                  </Button>
                  <Link to="/login">
                    <Button
                      className="w-full ml-1 "
                      type="primary "
                      style={{ borderRadius: 6 }}
                      onClick={onClose}
                    >
                      Đăng nhập
                    </Button>
                  </Link>
                </div>
                <div className="mt-8">
                  <Row gutter={[16, 16]}>
                    <Col xs={12}>
                      <div className="shadow-lg h-20 p-3 rounded-lg">
                        <img src={home} alt="" className="w-5 h-5" />
                        <h1 className="pt-4 font-bold text-base">Tìm mua</h1>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="shadow-lg h-20 p-3 rounded-lg">
                        <img src={home} alt="" className="w-5 h-5" />
                        <h1 className="pt-4 font-bold text-base">Tìm thuê</h1>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="shadow-lg h-20 p-3 rounded-lg">
                        <img src={home} alt="" className="w-5 h-5" />
                        <h1 className="pt-4 font-bold text-base">
                          Giá nhà đất
                        </h1>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="shadow-lg h-20 p-3 rounded-lg">
                        <img src={home} alt="" className="w-5 h-5" />
                        <h1 className="pt-4 font-bold text-base">Hỏi đáp </h1>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="shadow-lg h-20 p-3 rounded-lg">
                        <img src={home} alt="" className="w-5 h-5" />
                        <h1 className="pt-4 font-bold text-base">Môi giới</h1>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="shadow-lg h-20 p-3 rounded-lg">
                        <img src={home} alt="" className="w-5 h-5" />
                        <h1 className="pt-4 font-bold text-base">Dự án</h1>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Drawer>
            </div>
            {/* end mobile show */}
          </div>

          <div>
            <ModalLogin
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
          <div>
            <ModalRegister
              isModalRegisterOpen={isModalRegisterOpen}
              setIsModalRegisterOpen={setIsModalRegisterOpen}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
