import { Box, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "../theme/theme";

interface AuthContainerProps {
  description?: string;
  title: string;
  subtitle?: string;
  width?: string;
  height?: string;
  left?: string;
  top?: string;
}

function AuthContainer({
  children,
  title,
  subtitle,
  width,
  height,
  left,
  top,
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
        <Stack>
          <Typography
            fontSize={"24px"}
            color={theme.palette.primary.contrastText}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography fontSize={"18px"} color={theme.palette.neutralGray[50]}>
              {subtitle}
            </Typography>
          )}
        </Stack>
        {children}
      </Box>
    </Stack>
  );
}

export default AuthContainer;
