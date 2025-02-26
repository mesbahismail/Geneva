"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Input,
  Stack,
  Button,
  Typography,
  Link,
} from "@mui/joy";
import {
  TbBrandGoogle,
  TbBrandX,
  TbChevronRight,
  TbCheck,
} from "react-icons/tb";
import Header from "@/components/ThemeRegistry/Header";

export default function LoginPage() {
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
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate email sending - replace with actual API call
    setError("");
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: "#000000", minHeight: "100vh" }}>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          maxWidth: 1352,
          width: "100%",
          "@media (min-width: 1352px)": {
            maxWidth: 1352,
          },
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
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            p: 8,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              width: 570,
              bgcolor: "#181818",
              p: "40px",
              borderRadius: "20px",
              height: "fit-content",
            }}
          >
            {submitted ? (
              <Stack
                sx={{ flex: 1 }}
                direction="column"
                spacing="32px"
                alignItems="center"
                textAlign="center"
              >
                <Box
                  sx={{
                    p: "24px",
                    border: "2px solid #EDB772",
                    borderRadius: "64px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TbCheck size={36} style={{ color: "#EDB772" }} />
                </Box>
                <Stack direction="column" spacing="12px">
                  <Typography level="h2" sx={{ color: "#ffffff" }}>
                    Check your email!
                  </Typography>
                  <Typography level="body-md" sx={{ color: "#888" }}>
                    We've sent a login link to{" "}
                    <strong style={{ color: "#EDB772" }}>{email}</strong>.
                    Please check your inbox and click the link to access your
                    account.
                  </Typography>
                  <Typography level="body-sm" sx={{ color: "#888", mt: 2 }}>
                    Didn't receive the email?{" "}
                    <Link
                      onClick={() => setSubmitted(false)}
                      sx={{
                        cursor: "pointer",
                        color: "#EDB772",
                        "&:hover": { textDecoration: "none", opacity: 0.8 },
                      }}
                    >
                      Click to resend
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
            ) : (
              <Stack
                direction="column"
                spacing={3}
                sx={{ alignContent: "center", flex: 1, maxWidth: 570 }}
              >
                <Typography level="h2" sx={{ color: "#ffffff", flexGrow: 1 }}>
                  Login to your account
                </Typography>

                <Stack spacing={3}>
                  <Input
                    color="primary"
                    variant="solid"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    error={!!error}
                  />
                  {error && (
                    <Typography sx={{ color: "danger.500", mt: -2 }}>
                      {error}
                    </Typography>
                  )}

                  <Button
                    onClick={handleSubmit}
                    color="primary"
                    variant="solid"
                    endDecorator={<TbChevronRight size={20} />}
                    sx={{ width: "100%" }}
                  >
                    Send one time login link
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: "100%" }}
                >
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "#444444" }} />
                  <Typography fontSize="sm" sx={{ color: "#888", mx: "16px" }}>
                    OR
                  </Typography>
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "#444444" }} />
                </Stack>

                <Button
                  color="secondary"
                  variant="outlined"
                  startDecorator={<TbBrandGoogle size={20} />}
                  sx={{ width: "100%" }}
                >
                  Login with Google
                </Button>

                <Button
                  color="secondary"
                  variant="outlined"
                  startDecorator={<TbBrandX size={20} />}
                  sx={{ width: "100%" }}
                >
                  Login with X
                </Button>
              </Stack>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
