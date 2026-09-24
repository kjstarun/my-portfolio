import { Box, Container, Typography, Stack } from "@mui/material";
import { tokens } from "../theme.js";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${tokens.glassBorder}`, py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
        >
          <Typography sx={{ fontSize: 13.5, color: tokens.textMuted }}>
            © {new Date().getFullYear()} Tarun Sivagnanam. Built with React &amp; MUI.
          </Typography>
          <Typography sx={{ fontSize: 13.5, color: tokens.textMuted }}>
            {tokens ? "Coimbatore, Tamil Nadu" : ""}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
