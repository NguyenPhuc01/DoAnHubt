import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";
const { Search } = Input;
const { Option } = Select;
export default function FormPost() {
  const [active, setActive] = useState(false);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onGenderChange = (value) => {
    console.log("🚀 ~ file: Post.js:16 ~ onGenderChange ~ value:", value);
  };
  const onSearch = (value) => console.log("value search", value);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Thông tin cơ bản</h1>
      <div className="flex">
        <Button
          className="w-full"
          type={active === false ? "primary" : ""}
          onClick={() => setActive(false)}
        >
          Bán
        </Button>
        <Button
          className="w-full"
          type={active === true ? "primary" : ""}
          onClick={() => setActive(true)}
        >
          Cho Thuê
        </Button>
      </div>
      <div className="mt-5">
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Loại bất động sản"
            name="typeOfRealEstate"
            rules={[
              {
                required: true,
                message: "Cần nhập thông tin này!",
              },
            ]}
          >
            <Select
              placeholder="VD: Nhà riêng"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Loại bất động sản" name="location">
            <Search
              placeholder="Ví dụ: Vinhomes Golden Bason"
              allowClear
              enterButton="Tìm kiếm"
              size="large"
              onSearch={onSearch}
            />
          </Form.Item>

          <div className="flex ">
            <Form.Item
              className="w-full "
              label="Tỉnh, Thành phố"
              name="city"
              style={{ paddingRight: 8, marginBottom: 5 }}
              rules={[
                {
                  required: true,
                  message: "Cần nhập thông tin này!",
                },
              ]}
            >
              <Select placeholder="Chọn" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="w-full "
              style={{ paddingLeft: 8, marginBottom: 5 }}
              label="Quận, Huyện"
              name="District"
              rules={[
                {
                  required: true,
                  message: "Cần nhập thông tin này!",
                },
              ]}
            >
              <Select placeholder="Chọn" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="flex ">
            <Form.Item
              className="w-full "
              label="Phường, xã"
              name="Wards"
              style={{ paddingRight: 8 }}
              rules={[
                {
                  required: true,
                  message: "Cần nhập thông tin này!",
                },
              ]}
            >
              <Select placeholder="Chọn" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              className="w-full "
              style={{ paddingLeft: 8 }}
              label="Đường, phố"
              name="Street"
              rules={[
                {
                  required: true,
                  message: "Cần nhập thông tin này!",
                },
              ]}
            >
              <Select placeholder="Chọn" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item label="Dự án" name="project">
            <Select placeholder="Chọn" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Địa chỉ hiển thị trên tin đăng" name="locationShow">
            <Input placeholder="bạn có thể bổ sung hẻm,ngách,ngõ..." />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between ">
              <Button>Xem trước</Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
