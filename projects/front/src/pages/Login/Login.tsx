import { Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useWebViewContext } from "../../context/WebViewsContext";
import { BaseTextField } from "../../components/BaseTextField";
import { BaseButton } from "../../components/BaseButton";
import { AuthContainer } from "../../container/AuthContainer";
import { theme } from "../../theme/theme";
import { useNavigate } from "react-router-dom";
import { sitemap } from "../../router/siteMap";
import { Logo } from "../../components/Logo";
import { useAuthContext } from "../../context/AuthContext";


export const Login = () => {
  const main_form = useForm();
  const { currentBreakPoint } = useWebViewContext();
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const width_size = {
    xs: "200px",
    sm: "506px",
    md: "395px",
  };

  const height_size = {
    xs: "496px",
    sm: "397px",
    md: "397px",
  };

  const left_size = {
    xs: "50px",
    sm: "140px",
    md: "233px",
  };

  const top_size = {
    xs: "171px",
    sm: "220px",
    md: "194px",
  };

  function onResetPassword() {
    navigate(sitemap.auth.reset_password);
  }

  function onSubmit() {
    login(main_form.watch()).then((response) => {
      if (response.status === "UNAUTHORIZED") {
        alert(
          "Credenciais inválidas. Verifique seu e-mail e senha e tente novamente."
        );
        return;
      }
      navigate(sitemap.home);
    });
  }

  return (
    <Stack>
      <Logo left={left_size[currentBreakPoint()]} />
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
            name={"login"}
            control={main_form.control}
            placeholder="Insira seu e-mail"
            inputLabel="E-mail"
          />
          <BaseTextField
            name={"password"}
            control={main_form.control}
            placeholder="Insira sua senha"
            inputLabel="Senha"
            type="password"
          />
          <Stack alignItems={"end"}>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: theme.palette.custom_colors.medium_orange,
                justifySelf: "end",
                textDecoration: "underline",
              }}
              onClick={onResetPassword}
            >
              Não consigo acessar minha conta
            </Button>
          </Stack>
          <BaseButton title="Entrar" onChange={onSubmit} />
        </Stack>
      </AuthContainer>
    </Stack>
  );
};
