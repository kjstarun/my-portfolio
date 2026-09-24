import { useState } from "react";
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

  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(10,14,23,0.7)",
        borderBottom: `1px solid ${tokens.glassBorder}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.75 }}>
          <Typography variant="h6" sx={{ letterSpacing: 0.5 }}>
            Tarun<Box component="span" sx={{ color: tokens.amber }}>.</Box>
          </Typography>

          <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
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
              sx={{ borderColor: tokens.glassBorder, color: tokens.text, "&:hover": { borderColor: tokens.amber } }}
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
