import { Box, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import Grid from "@mui/material/Grid2";
import { useWebViewContext } from "../context/WebViewsContext";
import theme from "../theme/theme";

interface AuthPageContainerProps {
  description?: string;
  title: string;
}
function AuthPageContainer({
  children,
  title,
  description,
}: PropsWithChildren<AuthPageContainerProps>) {
  const { currentBreakPoint } = useWebViewContext();

  console.log("currentBreakPoint", currentBreakPoint());

  return (
    <Stack>
      {currentBreakPoint() == "xs" && (
        <Grid size={12}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ height: "100vh" }}
          >
            {description && <Typography>{description}</Typography>}
          </Stack>
        </Grid>
      )}

      <Grid size={12}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Box
            sx={{
              minWidth: 300,
              maxWidth: 500,
            }}
          >
            <Stack alignItems="center">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                color={theme.palette.primary.contrastText}
              >
                {title}
              </Typography>
            </Stack>
            {children}
          </Box>
        </Stack>
      </Grid>
    </Stack>
  );
}

export default AuthPageContainer;
