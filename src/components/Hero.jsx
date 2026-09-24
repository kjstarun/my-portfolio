import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { profile, stats } from "../data/portfolioData.js";
import { tokens } from "../theme.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <Box component="section" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Typography sx={{ color: tokens.teal, fontSize: 15, fontWeight: 600, mb: 2 }}>
                  {profile.location}
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 40, sm: 52, md: 60 },
                    lineHeight: 1.08,
                    mb: 3,
                  }}
                >
                  {profile.name}
                  <Box component="span" sx={{ color: tokens.amber }}>.</Box>
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Typography sx={{ fontSize: { xs: 19, md: 22 }, color: tokens.text, mb: 2.5, maxWidth: 560 }}>
                  {profile.tagline}
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Typography sx={{ fontSize: 16, color: tokens.textMuted, mb: 4, maxWidth: 540, lineHeight: 1.7 }}>
                  {profile.intro}
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button
                    href="#projects"
                    variant="contained"
                    endIcon={<ArrowOutwardIcon />}
                    sx={{
                      bgcolor: tokens.amber,
                      color: "#1A1300",
                      px: 3,
                      py: 1.2,
                      "&:hover": { bgcolor: "#e0a83a" },
                    }}
                  >
                    See the work
                  </Button>
                  <Button
                    href="#contact"
                    variant="outlined"
                    sx={{
                      borderColor: tokens.glassBorder,
                      color: tokens.text,
                      px: 3,
                      py: 1.2,
                      "&:hover": { borderColor: tokens.teal, color: tokens.teal },
                    }}
                  >
                    Get in touch
                  </Button>
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box className="glass-panel" sx={{ p: { xs: 3, md: 4 } }}>
                <Grid container spacing={3}>
                  {stats.map((s) => (
                    <Grid item xs={6} key={s.label}>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: 30, md: 36 }, color: tokens.amber, mb: 0.5 }}
                      >
                        {s.value}
                      </Typography>
                      <Typography sx={{ fontSize: 13.5, color: tokens.textMuted, lineHeight: 1.4 }}>
                        {s.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
