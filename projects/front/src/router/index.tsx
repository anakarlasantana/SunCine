import { Navigate, Route, Routes } from "react-router-dom";
import { sitemap } from "./siteMap";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ResentPassword } from "../pages/ResetPassword.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Navigate to={sitemap.auth.login} />} />
      <Route path={sitemap.auth.login} element={<Login/>}/>
      <Route path={sitemap.auth.reset_password} element={<ResentPassword/>}/>
      <Route path={sitemap.home} element={<Home/>} />
    </Routes>
  );
};
