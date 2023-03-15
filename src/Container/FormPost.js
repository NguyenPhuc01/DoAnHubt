import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Result,
  Modal,
  Spin,
} from "antd";
import axios from "axios";
import Dragger from "antd/lib/upload/Dragger";
const { Option } = Select;

export default function FormPost() {
  const [active, setActive] = useState(false);
  const [options, setOptions] = useState([]);
  const [form] = Form.useForm();
  const [getAllCity, setGetAllCity] = useState([]);
  const [getDistrict, setGetDistrict] = useState([]);
  const [getWards, setGetWards] = useState([]);
  const [typePost, setTypePost] = useState("RENT");
  const [token, setToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultPost, setResultPost] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    let data = new FormData();
    data.append("name", values.title);
    data.append("addressDetails", values.location);
    data.append("province", values.city);
    data.append("district", values.District);
    data.append("village", values.Wards);
    data.append("useableArea", values.acreage);
    data.append("landArea", "20");
    data.append("price", values.price);
    data.append("area", "2");
    data.append("bedroom", values.bedroom);
    data.append("description", values.description);
    data.append("facade", values.Facade);
    data.append("direction", values.DirectionHouse);
    data.append("juridical", values.legal);
    data.append("gateway", values.way);
    data.append("numberFloor", values.floors);
    data.append("toilet", values.toilet);
    data.append("furniture", values.interior);
    data.append("typePost", typePost);
    data.append("image", values.image.file);
    data.append("imagesDetails", values.image.fileList[0].originFileObj);
    data.append("typeRealEstate", values.typeOfRealEstate);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://trogiare-production.up.railway.app/api/v1/posts",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setResultPost(true);
        setIsModalOpen(true);
     
      })
      .catch(function (error) {
        setIsModalOpen(true);
     
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onGenderChange = (value) => {
    console.log("🚀 ~ file: Post.js:16 ~ onGenderChange ~ value:", value);
  };
  const generateOptions = (locationData) => {
    const options = locationData.map((e) => {
      return { value: e.Label, label: e.Label };
    });
    setOptions(options);
  };
  const onSearch = (value) => {
    if (value) {
      axios
        .get(
          `https://locationsuggestion.batdongsan.com.vn/api/Search/Index?text=${value}&userId=2134846`
        )
        .then((res) => {
          generateOptions(res.data.Result.LocationResults);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onChange = (value) => {
    let result = value.split(",");
    form.setFieldsValue({
      city: result[2],
      District: result[1],
      Wards: result[0],
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/provinces`)
      .then((res) => {
        setGetAllCity(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangeCity = (value, option) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/api/v1/provinces/get-districts-by-provice-id/${option.key}`
      )
      .then((res) => {
        setGetDistrict(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangeDistrict = (value, option) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/api/v1/provinces/get-wards-by-districts-id/${option.key}`
      )
      .then((res) => {
        setGetWards(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filter = (inputValue, path) => {
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };
  const onChangeImage = (file) => {
    console.log("🚀 ~ file: FormPost.js:96 ~ onChangeImage ~ file:", file);
  };
  const dropdownRender = (menus) => <div>{menus}</div>;
  return (
    <div className="bg-[#fff] shadow-lg rounded-md p-6">
      <h1 className="text-2xl font-semibold">Thông tin cơ bản</h1>
      <div className="flex my-5">
        <Button
          className="w-full"
          type={active === false ? "primary" : ""}
          onClick={() => {
            setTypePost("SELL_HOUSE");
            setActive(false);
          }}
        >
          Bán
        </Button>
        <Button
          className="w-full"
          type={active === true ? "primary" : ""}
          onClick={() => {
            setActive(true);
            setTypePost("RENT");
          }}
        >
          Cho Thuê
        </Button>
      </div>
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
            <Option value="HOUSE">Nhà</Option>
            <Option value="VILLA">Biệt thự</Option>
            <Option value="CAPARTMENT">Căn hộ</Option>
            <Option value="MOTEL_ROOM">Nhà trọ</Option>
            <Option value="OFFICE">Văn phòng</Option>
            <Option value="STREET_HOUSE">Nhà mặt phố</Option>
            <Option value="COMMERCIAL_TOWNHOUSES">Nhà phố thương mại</Option>
            <Option value="GROUND">Mặt bằng</Option>
            <Option value="Other">Khác</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Chọn nhanh địa chỉ" name="location">
          <Select
            dropdownRender={dropdownRender}
            options={options}
            onChange={onChange}
            placeholder="Please select"
            allowClear
            showSearch={{
              filter,
              matchInputWidth: true,
            }}
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
            <Select placeholder="Chọn" allowClear onChange={onChangeCity}>
              {getAllCity.map((e, i) => {
                return (
                  <Option key={e.code} value={e.fullName}>
                    {e.fullName}
                  </Option>
                );
              })}
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
            <Select placeholder="Chọn" allowClear onChange={onChangeDistrict}>
              {getDistrict.map((e) => {
                return (
                  <Option key={e.code} value={e.fullName}>
                    {e.fullName}
                  </Option>
                );
              })}
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
              {getWards.map((e) => {
                return (
                  <Option key={e.code} value={e.fullName}>
                    {e.fullName}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            className="w-full "
            style={{ paddingLeft: 8 }}
            label="Đường, phố"
            name="Street"
          >
            <Input placeholder="Nhập tên đường, phố " />
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
          <Input placeholder="bạn có thể bổ sung hẻm,ngách,ngõ..." allowClear />
        </Form.Item>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Thông tin bài viết</h1>

          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Cần nhập thông tin này!",
              },
            ]}
          >
            <Input.TextArea
              showCount={true}
              placeholder="VD: Bán nhà riêng 50m2 tại cầu giấy"
              maxLength={99}
              allowClear
            />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Cần nhập thông tin này!",
              },
            ]}
          >
            <Input.TextArea
              rows={8}
              maxLength={3000}
              showCount={true}
              allowClear
              placeholder="Nhập mô tả chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi, gần công viên, gần trường học ...  "
            />
          </Form.Item>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Thông tin bất động sản</h1>
          <Form.Item
            label="Diện tích"
            name="acreage"
            rules={[
              {
                required: true,
                message: "Cần nhập thông tin này!",
              },
            ]}
          >
            <Input
              placeholder="Nhập diện tích , VD: 80"
              type="Number"
              value={Number}
              suffix="m2"
              allowClear
            />
          </Form.Item>

          <div>
            <Form.Item
              label="Mức giá"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Cần nhập thông tin này!",
                },
              ]}
            >
              <Input
                placeholder="Nhập giá , VD: 8000000"
                type="Number"
                value={Number}
                suffix="VND"
                allowClear
              />
            </Form.Item>
            <Form.Item label="Giấy tờ pháp lý" name="legal">
              <Radio.Group defaultValue="null" buttonStyle="solid">
                <Radio.Button
                  value="Sổ đỏ/ Sổ hồng"
                  style={{ borderRadius: 20, marginLeft: 10 }}
                >
                  Sổ đỏ/ Sổ hồng
                </Radio.Button>
                <Radio.Button
                  value="Hợp đồng mua bán"
                  style={{ borderRadius: 20, marginLeft: 10 }}
                >
                  Hợp đồng mua bán
                </Radio.Button>
                <Radio.Button
                  value="Đang chờ sổ"
                  style={{ borderRadius: 20, marginLeft: 10 }}
                >
                  Đang chờ sổ
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Nội thất" name="interior">
              <Radio.Group defaultValue="null" buttonStyle="solid">
                <Radio.Button
                  value=" Đầy đủ"
                  style={{ borderRadius: 20, marginLeft: 10 }}
                >
                  Đầy đủ
                </Radio.Button>
                <Radio.Button
                  value="Cơ bản"
                  style={{ borderRadius: 20, marginLeft: 10 }}
                >
                  Cơ bản
                </Radio.Button>
                <Radio.Button
                  value="Không nội thất"
                  style={{ borderRadius: 20, marginLeft: 10 }}
                >
                  Không nội thất
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Divider />
            <div className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-semibold">Số phòng ngủ</span>
                <Form.Item name="bedroom" style={{ margin: 0 }}>
                  <InputNumber
                    min={0}
                    defaultValue={0}
                    style={{ borderRadius: 4 }}
                  />
                </Form.Item>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-semibold">
                  Số phòng tắm, vệ sinh
                </span>
                <Form.Item name="toilet" style={{ margin: 0 }}>
                  <InputNumber
                    min={0}
                    defaultValue={0}
                    style={{ borderRadius: 4 }}
                  />
                </Form.Item>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-semibold">Số tầng</span>
                <Form.Item name="floors" style={{ margin: 0 }}>
                  <InputNumber
                    min={0}
                    defaultValue={0}
                    style={{ borderRadius: 4 }}
                  />
                </Form.Item>
              </div>
            </div>
            <Divider
              orientation="left"
              plain
              style={{ color: "gray", fontSize: 12 }}
            >
              Mô tả bổ sung
            </Divider>
          </div>
          <Form.Item label="Hướng nhà" name="DirectionHouse">
            <Select placeholder="Chọn" allowClear>
              <Option value="EAST">Đông</Option>
              <Option value="WEST">Tây</Option>
              <Option value="SOUTH">Nam</Option>
              <Option value="NORTH">Bắc</Option>
              <Option value="NORTHEAST">Đông Bắc</Option>
              <Option value="NORTHWEST">Tấy Bắc</Option>
              <Option value="SOUTHEAST">Đông Nam</Option>
              <Option value="SOUTHWEST">Tây Nam</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Hướng ban công" name="BalconyDirection">
            <Select placeholder="Chọn" allowClear>
              <Option value="Đông">Đông</Option>
              <Option value="Tây">Tây</Option>
              <Option value="Nam">Nam</Option>
              <Option value="Bắc">Bắc</Option>
              <Option value="Đông Bắc">Đông Bắc</Option>
              <Option value="Tấy Bắc">Tấy Bắc</Option>
              <Option value="Đông Nam">Đông Nam</Option>
              <Option value="Tây Nam">Tây Nam</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Đường vào" name="way">
            <Input placeholder="Nhập số" type="number" suffix="m" allowClear />
          </Form.Item>
          <Form.Item label="Mặt tiền" name="Facade">
            <Input placeholder="Nhập số" type="number" suffix="m" allowClear />
          </Form.Item>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Hình ảnh</h1>
          <ul>
            <li>• Hãy dùng ảnh thật, không trùng, không chèn số điện thoại</li>
            <li>• Mỗi ảnh kích thước tối thiểu 100x100 px, tối đa 15 MB</li>
            <li>
              • Số lượng ảnh tối đa tuỳ theo loại tin chọn ở bước tiếp theo
            </li>
          </ul>
          <div className=" py-5">
            <Form.Item name="image">
              <Dragger
                name="file"
                accept=".png,.jpg,.jpeg"
                multiple
                beforeUpload={() => {
                  return false;
                }}
                listType="picture"
                // onChange={onChangeImage}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Bấm đển chọn ảnh cần tải lên</p>
                <p className="ant-upload-hint">Hoặc kéo thả ảnh vào đây</p>
              </Dragger>
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <div className="flex justify-between ">
            <Button style={{ borderRadius: 8 }} size="large"  >
              Xem trước
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              
              style={{ borderRadius: 8 }}
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result
          status={resultPost === true ? "success" : "error"}
          title={
            resultPost === true ? "Đăng bài thành công" : "Đăng bài thất bại"
          }
        ></Result>
      </Modal>
    </div>
  );
}
