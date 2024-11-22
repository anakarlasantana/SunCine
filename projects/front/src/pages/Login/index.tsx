import { BannerContainer } from "../../container/BannerContainer";
import { Login } from "./Login";
import { LoginProvider } from "./context";

export function LoginPage() {
  return (
    <BannerContainer>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </BannerContainer>
  );
}
