import { Spin } from "antd";
import React from "react";

export default function LoadingComponent() {
  return (
    <div className="w-100 flex justify-center items-center h-[90vh]">
      <Spin size="large" />
    </div>
  );
}
