import { Button, Col, Form, Input, Row, notification } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChangePassword() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const onFinish = (values) => {
    if (values.newPass !== values.reNewPass) {
      notification.warning({
        message: "Mật khẩu không khớp",
        placement: "bottomRight",
      });
    } else {
      let data = JSON.stringify({
        password: values.oldPass,
        newPassword: values.newPass,
        reTypePassword: values.reNewPass,
      });
      let config = {
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      axios
        .put(
          `${process.env.REACT_APP_URL}/api/v1/users/change-password`,
          data,
          config
        )
        .then((res) => {
          notification.success({
            message: res.data.responseCode,

            placement: "bottomRight",
          });
        })
        .catch((err) => {
          notification.error({
            message: err.message,
            placement: "bottomRight",
          });
        });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {}, []);
  return (
    <div className="pt-16 ">
      <Row>
        <Col xs={24} md={8}></Col>
        <Col xs={24} md={8}>
          <div>
            <div>
              <h1 className="text-2xl font-medium text-center mt-3">
                Thay đổi mật khẩu
              </h1>
              <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Mật khẩu cũ"
                  name="oldPass"
                  rules={[
                    { required: true, message: "Bạn cần nhập trường này" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu mới"
                  name="newPass"
                  rules={[
                    { required: true, message: "Bạn cần nhập trường này" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Nhắc lại mật khẩu"
                  name="reNewPass"
                  rules={[
                    { required: true, message: "Bạn cần nhập trường này" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item className="flex justify-end">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ borderRadius: 6, marginTop: 10 }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8}></Col>
      </Row>
    </div>
  );
}
