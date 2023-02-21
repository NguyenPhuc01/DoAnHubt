import React, { useEffect } from "react";
import { Row, Col, Form, Input, Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Store/Actions/RegisterAction";
import { useNavigate } from "react-router-dom";
function Register() {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const isLoading: any = useSelector((state: any) => state.register.loading);
  const status: any = useSelector((state: any) => state.register.status);
  console.log("🚀 ~ file: Register.tsx:11 ~ Register ~ status", status);
  const onFinish = (values: any) => {
    if (values.password !== values.rePassword) {
      alert("Password and confirm password must match");
    } else {
      dispatch(register(values));
    }
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      navigate("/login");
    }
  }, [status, navigate]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row className="min-h-screen">
        <Col xs={0} md={0} lg={14}>
          <img
            src="./vinhomes-ocean-park-1.jpg"
            alt=""
            className="w-full h-full"
          />
        </Col>
        <Col xs={24} md={24} lg={10}>
          <div className="flex justify-center items-center min-h-screen">
            <div>
              <h1 className="text-3xl ">Create an account</h1>
              <span className="font-light">
                Let’s get started with your 30 days free trial
              </span>
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
                    style={{
                      backgroundColor: "#000000",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    size="large"
                    loading={isLoading && <Spin />}
                  >
                    Create Acount
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
