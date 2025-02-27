"use client";

import * as React from "react";
import { Stack, Button, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import Link from "@mui/joy/Link";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter(); // Use the router inside the component

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path); // Correctly using router.push()
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
        height: "72px",
        position: "sticky",
        top: 0,
        backgroundColor: isScrolled ? "rgba(4, 13, 19, 0.48)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        zIndex: 1000,
        width: "100%",
        margin: "0 auto",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: isScrolled ? "rgba(4, 13, 19, 0.64)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          zIndex: -1,
        },
      }}
    >
      <Typography level="h2" sx={{ color: "#ffffff", mt: 2 }}>
        Geneva
      </Typography>

      <Stack direction="row" spacing={4}>
        <Link
          href="/link1"
          underline="none"
          sx={{
            color: "#8696A1",
            fontWeight: 500,
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          Benefits
        </Link>
        <Link
          href="/link2"
          underline="none"
          sx={{
            color: "#8696A1",
            fontWeight: 500,
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          Integrations
        </Link>
        <Link
          href="/link3"
          underline="none"
          sx={{
            color: "#8696A1",
            fontWeight: 500,
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          How it works
        </Link>
        <Link
          href="/link4"
          underline="none"
          sx={{
            color: "#8696A1",
            fontWeight: 500,
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          FAQs
        </Link>
        <Link
          href="/link5"
          underline="none"
          sx={{
            color: "#8696A1",
            fontWeight: 500,
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          Pricing
        </Link>
      </Stack>

      <Stack
        direction="row"
        spacing="16px"
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => handleNavigation("/login")}
        >
          Login
        </Button>
        <Button
          color="primary"
          variant="solid"
          onClick={() => handleNavigation("/sign")}
        >
          Get started
        </Button>
      </Stack>
    </Stack>
  );
}
