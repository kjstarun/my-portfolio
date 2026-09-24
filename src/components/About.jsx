import { Box, Container, Typography, Grid } from "@mui/material";
import Reveal from "./Reveal.jsx";
import { tokens } from "../theme.js";

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Reveal>
              <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 30 } }}>
                Where I come from
              </Typography>
            </Reveal>
          </Grid>
          <Grid item xs={12} md={8}>
            <Reveal delay={0.08}>
              <Typography sx={{ fontSize: 17, lineHeight: 1.9, color: tokens.text, mb: 3 }}>
                I started as an intern building HR tooling, and within a year was dropped into a
                three-person team stabilizing a live industrial platform that was actively costing
                a manufacturing client money — crashes, two-minute load times, and no clear owner
                for any of it.
              </Typography>
              <Typography sx={{ fontSize: 17, lineHeight: 1.9, color: tokens.text, mb: 3 }}>
                That project — a smart-factory monitoring system spanning raw material sourcing to
                delivery — became the spine of my career since. I've diagnosed the architecture
                gaps, redesigned the pipelines, and eventually trained the next four engineers who
                joined the team.
              </Typography>
              <Typography sx={{ fontSize: 17, lineHeight: 1.9, color: tokens.textMuted }}>
                Most recently I took a gamification platform from a half-finished handoff to a
                production release the client publicly thanked the team for. I'm now looking to
                take on more architecture-level ownership — the kind of work I've already been
                doing, just without the title yet.
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
