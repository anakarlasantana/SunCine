import { Stack } from "@mui/material";
import { BannerContainer } from "../../container/BannerContainer";
import { AuthContainer } from "../../container/AuthContainer";
import { Logo } from "../../components/Logo";
import { useWebViewContext } from "../../context/WebViewsContext";
import { BaseTextField } from "../../components/BaseTextField";
import { useForm } from "react-hook-form";
import { BaseButton } from "../../components/BaseButton";

export function ResentPassword() {
  const { currentBreakPoint } = useWebViewContext();
  const main_form = useForm();

  const width_size = {
    xs: "200px",
    sm: "506px",
    md: "442px",
  };

  const height_size = {
    xs: "496px",
    sm: "397px",
    md: "456px",
  };

  const left_size = {
    xs: "50px",
    sm: "250px",
    md: "650px",
  };

  const top_size = {
    xs: "171px",
    sm: "220px",
    md: "200px",
  };


  return (
    <BannerContainer>
       <Logo left={left_size[currentBreakPoint()]}/>
      <AuthContainer
          title={"Problemas para entrar?"}
          subtitle="Selecione o que aconteceu e digite seu e-mail para comprovar sua identidade!"
          width={width_size[currentBreakPoint()]}
          height={height_size[currentBreakPoint()]}
          left={left_size[currentBreakPoint()]}
          top={top_size[currentBreakPoint()]}
        >
          <Stack paddingTop={2} spacing={2}>
            <BaseTextField
              name={"email"}
              control={main_form.control}
              placeholder="dev@sunne.com.br"
              inputLabel="E-mail cadastrado"
            />


            <BaseButton title="Salvar e continuar" onChange={() => {}} />

            {/* <Stack alignItems={"end"}>
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
            </Stack> */}
          </Stack>
        </AuthContainer>
    </BannerContainer>
  );
}
