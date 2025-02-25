import { extendTheme } from "@mui/joy/styles";
import { TbChevronDown } from "react-icons/tb";
import { Raleway, Source_Code_Pro, Space_Grotesk } from "next/font/google";

// Type declarations
declare module "@mui/joy/Button" {
  interface ButtonPropsColorOverrides {
    secondary: true;
  }
}

declare module "@mui/joy/Select" {
  interface SelectPropsSizeOverrides {
    md: true;
    lg: true;
  }
  interface SelectPropsVariantOverrides {
    plain: true;
    outlined: true;
    soft: true;
    solid: true;
  }
  interface SelectPropsSlots {
    indicator: true;
  }
}

// Font initialization
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  adjustFontFallback: false,
  display: "swap",
});

const sourceCodePro = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  fontFamily: {
    body: spaceGrotesk.style.fontFamily,
    display: spaceGrotesk.style.fontFamily,
    code: sourceCodePro.style.fontFamily,
  },
  components: {
    JoyButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "primary" &&
            ownerState.variant === "solid" && {
              backgroundColor: "#34B3F1",
              color: "#000",
              borderRadius: "12px",
              minHeight: "40px",
              padding: "0px 12px",
              width: "fit-content",
              minWidth: "unset",
              "&:hover": { backgroundColor: "#34B3F1" },
              "&&": { fontWeight: 600 },
            }),
          ...(ownerState.color === "secondary" &&
            ownerState.variant === "outlined" && {
              border: "1px solid #444444",
              color: "#ffffff",
              backgroundColor: "transparent",
              borderRadius: "12px",
              minHeight: "40px",
              padding: "0px 12px",
              width: "fit-content",
              minWidth: "unset",
              transition: "border-color 0.2s ease, background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "#222",
                borderColor: "#666",
              },
              "&&": { fontWeight: 500 },
            }),
          ...(ownerState.color === "secondary" &&
            ownerState.variant === "outlined" &&
            ownerState.size === "sm" && {
              border: "1px solid #444444",
              color: "#ffffff",
              backgroundColor: "transparent",
              borderRadius: "10px",
              minHeight: "32px",
              padding: "0px 8px",
              width: "fit-content",
              minWidth: "unset",
              transition: "border-color 0.2s ease, background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "#222",
                borderColor: "#666",
              },
              "&&": { fontWeight: 500 },
            }),
          ...(ownerState.color === "secondary" &&
            ownerState.variant === "plain" && {
              color: "#ffffff",
              backgroundColor: "transparent",
              padding: "0 8px",
              minHeight: "auto",
              transition: "border-color 0.2s ease, background-color 0.2s ease",
              "&:hover": {
                backgroundColor: "transparent",
                textUnderlineOffset: "4px",
              },
              "&:active": {
                transform: "none",
              },
              "&&": {
                fontWeight: 500,
              },
            }),
        }),
      },
    },

    JoyInput: {
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "12px",
          fontSize: "14px",
          minHeight: "40px",
          border: "1px solid #444",
          background: "transparent",
          padding: "8px 12px",
          fontFamily: spaceGrotesk.style.fontFamily,
          transition: "border-color 0.2s ease, background-color 0.2s ease",

          "&:hover": {
            borderColor: "#666",
            backgroundColor: "transparent",
          },

          "&:focus-within": {
            borderColor: "#aaa",
            outline: "none",
            boxShadow: "none",
          },

          "&::before, &::after, fieldset": {
            border: "none",
            outline: "none",
            boxShadow: "none",
          },

          ...(ownerState.variant === "outlined" && {
            "&:hover": {
              borderColor: "#666",
            },
            "&:focus, &:focus-within": {
              borderColor: "#aaa",
            },
          }),
        }),
      },
    },

    JoySelect: {
      defaultProps: {
        variant: "outlined",
        color: "neutral",
        slots: {
          indicator: TbChevronDown,
        },
        slotProps: {
          indicator: {
            sx: {
              color: "#999",
              transition: "transform 0.2s ease",
              "&[data-joy-open]": {
                transform: "rotate(-180deg)",
              },
              // Add spacing between text and icon
              marginLeft: "4px", // This creates the 4px gap
            },
          },
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "12px",
          fontSize: "14px",
          minHeight: "40px",
          border: "1px solid #444",
          background: "transparent",
          padding: "8px 12px",
          fontFamily: spaceGrotesk.style.fontFamily,
          transition: "border-color 0.2s ease, background-color 0.2s ease",
          color: "#fff",
          // Add container spacing
          "& [class*=selectedValue]": {
            paddingRight: "8px",
            color: "#fff",
          },

          "&:hover": {
            borderColor: "#666",
            backgroundColor: "transparent",
          },

          "&:focus-within": {
            borderColor: "#aaa",
            outline: "none",
            boxShadow: "none",
          },

          "&::before, &::after, fieldset": {
            border: "none",
            outline: "none",
            boxShadow: "none",
          },
        }),
      },
    },

    JoyAccordion: {
      styleOverrides: {
        root: {
          borderColor: "#333",
          "&:before": { backgroundColor: "#333" },
          // Hover for entire accordion item
          "&:hover": {
            borderColor: "#333",
          },
        },
      },
    },
    JoyAccordionSummary: {
      styleOverrides: {
        root: {
          color: "#fff !important",
          fontSize: "h2",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "#333", // Summary background hover
          },
        },
        indicator: {
          color: "#aaa",
          "&:hover": {
            color: "#333", // Arrow hover color
            backgroundColor: "transparent",
          },
        },
      },
    },

    JoyList: {
      styleOverrides: {
        root: {
          "--List-padding": "8px",
          "--List-radius": "8px",
          // Ensure list matches new background
          backgroundColor: "#000",
        },
      },
    },

    JoyOption: {
      styleOverrides: {
        root: {
          color: "#ddd",
          fontSize: "14px",
          padding: "8px 12px",
          "&:hover": {
            backgroundColor: "#333", // Changed to darker hover
          },
          '&[aria-selected="true"]': {
            backgroundColor: "#2a2a2a",
            fontWeight: 500,
          },
        },
      },
    },

    JoyRadio: {
      styleOverrides: {
        radio: {
          backgroundColor: "transparent",
          color: "transparent",
          borderWidth: 2,
          borderColor: "#444",
          "&.Mui-checked": {
            borderColor: "#EDB772",
            color: "#EDB772",
          },
          "&:hover": {
            backgroundColor: "#222",
          },
        },
      },
    },

    JoyTextarea: {
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "12px",
          fontSize: "14px",
          fontFamily: spaceGrotesk.style.fontFamily,
          transition: "border-color 0.2s ease, background-color 0.2s ease",
          "--Textarea-paddingBlock": "calc(0.5rem - 1px)",
          "--Textarea-minHeight": "40px",
          border: "1px solid #444",
          backgroundColor: "transparent",
          color: "#fff",

          "&:hover": {
            borderColor: "#666",
            backgroundColor: "transparent",
          },

          "&:focus-within": {
            borderColor: "#aaa",
            outline: "none",
            boxShadow: "none",
          },

          "&::before, &::after, fieldset": {
            border: "none",
            outline: "none",
            boxShadow: "none",
          },
        }),
        textarea: {
          "&::placeholder": {
            color: "#aaa",
            opacity: 1,
          },
        },
      },
    },
  },
});

export default theme;
