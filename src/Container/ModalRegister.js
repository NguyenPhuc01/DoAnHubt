import { Button, Form, Input, Modal, Spin, notification } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Store/Actions/RegisterAction";

function ModalRegister({ isModalRegisterOpen, setIsModalRegisterOpen }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.register.status);
  const isLoading = useSelector((state) => state.register.loading);
  const err = useSelector((state) => state.register.err);
  const openNotification = (placement) => {
    notification.success({
      message: `Đăng ký ${status}. `,
      description:
        "Vui lòng truy cập vào email của bạn để xác thực tài khoản của bạn",
      placement,
    });
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setIsModalRegisterOpen(false);
      openNotification("bottomRight");
    } else if (err !== null) {
      const openNotification = (placement) => {
        notification.warning({
          message: err,
          placement,
        });
      };
      openNotification("bottomRight");
    }
  }, [status, err]);
  const onFinish = (values) => {
    if (values.password !== values.rePassword) {
      alert("Password and confirm password must match");
    } else {
      dispatch(register(values));
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = () => {
    setIsModalRegisterOpen(false);
  };
  const handleCancel = () => {
    setIsModalRegisterOpen(false);
  };
  return (
    <div>
      <div>
        <Modal
          open={isModalRegisterOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
        >
          <div className="h-[625px] flex ">
            <div className="w-80 bg-red-100 pl-8 ">
              <div className="h-full">
                <div className="h-[12%]">
                  <img
                    src="https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg"
                    alt=""
                    className="w-[160px]  pt-8"
                  />
                </div>
                <div className="h-[85%] flex flex-col ">
                  <img
                    src="
                      https://batdongsan.com.vn/sellernet/static/media/cover.800e56db.png"
                    alt=""
                    className="w-[312px] h-[344px]"
                  />
                  <div>
                    <h4 className="text-xl font-semibold ">Tìm nhà đất</h4>
                    <h4 className="text-xl font-semibold ">
                      Batdongsan.com.vn dẫn lối
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[480px] p-8">
              <div className="mt-6">
                <h5 className="font-semibold text-xl">Xin chào bạn</h5>
                <h3 className="font-semibold text-2xl mb-8">
                  Đăng nhập để tiếp tục
                </h3>
              </div>
              <div>
                <Form
                  name="basic"
                  wrapperCol={{ span: 24 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  // className={styles.form}
                >
                  <div className="flex mt-9 justify-between">
                    <Form.Item
                      name="firstName"
                      className="w-[48%]"
                      rules={[
                        {
                          required: true,
                          message: "Please input your FirstName!",
                        },
                      ]}
                    >
                      <Input
                        style={{
                          width: "-webkit-fill-available",
                          borderRadius: "8px",
                        }}
                        size="large"
                        placeholder="FirstName"
                      />
                    </Form.Item>

                    <Form.Item
                      name="lastName"
                      className="w-[48%]"
                      rules={[
                        {
                          required: true,
                          message: "Please input your LastName!",
                        },
                      ]}
                    >
                      <Input
                        style={{
                          width: "-webkit-fill-available",
                          borderRadius: "8px",
                        }}
                        size="large"
                        placeholder="LastName"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      style={{
                        width: "-webkit-fill-available",
                        borderRadius: "8px",
                      }}
                      size="large"
                      placeholder="Email"
                    />
                  </Form.Item>

                  <Form.Item
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                    style={{ marginTop: "25px" }}
                  >
                    <Input
                      size="large"
                      style={{
                        width: "-webkit-fill-available",
                        borderRadius: "8px",
                      }}
                      placeholder="UserName"
                    />
                  </Form.Item>
                  <Form.Item
                    name="sdt"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone number!",
                      },
                    ]}
                    style={{ marginTop: "25px" }}
                  >
                    <Input
                      style={{
                        width: "-webkit-fill-available",
                        borderRadius: "8px",
                      }}
                      size="large"
                      placeholder="Phone Number"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    style={{ marginTop: "25px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      size="large"
                      style={{ borderRadius: "8px" }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="rePassword"
                    style={{ marginTop: "25px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please input your rePassword!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="rePassword"
                      size="large"
                      style={{ borderRadius: "8px" }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full"
                      loading={isLoading && <Spin />}
                      style={{
                        backgroundColor: "#000000",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      size="large"
                    >
                      Create Acount
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ModalRegister;
