import { Header } from "./components/Header";
import { BackgroundContainer } from "../../container/BackgroundContainer";
import { Menu } from "./components/Tab";
import { useState } from "react";
import { ListMovies } from "./components/ListMovies";
import { useWebViewContext } from "../../context/WebViewsContext";

export const Home = () => {
  const { currentBreakPoint } = useWebViewContext();

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <BackgroundContainer onChange={handleTabChange}>
        <Header />
        {currentBreakPoint() === "md" && <Menu onChange={handleTabChange} />}
        {selectedTab === 0 && <ListMovies />}
      </BackgroundContainer>
    </>
  );
};
