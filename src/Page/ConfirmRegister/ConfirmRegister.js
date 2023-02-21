import { Button, Col, Form, Input, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import check from "../../ultil/Images/check.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function ConfirmRegister(props) {
  const { token } = useParams();
  const [resulToken, setResultToken] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);

  console.log(
    "🚀 ~ file: ConfirmRegister.js:9 ~ ConfirmRegister ~ resulToken",
    resulToken
  );
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_URL}/api/v1/reg/confirm`, {
        token,
      })
      .then(function (response) {
        console.log(response);
        setIsLoadding(true);
      })
      .catch(function (error) {
        console.log(error);
        setResultToken(error.code);
        setIsLoadding(true);
      });
  }, [token]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row>
        <Col xs={24} md={8}></Col>
        <Col xs={24} md={8}>
          {isLoadding === false ? (
            <div className="h-[80vh] w-full flex justify-center items-center  ">
              <Spin size="large" />
            </div>
          ) : (
            <div>
              {resulToken ? (
                <div className="h-[90vh] text-center w-full flex flex-col justify-center items-center">
                  {/* <h1>vui lòng nhập lại email của bạn để lấy lại mã xác thực</h1> */}
                  <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{ width: "100%" }}
                  >
                    <Form.Item
                      label="Vui lòng nhập lại email của bạn để lấy lại mã xác thực"
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Button
                      type="ghost"
                      size="large"
                      className="mt-3"
                      htmlType="submit"
                      style={{
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              ) : (
                <div className="h-[90vh] text-center w-full flex flex-col justify-center items-center">
                  <h1 className="font-bold text-6xl">Congratulations!</h1>
                  <span className="text-3xl">
                    your email has already been confirmed. You can now login to
                    the application.
                  </span>
                  <img src={check} alt="" className="w-14 h-14 mt-8" />
                  <Link to={"/"}>
                    <Button
                      type="ghost"
                      size="large"
                      className="mt-8"
                      htmlType="submit"
                      style={{
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Quay về trang chủ
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </Col>
        <Col xs={24} md={8}></Col>
      </Row>
    </div>
  );
}

export default ConfirmRegister;
