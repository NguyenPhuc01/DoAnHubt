import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import Footer from "./Footer";
const { Header, Sider, Content } = Layout;
export default function LayoutPage({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
  return (
    <div className="h-full ">
      <Layout
        style={{
          minHeight: "90vh",
        }}
      >
        <div className="hidden lg:block ">
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            className=" overflow-auto"
            width={280}
            style={{
              minHeight: "90vh",
            }}
          >
            <div className="logo flex p-4 items-center">
              <div className="bg-[#FFECEB] h-14 w-14 rounded-full flex justify-center items-center text-2xl font-semibold uppercase text-[#74150F]">
                p
              </div>
              <div
                className="pl-3 "
                style={{ display: collapsed ? "none" : "" }}
              >
                <h1 className=" text-lg m-0">Nguyyễn Văn Phúc</h1>
                <span>0 Điểm</span>
              </div>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} />
          </Sider>
        </div>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
                style: { marginLeft: 20 },
              }
            )}
          </Header>
          <Content
            className="bg-[#F9F9F9] lg:p-6"
            style={{
              margin: "24px 16px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
