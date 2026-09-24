import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";
import Reveal from "./Reveal.jsx";
import { skillGroups } from "../data/portfolioData.js";
import { tokens } from "../theme.js";

export default function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 30 }, mb: 5 }}>
            What I build with
          </Typography>
        </Reveal>

        <Grid container spacing={3}>
          {skillGroups.map((group, i) => (
            <Grid item xs={12} sm={6} md={4} key={group.title}>
              <Reveal delay={Math.min(i * 0.05, 0.2)}>
                <Box className="glass-panel" sx={{ p: 3, height: "100%" }}>
                  <Typography sx={{ fontSize: 13, color: tokens.teal, fontWeight: 600, mb: 1.5 }}>
                    {group.title}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                    {group.items.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.05)",
                          color: tokens.text,
                          border: `1px solid ${tokens.glassBorder}`,
                          fontSize: 12.5,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
