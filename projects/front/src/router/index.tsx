import { Navigate, Route, Routes } from "react-router-dom";
import { sitemap } from "./siteMap";
import { Home } from "../pages/Home";
import { ResentPassword } from "../pages/ResetPassword.tsx";
import { LoginPage } from "../pages/Login/index.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Navigate to={sitemap.auth.login} />} />
      <Route path={sitemap.auth.login} element={<LoginPage/>}/>
      <Route path={sitemap.auth.reset_password} element={<ResentPassword/>}/>
      <Route path={sitemap.home} element={<Home/>} />
    </Routes>
  );
};
