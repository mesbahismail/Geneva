"use client";

import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Link,
  Card,
  Avatar,
  Typography,
  AspectRatio,
  Button,
  Divider,
  CardContent,
  TabList,
  Tabs,
  Chip,
  CardActions,
  List,
  ListItem,
  ListItemDecorator,
  Grid,
} from "@mui/joy";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Tab, { tabClasses } from "@mui/joy/Tab";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AvatarGroup from "@mui/joy/AvatarGroup";
import { TbBrandBluesky, TbChevronRight } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";
import { TbPlus } from "react-icons/tb";

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10); // Adjust the threshold as needed
    };

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkScrollPosition = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    const tolerance = 5; // Pixel tolerance for edge detection

    setIsAtStart(scrollLeft <= tolerance);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - tolerance);
  };

  useEffect(() => {
    if (!containerRef.current?.style.scrollBehavior) {
      containerRef.current?.style.setProperty(
        "scroll-behavior",
        "smooth",
        "important"
      );
    }
  }, []);

  useEffect(() => {
    const currentContainer = containerRef.current;
    // Initial check with timeout to ensure layout
    setTimeout(checkScrollPosition, 100);

    currentContainer?.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();
    return () => {
      currentContainer?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#040D13",
        minHeight: "100vh",
      }}
    >
      {/* Cover light - Positioned before header */}
      <Box
        sx={{
          position: "absolute",
          width: "1000px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(20, 52, 73, 0.56)",
          filter: "blur(500px)",
          zIndex: 0,
          // Position 200px above header start
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Container
        disableGutters
        sx={{
          maxWidth: "1384px",
          position: "relative",
        }}
      >
        {/* Header Section */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            height: "72px",
            position: "sticky",
            top: 0,
            backgroundColor: isScrolled
              ? "rgba(4, 13, 19, 0.48)"
              : "transparent",
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
              backgroundColor: isScrolled
                ? "rgba(4, 13, 19, 0.64)"
                : "transparent",
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
            <Button color="secondary" variant="outlined">
              Login
            </Button>
            <Button color="primary" variant="solid">
              Get started
            </Button>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={12.5}
          sx={{ pb: 6, pt: 2 }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "100%",
            }}
          >
            <Stack spacing={1.5}>
              <Typography level="h4" sx={{ color: "#ffffff" }}>
                Yosemite National Park
              </Typography>
              <Typography sx={{ color: "#8696A1" }}>
                Etiam vestibulum fringilla nibh, at faucibus diam maximus
                tincidunt. Vivamus iaculis consectetur ultricies. Nam volutpat
                turpis ut augue euismod, vel vulputate lorem vehicula. Ut
                vestibulum eu sem et laoreet. Fusce dui felis, consectetur ac mi
                quis, blandit viverra libero. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed id fermentum lectus, at
                sagittis velit. Quisque pharetra lacus vel enim porta malesuada.
              </Typography>
            </Stack>
            <Button
              color="primary"
              variant="solid"
              endDecorator={<TbChevronRight size={20} />}
              sx={{
                width: "fit-content",
                minWidth: "auto",
              }}
            >
              Get started
            </Button>
          </Stack>

          <Card
            variant="plain"
            sx={{
              position: "relative",
              borderRadius: "25px",
              padding: "2px",
              background: "linear-gradient(45deg, #14415F, #0A1E2B, #14415F)",
              boxShadow: "0 0 128px rgba(20, 52, 73, 0.24)",
            }}
          >
            <Box
              sx={{
                width: 628,
                height: 399,
                border: "8px solid #040D13",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                margin: "-1px",
                zIndex: 1, // Ensure content stays above gradient
              }}
            >
              <Image
                src="/screens/Dashboard.jpg"
                alt="Screen"
                width={628} // Original width + border compensation
                height={399} // Original height + border compensation
                style={{
                  display: "block",
                  objectFit: "cover",
                  position: "relative",
                }}
              />
            </Box>
          </Card>
        </Stack>

        {/* Footer Section */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
          sx={{ p: 2 }}
        >
          <Typography level="h1" sx={{ color: "#ffffff", mt: 2 }}>
            Geneva
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ mb: 1, p: 1 }}
        >
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
            About us
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
            Contact us
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
            Terms of use
          </Link>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 2, p: 2 }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.629 12L16 7.82713V12H11.629ZM8.0179 11.8848L8.01735 11.8843L8.0168 11.8848V11.8837L0.035456 4.15701V0L8.01735 7.72728L15.9992 0V4.15701L8.0179 11.8837V11.8848ZM0 11.9661V7.81399L4.35425 11.9661H0Z"
                fill="white"
              />
            </svg>

            <Typography level="body-sm" sx={{ color: "#ffffff", mt: 2 }}>
              Designed with care by Ismail Mesbah
            </Typography>
          </Stack>

          <Typography level="body-sm" sx={{ color: "#ffffff", mt: 2 }}>
            © 2024 Geneva. All right reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
