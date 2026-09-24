import { Box, Container, Typography, Stack, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/CallOutlined";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/portfolioData.js";
import { tokens } from "../theme.js";

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            className="glass-panel"
            sx={{
              p: { xs: 4, md: 7 },
              textAlign: { xs: "left", md: "center" },
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(242,184,75,0.08), transparent 50%)`,
            }}
          >
            <Typography variant="h3" sx={{ fontSize: { xs: 28, md: 38 }, mb: 2 }}>
              Building something worth stabilizing?
            </Typography>
            <Typography sx={{ fontSize: 17, color: tokens.textMuted, mb: 4, maxWidth: 560, mx: { md: "auto" } }}>
              I'm open to full stack and frontend roles with a path toward deeper architecture
              ownership. If that's what you're hiring for, let's talk.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ md: "center" }}
              sx={{ mb: 4 }}
            >
              <Button
                href={`mailto:${profile.email}`}
                variant="contained"
                startIcon={<EmailIcon />}
                sx={{ bgcolor: tokens.amber, color: "#1A1300", px: 3, py: 1.2, "&:hover": { bgcolor: "#e0a83a" } }}
              >
                {profile.email}
              </Button>
              <Button
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                variant="outlined"
                startIcon={<CallIcon />}
                sx={{ borderColor: tokens.glassBorder, color: tokens.text, px: 3, py: 1.2 }}
              >
                {profile.phone}
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} justifyContent={{ md: "center" }}>
              <Button
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedInIcon />}
                sx={{ color: tokens.textMuted, "&:hover": { color: tokens.teal } }}
              >
                LinkedIn
              </Button>
              <Button
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{ color: tokens.textMuted, "&:hover": { color: tokens.teal } }}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
