import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  Collapse,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/portfolioData.js";
import { tokens } from "../theme.js";

/* ─── Impact stat bar ──────────────────────────────────────────────────── */
function ImpactBar({ stats, accent }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: 0,
        borderRadius: "10px",
        overflow: "hidden",
        border: `1px solid rgba(255,255,255,0.07)`,
        mb: 3,
      }}
    >
      {stats.map((s, i) => (
        <Box
          key={s.label}
          sx={{
            py: 1.5,
            px: 1,
            textAlign: "center",
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            bgcolor: "rgba(255,255,255,0.025)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 13, md: 15 },
              fontWeight: 700,
              color: accent,
              fontFamily: '"Space Grotesk", sans-serif',
              lineHeight: 1.2,
              mb: 0.3,
            }}
          >
            {s.value}
          </Typography>
          <Typography sx={{ fontSize: 10.5, color: tokens.textMuted, lineHeight: 1.3 }}>
            {s.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

/* ─── Collapsible section ───────────────────────────────────────────────── */
function ProjectSection({ section, accent, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box sx={{ mb: 1 }}>
      {/* Section header */}
      <Box
        onClick={() => setOpen((p) => !p)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          py: 0.9,
          px: 1.5,
          borderRadius: "8px",
          bgcolor: open ? "rgba(255,255,255,0.04)" : "transparent",
          border: `1px solid ${open ? "rgba(255,255,255,0.08)" : "transparent"}`,
          transition: "all 0.2s ease",
          "&:hover": { bgcolor: "rgba(255,255,255,0.04)" },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ fontSize: 15 }}>{section.icon}</Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: open ? tokens.text : tokens.textMuted }}>
            {section.label}
          </Typography>
        </Stack>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <KeyboardArrowDownIcon sx={{ fontSize: 18, color: tokens.textMuted }} />
        </motion.div>
      </Box>

      {/* Section content */}
      <Collapse in={open} timeout={250}>
        <Stack spacing={0.75} sx={{ mt: 1, pl: 1 }}>
          {section.points.map((pt, idx) => (
            <Box key={idx} sx={{ display: "flex", gap: 1.25, alignItems: "flex-start" }}>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  bgcolor: accent,
                  flexShrink: 0,
                  mt: "8px",
                }}
              />
              <Typography
                sx={{
                  fontSize: 13.5,
                  color: tokens.textMuted,
                  lineHeight: 1.7,
                }}
              >
                {pt}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}

/* ─── Project card ──────────────────────────────────────────────────────── */
function ProjectCard({ proj, delay }) {
  const accent = proj.accentColor || tokens.amber;

  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            height: "100%",
            borderRadius: "18px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.032)",
            border: `1px solid rgba(255,255,255,0.08)`,
            backdropFilter: "blur(16px)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              borderColor: `${accent}40`,
              boxShadow: `0 0 32px ${accent}18, 0 8px 32px rgba(0,0,0,0.35)`,
            },
          }}
        >
          {/* Accent top stripe */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: `linear-gradient(90deg, ${accent}cc, ${accent}22)`,
            }}
          />

          <Box sx={{ p: { xs: 3, md: 3.5 }, pt: { xs: 3.5, md: 4 } }}>
            {/* Header row */}
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 0.5 }}>
              <Box>
                {/* Category pill */}
                <Chip
                  label={proj.category}
                  size="small"
                  sx={{
                    bgcolor: `${accent}18`,
                    color: accent,
                    border: `1px solid ${accent}33`,
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    mb: 1,
                    height: 20,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: 19, md: 21 }, lineHeight: 1.25, pr: 1 }}
                >
                  {proj.name}
                </Typography>
              </Box>
              {proj.badge && (
                <Chip
                  icon={<LockOutlinedIcon sx={{ fontSize: "12px !important" }} />}
                  label={proj.badge}
                  size="small"
                  sx={{
                    bgcolor: "rgba(251,191,36,0.10)",
                    color: tokens.amber,
                    border: `1px solid rgba(251,191,36,0.3)`,
                    fontSize: 10.5,
                    fontWeight: 600,
                    flexShrink: 0,
                    mt: 0.5,
                    "& .MuiChip-icon": { color: tokens.amber },
                  }}
                />
              )}
            </Box>

            {/* Subtitle */}
            <Typography sx={{ fontSize: 12.5, color: accent, fontWeight: 600, mb: 2, opacity: 0.85 }}>
              {proj.subtitle}
            </Typography>

            {/* Description */}
            <Typography
              sx={{ fontSize: 14, color: tokens.textMuted, lineHeight: 1.75, mb: 2.5 }}
            >
              {proj.description}
            </Typography>

            {/* Impact stats */}
            <ImpactBar stats={proj.impactStats} accent={accent} />

            {/* Collapsible sections */}
            <Stack spacing={0.5} sx={{ mb: 2.5 }}>
              {proj.sections.map((sec, idx) => (
                <ProjectSection
                  key={sec.label}
                  section={sec}
                  accent={accent}
                  defaultOpen={idx === 0}
                />
              ))}
            </Stack>

            {/* Tags */}
            <Stack direction="row" flexWrap="wrap" useFlexGap gap={0.75}>
              {proj.tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.04)",
                    color: tokens.textMuted,
                    border: `1px solid rgba(255,255,255,0.07)`,
                    fontSize: 11,
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </motion.div>
    </Reveal>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="h4" sx={{ fontSize: { xs: 26, md: 30 }, mb: 2 }}>
            Selected work
          </Typography>
          <Typography sx={{ fontSize: 15, color: tokens.textMuted, mb: 6, maxWidth: 560 }}>
            Five projects across four years — architecture overhauls, performance rescues, product builds, and internal tooling. Click any section header to expand detail.
          </Typography>
        </Reveal>

        <Grid container spacing={3}>
          {projects.map((proj, i) => (
            <Grid
              item
              xs={12}
              md={
                /* last card full-width if odd count */
                i === projects.length - 1 && projects.length % 2 !== 0 ? 12 : 6
              }
              key={proj.name}
            >
              <ProjectCard proj={proj} delay={i * 0.07} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
