"use client";

import * as React from "react";
import { Box, Container, Stack, Link, Typography, Button } from "@mui/joy";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { TbMail } from "react-icons/tb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
        <Header />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={12.5}
          sx={{ pb: 6, pt: 4 }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "600px",
            }}
          >
            <Box
              sx={{
                m: 2,
                border: "1px solid #34B3F1",
                borderRadius: "20px",
                padding: "4px 12px",
                display: "inline-block",
                maxWidth: "max-content",
              }}
            >
              <Typography
                level="body-sm"
                fontWeight="500"
                sx={{ color: "#34B3F1" }}
              >
                About us
              </Typography>
            </Box>
            <Stack spacing={1.5}>
              <Typography level="h1" fontWeight={400} sx={{ color: "#ffffff" }}>
                We control our world one line at a time.{" "}
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
              startDecorator={<TbMail size={20} />}
              sx={{
                width: "fit-content",
                minWidth: "auto",
              }}
            >
              Contact us
            </Button>
          </Stack>
          <Box
            sx={{
              width: "640px",
              height: "560px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <Image
              src="/about.jpg"
              alt="about"
              width={640}
              height={560}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the box without stretching
                borderRadius: "20px",
              }}
            />
          </Box>
        </Stack>

        {/* Footer Section */}
        <Footer />
      </Container>
    </Box>
  );
}
