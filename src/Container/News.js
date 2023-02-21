import React from "react";
import { Col, List, Row } from "antd";
import { Link } from "react-router-dom";
const data = [
  " Khu Du Lịch Thủy Châu – Bỏ Túi Kinh Nghiệm Dã Ngoại Từ A – Z",
  " Núi Đá Voi địa điểm phải chinh phục và check-in ở Đắk Lắk",
  " Rừng nam Cát Tiên – Địa điểm du lịch tuyệt vời để cắm trại và khám phá",
  " Bí quyết thuê chung cư quận 5 chất lượng với mức giá tốt",
  " Dự toán là gì? Hướng dẫn cách lập dự toán cho người mới bắt đầu",
  "  Nhà HXH nghĩa là gì? Mua nhà HXH như thế nào sinh lời nhất?",
];
function News(props) {
  return (
    <div>
      <Row>
        <h1 className="mt-8 w-full text-xl font-bold">Tin Tức bất động sản</h1>
        <Col xs={24} lg={16}>
          <div className="min-h-[270px] w-full">
            <div className="flex bg-[#f0f2f5] rounded-xl h-full">
              <div className="w-1/2">
                <img
                  src="https://cloud.mogi.vn/news/thumb-detail/2022/07/25/363/829854a1b7d34be5a6457ed0891e6974.jpg"
                  alt=""
                  className="w-full rounded-l-lg h-full"
                />
              </div>

              <div className="w-1/2 p-4 ">
                <h1 className="font-semibold text-lg title-news">
                  Cẩm Nang Du Lịch Pù Luông Thanh Hoá – Khám Phá Thiên Nhiên Tây
                  Bắc
                </h1>
                <span className="text-news">
                  Pù Luông Thanh Hóa là một trong những địa điểm nổi tiếng được
                  rất nhiều khách du lịch tìm hiểu. Vậy Pù Luông ở đâu và du
                  lịch Pù Luông có những điểm hấp dẫn gì nổi bật nhất? Hãy cùng
                  khám phá khu bảo tồn thiên nhiên Pù Luông qua những chia sẻ
                  dưới
                </span>
              </div>
            </div>
            <div className="h-[70px] flex w-full pt-4">
              <div className="w-1/2 flex">
                <img
                  src="https://cloud.mogi.vn/news/thumb-detail/2022/07/25/366/6f3302b81a8f42ad88c6d52c8c848bc0.jpg"
                  alt=""
                  className=" h-full rounded-lg"
                />

                <h3 className="px-3 text-base text">
                  DHT là đất gì? Có được mua bán đất DHT hay không?
                </h3>
              </div>
              <div className="w-1/2 flex px-4">
                <img
                  src="https://cloud.mogi.vn/news/thumb-detail/2022/07/25/368/07d80f97341547aab43224496380d582.jpg"
                  alt=""
                  className=" h-full rounded-lg"
                />
                <h3 className="pl-3 text-base text">
                  Tổng Hợp Các Địa Điểm Du Lịch Đà Lạt Hot Nhất Hiện Nay
                </h3>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <div className="lg:ml-6 mt-6 lg:mt-0">
            <List
              className="font-semibold"
              style={{ fontSize: "16px" }}
              footer={
                <Link to={"/"} className="text-[#0499a8]">
                  Xem tất cả
                </Link>
              }
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default News;
