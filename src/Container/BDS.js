import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../Store/Actions/ProductAction";
import { Link } from "react-router-dom";
function BDS(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  const getProduct = useSelector((state) => state.product.data);
  return (
    <div>
      <h1 className="mt-8 w-full text-xl font-bold">
        Bất động sản dành cho bạn
      </h1>
      <Row gutter={[16, 16]}>
        {getProduct &&
          getProduct.map((e, i) => {
            return (
              <Col xs={12} sm={12} key={e.id} md={6}>
                <Link to={`detail/${e.id}`}>
                  <Card
                    hoverable
                    style={{
                      borderRadius: "8px",
                    }}
                    className="h-64 md:h-80"
                    cover={
                      <img
                        src={e.image}
                        alt=""
                        style={{
                          borderRadius: "8px 8px 0px 0px",
                          width: "100%",
                        }}
                        loading="lazy"
                        className="object-cover h-40 md:h-48"
                      />
                    }
                  >
                    <h1 className="text">{e.name}</h1>
                    <h1 className="text-[#0499a8] font-semibold text-lg mb-0 mt-2">
                      {e.compactNumber}
                    </h1>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default BDS;
