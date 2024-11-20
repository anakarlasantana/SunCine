import { Stack } from "@mui/material";
import AuthContainer from "../../container/AuthContainer";
import { useForm } from "react-hook-form";
import { useWebViewContext } from "../../context/WebViewsContext";
import logo from "../assets/logo.svg";
import { BannerContainer } from "../../container/BannerContainer";
import { BaseTextField } from "../../components/BaseTextField";

export const Login = () => {
  const mainform = useForm();
  const { currentBreakPoint } = useWebViewContext();

  const width_size = {
    xs: "200px",
    sm: "506px",
    md: "395px",
  };

  const height_size = {
    xs: "496px",
    sm: "397px",
    md: "496px",
  };

  const left_size = {
    xs: "16px",
    sm: "164px",
    md: "233px",
  };

  const top_size = {
    xs: "171px",
    sm: "220px",
    md: "194px",
  };

  const logo_top_size = {
    xs: "80.39px",
    sm: "80.39px",
    md: "80.4px",
  }

  return (
    <BannerContainer>
      <Stack>
        <Stack
          sx={{
            position: "absolute",
            top: logo_top_size[currentBreakPoint()],
            left: left_size[currentBreakPoint()],
            zIndex: 1,
            objectFit: "cover",
          }}
        >
          <img src={logo} alt="logo" width={"186px"} height={"49.7px"} />
        </Stack>
        <AuthContainer
          title={"Olá cinéfilo,"}
          subtitle="que bom te ver por aqui!"
          width={width_size[currentBreakPoint()]}
          height={height_size[currentBreakPoint()]}
          left={left_size[currentBreakPoint()]}
          top={top_size[currentBreakPoint()]}
        >
          <Stack paddingTop={2} spacing={2}>
            <BaseTextField
              name={"username"}
              control={mainform.control}
              placeholder="Insira seu e-mail"
              inputLabel="E-mail"
            />
            <BaseTextField
              name={"password"}
              control={mainform.control}
              placeholder="Insira sua senha"
              inputLabel="Senha"
            />
          </Stack>
        </AuthContainer>
      </Stack>
    </BannerContainer>
  );
};
