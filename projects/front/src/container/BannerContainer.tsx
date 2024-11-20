import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";

interface BannerContainerProps {
  banner: string;
}

function BannerContainer({ banner }: PropsWithChildren<BannerContainerProps>) {
  return (
    <Stack
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <img
        src={banner}
        alt="banner"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Stack
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(77.44deg, #212121 -2.71%, rgba(33, 33, 33, 0) 93.64%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)`,
        }}
      />
      <Stack
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(0deg, rgba(247, 247, 245, 0), rgba(247, 247, 245, 0)),
            radial-gradient(50% 50% at 50% 50%, rgba(33, 47, 47, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%),
            radial-gradient(67.47% 67.47% at -18.64% 72.63%, rgba(50, 251, 235, 0.4) 0%, rgba(77, 161, 155, 0.1996) 43.3%, rgba(117, 117, 117, 0) 100%),
            radial-gradient(34.22% 47.12% at 94.58% 10.95%, rgba(255, 136, 0, 0.2) 0%, rgba(255, 136, 0, 0.1) 63.4%, rgba(255, 136, 0, 0) 100%)
          `,
        }}
      />
    </Stack>
  );
}

export default BannerContainer;
