import { Header } from "./components/Header";
import { BackgroundContainer } from "../../container/BackgroundContainer";
import { Menu } from "./components/Tab";
import { useState } from "react";
import { ListMovies } from "./components/ListMovies";
import { useWebViewContext } from "../../context/WebViewsContext";
import { LikedMovies } from "./components/LikedMovies";
import { Perfil } from "./components/Perfil";
import { useAuthContext } from "../../context/AuthContext";

export const Home = () => {
  const { currentBreakPoint } = useWebViewContext();
  const { userInfo, logout } = useAuthContext();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (_, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleViewProfile = () => {
    setSelectedTab(2);
  };

  return (
    <BackgroundContainer onChange={() => handleTabChange}>
      <Header onViewProfile={handleViewProfile} />
      {currentBreakPoint() === "md" && (
        <Menu value={selectedTab} onChange={handleTabChange} />
      )}
      {selectedTab === 0 && <ListMovies />}
      {selectedTab === 1 && <LikedMovies />}
      {selectedTab === 2 && (
        <Perfil
          name={userInfo?.payload?.name}
          email={userInfo?.payload?.login}
          onLogout={logout}
        />
      )}
    </BackgroundContainer>
  );
};
