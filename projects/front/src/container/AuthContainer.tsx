import { Box, Stack, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import { theme } from "../theme/theme";

interface AuthContainerProps {
  title: string;
  subtitle?: string;
  width?: string;
  height?: string;
  left?: string;
  top?: string;
  align?: "left" | "center" | "right";
}

export function AuthContainer({
  children,
  title,
  subtitle,
  width,
  height,
  left,
  top,
  align
}: PropsWithChildren<AuthContainerProps>) {
  return (
    <Stack
      left={left}
      top={top}
      sx={{
        position: "absolute",
        zIndex: 1,
        objectFit: "cover",
      }}
    >
      <Box
        width={width}
        height={height}
        sx={{
          borderRadius: "16px",
          paddingTop: "32px",
          paddingRight: "24px",
          paddingBottom: "32px",
          paddingLeft: "24px",
          backdropFilter: "blur(24px)",
        }}
      >
        <Stack textAlign={align}>
          <Typography
            fontSize={"24px"}
            color={theme.palette.primary.contrastText}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography fontSize={"18px"} color={theme.palette.neutral_gray[50]}>
              {subtitle}
            </Typography>
          )}
        </Stack>
        {children}
      </Box>
    </Stack>
  );
}

