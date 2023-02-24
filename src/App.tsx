import React, { lazy, Suspense } from "react";
import "./App.less";
import Login from "./Page/Login/Login";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Header from "./Container/Header";
import LoadingComponent from "./Container/LoadingComponent";
import Post from "./Page/Post/Post";
import ChangePassword from "./Page/ChangePassword/ChangePassword";
const Home = lazy(() => import("./Page/Home/Home"));
const ConfirmRegister = lazy(
  () => import("./Page/ConfirmRegister/ConfirmRegister")
);
const Footer = lazy(() => import("./Container/Footer"));
const DetailProduct = lazy(() => import("./Page/DetailProduct/DetailProduct"));
const Register = lazy(() => import("./Page/Register/Register"));
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dang-tin" element={<Post />} />
            <Route path="/confirm/:token" element={<ConfirmRegister />} />
            <Route path="/detail/:id" element={<DetailProduct />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
