import React, { FC, useEffect } from "react";
import { Row, Col, Form, Input, Checkbox, Button, Spin } from "antd";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../Store/Actions/LoginAction";
import { useNavigate } from "react-router-dom";
const Login: FC = () => {
  const isLoading: any = useSelector((state: any) => state.login.loading);
  const loginResult = useSelector((state: any) => state.login.loginResult);
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const onFinish = (values: any) => {
    dispatch(LoginAction(values));
  };
  useEffect(() => {
    if (loginResult) {
      navigate("/");
    }
  }, [loginResult, navigate]);
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.container}>
      <div className={styles.bodyLogin}>
        <Row>
          <Col xs="24">
            <div className={styles.formLogin}>
              <h1 className={styles.signTxt}>Sign in</h1>
              <p className={styles.loginTitle}>
                Sign in and start managing your candidates!
              </p>
              <Form
                name="basic"
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={styles.form}
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
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  className="rounded-2xl"
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
                    style={{ borderRadius: "10px" }}
                  />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox style={{ color: "#fff" }}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading && <Spin />}
                    className={styles.submit}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.footer}>
        <Row>
          <Col xs={24}>
            <div className={styles.vector}>
              <img
                src="./Vector.png"
                alt=""
                style={{
                  width: "100%",
                  height: "10vh",
                  position: "absolute",
                  bottom: "0px",
                }}
              />
              <img
                src="./Vector (1).png"
                alt=""
                style={{ width: "100%", height: "10vh" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
