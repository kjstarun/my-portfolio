import { Box, Container, Typography, Stack } from "@mui/material";
import Reveal from "./Reveal.jsx";
import { timeline } from "../data/portfolioData.js";
import { tokens } from "../theme.js";

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 30 }, mb: 6 }}>
            How I got here
          </Typography>
        </Reveal>

        <Box sx={{ position: "relative", pl: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              position: "absolute",
              left: { xs: 6, md: 7 },
              top: 8,
              bottom: 8,
              width: 2,
              background: `linear-gradient(${tokens.amber}, ${tokens.glassBorder})`,
              opacity: 0.5,
            }}
          />

          <Stack spacing={6}>
            {timeline.map((role, i) => (
              <Reveal key={role.role + role.period} delay={Math.min(i * 0.08, 0.24)}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: -27, md: -29 },
                      top: 6,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      bgcolor: tokens.bg,
                      border: `2px solid ${tokens.amber}`,
                    }}
                  />
                  <Typography sx={{ fontSize: 13, color: tokens.teal, fontWeight: 600, mb: 0.5 }}>
                    {role.period}
                  </Typography>
                  <Typography variant="h5" sx={{ fontSize: 21, mb: 0.5 }}>
                    {role.role}
                  </Typography>
                  <Typography sx={{ fontSize: 14.5, color: tokens.textMuted, mb: role.note ? 0.5 : 2 }}>
                    {role.org}
                  </Typography>
                  {role.note && (
                    <Typography sx={{ fontSize: 13.5, color: tokens.amber, fontStyle: "italic", mb: 2 }}>
                      {role.note}
                    </Typography>
                  )}
                  <Stack spacing={1}>
                    {role.points.map((p) => (
                      <Typography
                        key={p}
                        sx={{ fontSize: 15.5, color: tokens.text, lineHeight: 1.7, pl: 2, position: "relative" }}
                      >
                        <Box
                          component="span"
                          sx={{
                            position: "absolute",
                            left: 0,
                            top: 10,
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            bgcolor: tokens.teal,
                          }}
                        />
                        {p}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Reveal>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
