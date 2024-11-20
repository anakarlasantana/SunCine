import { type PropsWithChildren, useEffect } from "react";
import { Stack } from "@mui/material";
import bannerDesktop from "../assets/banner_desktop.svg";
import bannerTablet from "../assets/banner_tablet.svg";
import bannerMobile from "../assets/banner_mobile.svg";
import { useWebViewContext } from "../context/WebViewsContext";

interface BannerContainerProps {
  children: React.ReactNode;
}

export function BannerContainer({
  children,
}: PropsWithChildren<BannerContainerProps>) {
  const { currentBreakPoint } = useWebViewContext();

  const break_point = currentBreakPoint();

  const banner_size = {
    xs: bannerMobile,
    sm: bannerTablet,
    md: bannerDesktop,
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    banner_size[currentBreakPoint()];
  }, [break_point]);


  return (
    <Stack>
      <img
        src={banner_size[currentBreakPoint()]}
        alt="banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -2,
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `linear-gradient(0deg, rgba(247, 247, 245, 0), rgba(247, 247, 245, 0)),
                     radial-gradient(50% 50% at 50% 50%, rgba(33, 47, 47, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%),
                     radial-gradient(67.47% 67.47% at -18.64% 72.63%, rgba(50, 251, 235, 0.4) 0%, rgba(77, 161, 155, 0.1996) 43.3%, rgba(117, 117, 117, 0) 100%),
                     radial-gradient(34.22% 47.12% at 94.58% 10.95%, rgba(255, 136, 0, 0.2) 0%, rgba(255, 136, 0, 0.1) 63.4%, rgba(255, 136, 0, 0) 100%)`,
          zIndex: 1,
        }}
      />
      {children}
    </Stack>
  );
}

