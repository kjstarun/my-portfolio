import { useState, useEffect } from "react";
import { Box, Container, Stack, Typography, IconButton, Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme.js";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      // Coalesce scroll events to one state update per frame. Use scrollY so
      // the progress responds from the very first pixel of page movement.
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const root = document.documentElement;
        const total = Math.max(root.scrollHeight, document.body.scrollHeight) - window.innerHeight;
        setScrollPct(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1200,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(10,14,23,0.75)",
        borderBottom: `1px solid ${tokens.glassBorder}`,
      }}
    >
      {/* Scroll progress bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "3px",
          width: `${3 + scrollPct * 97}%`,
          background: `linear-gradient(90deg, ${tokens.amber}, ${tokens.teal})`,
          boxShadow: `0 0 8px ${tokens.amber}88`,
          transition: "width 0.05s linear",
          borderRadius: "0 2px 2px 0",
        }}
      />
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.75 }}>
          <Typography variant="h6" sx={{ letterSpacing: 0.5 }}>
            Personal Porfolio
          </Typography>

          <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((l) => (
              <Typography
                key={l.href}
                component="a"
                href={l.href}
                sx={{
                  fontSize: 15,
                  color: tokens.textMuted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  "&:hover": { color: tokens.text },
                }}
              >
                {l.label}
              </Typography>
            ))}
            <Button
              href="mailto:kjstarun@gmail.com"
              variant="outlined"
              size="small"
              sx={{
                borderColor: tokens.borderLight,
                // color: tokens.text,
                lineHeight: 1,
                py: "8px",
                "&:hover": { borderColor: tokens.amber },
              }}
            >
              Say hello
            </Button>
          </Stack>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: tokens.text }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 260, background: tokens.bgElevated, color: tokens.text } }}
      >
        <Stack sx={{ p: 3 }} spacing={3}>
          <IconButton onClick={() => setOpen(false)} sx={{ alignSelf: "flex-end", color: tokens.text }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
          {links.map((l) => (
            <Typography
              key={l.href}
              component="a"
              href={l.href}
              onClick={() => setOpen(false)}
              sx={{ fontSize: 18, textDecoration: "none", color: tokens.text }}
            >
              {l.label}
            </Typography>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
