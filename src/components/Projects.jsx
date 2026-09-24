import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/portfolioData.js";
import { tokens } from "../theme.js";

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 30 }, mb: 6 }}>
            Selected work
          </Typography>
        </Reveal>

        <Grid container spacing={4}>
          {projects.map((proj, i) => (
            <Grid item xs={12} md={6} key={proj.name}>
              <Reveal delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ height: "100%" }}
                >
                  <Box className="glass-panel" sx={{ p: { xs: 3, md: 4 }, height: "100%" }}>
                    <Typography variant="h5" sx={{ fontSize: 23, mb: 0.5 }}>
                      {proj.name}
                    </Typography>
                    <Typography sx={{ fontSize: 13.5, color: tokens.teal, fontWeight: 600, mb: 2 }}>
                      {proj.subtitle}
                    </Typography>
                    <Typography sx={{ fontSize: 15, color: tokens.textMuted, lineHeight: 1.75, mb: 2.5 }}>
                      {proj.description}
                    </Typography>
                    <Stack spacing={1} sx={{ mb: 3 }}>
                      {proj.highlights.map((h) => (
                        <Typography
                          key={h}
                          sx={{ fontSize: 14.5, color: tokens.text, lineHeight: 1.65, pl: 2, position: "relative" }}
                        >
                          <Box
                            component="span"
                            sx={{
                              position: "absolute",
                              left: 0,
                              top: 9,
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              bgcolor: tokens.amber,
                            }}
                          />
                          {h}
                        </Typography>
                      ))}
                    </Stack>
                    <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                      {proj.tags.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.04)",
                            color: tokens.textMuted,
                            border: `1px solid ${tokens.glassBorder}`,
                            fontSize: 12,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
