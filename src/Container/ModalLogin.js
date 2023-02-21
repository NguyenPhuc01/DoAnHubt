import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
  Spin,
  notification,
} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../Store/Actions/LoginAction";

function ModalLogin({ isModalOpen, setIsModalOpen }) {
  const isLoading = useSelector((state) => state.login.loading);
  const status = useSelector((state) => state.login.status);
  const err = useSelector((state) => state.login.err);
  // const loginResult = useSelector((state) => state.login.loginResult);
  const openNotification = (placement) => {
    notification.success({
      message: status,
      placement,
    });
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setIsModalOpen(false);

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
  }, [status, err, setIsModalOpen]);
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    dispatch(LoginAction(values));
  };

  const onFinishFailed = (errorInfo) => {};
  return (
    <div>
      <Modal
        open={isModalOpen}
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
            <div className="mt-12">
              <h5 className="font-semibold text-xl">Xin chào bạn</h5>
              <h3 className="font-semibold text-2xl mb-8">
                Đăng nhập để tiếp tục
              </h3>
            </div>
            <div>
              <Form
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  className=""
                >
                  <Input
                    placeholder="userName"
                    size="large"
                    style={{ borderRadius: "10px", padding: "12px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
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
                    style={{ borderRadius: "10px", padding: "12px" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-full"
                    loading={isLoading && <Spin />}
                    style={{
                      borderRadius: "8px",
                      background: "rgb(224, 60, 49)",
                      border: "none",
                      height: "48px",
                    }}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <div className="flex justify-between items-center ">
                  <div>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      style={{ margin: "0px" }}
                    >
                      <Checkbox>Nhớ tài khoản</Checkbox>
                    </Form.Item>
                  </div>
                  <div>
                    <button className="text-red-700 text-md hover:text-red-500">
                      Quên mật khẩu?
                    </button>
                  </div>
                </div>
              </Form>

              <Divider>Hoặc</Divider>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalLogin;
