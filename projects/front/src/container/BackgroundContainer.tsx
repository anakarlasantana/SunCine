import { useWebViewContext } from "../context/WebViewsContext";
import { MyBottomNavigation } from "../pages/Home/components/Mobile/BottomNavigation";
import type { PropsWithChildren } from "react";

interface BackgroundContainerProps {
  children: React.ReactNode;
  onChange: (value: number) => void;
}

export function BackgroundContainer({
  children,
  onChange,
}: PropsWithChildren<BackgroundContainerProps>) {
  const { currentBreakPoint } = useWebViewContext();

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute w-full h-full z-1"
        style={{
          background: `linear-gradient(0deg, rgba(247, 247, 245, 0), rgba(247, 247, 245, 0)),
                       radial-gradient(50% 50% at 50% 50%, rgba(33, 47, 47, 0.8) 0%, rgba(33, 33, 33, 0.8) 100%),
                       radial-gradient(67.47% 67.47% at -18.64% 72.63%, rgba(50, 251, 235, 0.4) 0%, rgba(77, 161, 155, 0.1996) 43.3%, rgba(117, 117, 117, 0) 100%),
                       radial-gradient(34.22% 47.12% at 94.58% 10.95%, rgba(255, 136, 0, 0.2) 0%, rgba(255, 136, 0, 0.1) 63.4%, rgba(255, 136, 0, 0) 100%)`,
        }}
      />
      {children}
      {(currentBreakPoint() === "xs" || currentBreakPoint() === "sm") && (
        <MyBottomNavigation onChange={onChange} />
      )}
    </div>
  );
}
