import React, { useState } from "react";
import {
  Button,
  Col,
  Drawer,
  Dropdown,
  Menu,
  Row,
  Space,
  Divider,
  message,
  Avatar,
  List,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import logo from "../ultil/Images/logo.jpg";
import { MdMenu } from "react-icons/md";
import home from "../ultil/Images/icons8-home-64.png";
import {
  MdFormatListBulleted,
  MdOutlinePersonOutline,
  MdLockOutline,
  MdLogout,
} from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { ChatAction } from "../Store/Actions/ChatAction";
import user from "../ultil/Images/user.jpg";
import InfiniteScroll from "react-infinite-scroll-component";
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
function Uppercase(string) {
  if (string) {
    return string.toLowerCase().replace(/(^|\s)\S/g, function (l) {
      return l.toUpperCase();
    });
  }
}
function Header(props) {
  const loginResult = useSelector((state) => state.login.loginResult);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const chat = useSelector((state) => state.chat.showChat);
  const items = [
    {
      label: (
        <div
          id="scrollableDiv"
          style={{
            position: "fixed",
            right: 50,
            width: 400,
            padding: "0 16px",
            background: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <InfiniteScroll
            dataLength={chat?.length}
            hasMore={chat?.length < 50}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={chat}
              renderItem={(item) => (
                <List.Item key={item}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatarImage || user} size={64} />}
                    title={
                      <a href="https://ant.design">
                        {Uppercase(item.fullName)}
                      </a>
                    }
                    description={item.messageList[0].content}
                  />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      ),
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const menu = (
    <Menu
      style={{ width: "240px", borderRadius: "8px" }}
      items={[
        {
          key: "1",
          label: (
            <p
              style={{ marginBottom: 0, padding: "4px 0" }}
              className="flex items-center "
            >
              <MdFormatListBulleted size={20} className=" mr-2" />
              Quản lý đăng tin
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <p
              style={{ marginBottom: 0, padding: "4px 0" }}
              className="flex items-center"
            >
              <RiAdvertisementLine size={20} className=" mr-2" />
              Quản lý tin tài trợ
            </p>
          ),
        },
        {
          key: "3",
          label: (
            <p
              style={{ marginBottom: 0, padding: "4px 0" }}
              className="flex items-center"
            >
              <MdOutlinePersonOutline size={20} className=" mr-2" />
              Thay đổi thông tin cá nhân
            </p>
          ),
        },
        {
          key: "changePass",
          label: (
            <p
              style={{ marginBottom: 0, padding: "4px 0" }}
              className="flex items-center"
            >
              <MdLockOutline size={20} className=" mr-2" />
              Thay đổi mật khẩu
            </p>
          ),
        },
        {
          key: "5",
          label: (
            <p
              style={{ marginBottom: 0, padding: "4px 0" }}
              className="flex items-center"
            >
              <TfiWallet size={20} className=" mr-2" />
              Nạp tiền
            </p>
          ),
        },
        {
          label: <Divider style={{ margin: 0, padding: 0 }} />,
        },
        {
          key: "logout",
          label: (
            <p
              style={{ marginBottom: 0, padding: "4px 0" }}
              className="flex items-center"
            >
              <MdLogout size={20} className=" mr-2" />
              Đăng xuất
            </p>
          ),
        },
      ]}
      onClick={(e) => {
        if (e.key === "logout") {
          localStorage.clear();
          window.location.reload();
        } else if (e.key === "changePass") {
          navigate("/change-password");
        }
      }}
    />
  );
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalRegister = () => {
    setIsModalRegisterOpen(true);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleChat = () => {
    dispatch(ChatAction());
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
                  <Space className="cursor-pointer text-lg ">
                    <div className="logo flex items-center">
                      <div className="bg-[#FFECEB] h-9 w-9 rounded-full flex justify-center items-center text-lg font-semibold uppercase text-[#74150F]">
                        {loginResult.slice(0, 1)}
                      </div>
                      <div className="pl-2 ">
                        <h4 className="m-0">{`${Uppercase(loginResult)} `}</h4>
                      </div>
                    </div>
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
              <Dropdown menu={menuProps} trigger={["click"]} className="ml-3 ">
                <Button
                  style={{ fontWeight: "600", borderRadius: "8px" }}
                  onClick={handleChat}
                >
                  <Space>Chat</Space>
                </Button>
              </Dropdown>
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
