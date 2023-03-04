import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "antd";
import axios from "axios";
const { Meta } = Card;

function ProjectFloatingCarosel({ title }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/posts/filter?page=7`)
      .then((res) => {
        setData(res.data.result);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={12}
        slidesPerView={2}
        style={{ padding: "12px 0px" }}
        breakpoints={{
          460: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
        }}
      >
        {data.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <Card
                hoverable
                style={{ borderRadius: "12px", padding: "0px" }}
                className="h-64 md:h-72"
                cover={
                  <img
                    src={e.image}
                    alt=""
                    className="h-36 md:h-44"
                    style={{ borderRadius: "8px 8px 0px 0px" }}
                    loading="lazy"
                  />
                }
              >
                <Meta title={e.name} />
                <h1 className="text-[#0499a8] font-semibold text-lg mb-0 mt-3">
                  {e.compactNumber}
                </h1>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProjectFloatingCarosel;
