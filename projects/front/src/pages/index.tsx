import { Typography } from "@mui/material";
import AuthPageContainer from "../container/AuthPageContainer";
import bannerOne from "../assets/banner1.svg";
import BannerContainer from "../container/BannerContainer";

const Login = () => {
  return (
    <BannerContainer banner={bannerOne}>
      <AuthPageContainer title={"Login"}>
        <Typography color="black">Hello</Typography>
      </AuthPageContainer>
    </BannerContainer>
  );
};

export default Login;
