import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { oivaColors } from "./foundations/colors";
import { glassLayerStyles } from "./foundations/glass";
import { fontFamilies, textStyles, typeScale } from "./foundations/typography";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    oiva: oivaColors,
  },
  fonts: {
    heading: fontFamilies.heading,
    body: fontFamilies.body,
  },
  textStyles,
  layerStyles: glassLayerStyles,
  styles: {
    global: {
      "html, body": {
        bg: "oiva.ivory",
        color: "oiva.ink",
        scrollBehavior: "smooth",
        overflowX: "hidden",
        maxW: "100%",
        fontSize: { base: "15px", md: "16px" },
      },
      img: {
        maxW: "100%",
      },
      "::selection": {
        bg: "oiva.champagne",
        color: "oiva.cocoa",
      },
      "a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible":
        {
          outline: "1px solid",
          outlineColor: "oiva.rose",
          outlineOffset: "2px",
          boxShadow: "none",
        },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: fontFamilies.body,
        fontWeight: 500,
        letterSpacing: { base: "0.14em", md: "0.2em" },
        textTransform: "uppercase",
        borderRadius: "2px",
        transition: "all 0.35s ease-out",
      },
      sizes: {
        sm: {
          fontSize: typeScale.button,
          px: 4,
          py: 2,
          minH: "40px",
        },
        md: {
          fontSize: typeScale.button,
          px: 5,
          py: 2.5,
          minH: "44px",
        },
        lg: {
          fontSize: typeScale.buttonLg,
          px: { base: 5, md: 8 },
          py: 3,
          minH: "48px",
        },
      },
      variants: {
        outline: {
          bg: "transparent",
          color: "oiva.cocoa",
          border: "1px solid",
          borderColor: "oiva.cocoa",
          _hover: {
            bg: "oiva.cocoa",
            color: "oiva.ivory",
            _disabled: {
              bg: "transparent",
              color: "oiva.taupe",
            },
          },
          _active: {
            bg: "oiva.cocoaDeep",
            color: "oiva.ivory",
          },
        },
        outlineLight: {
          bg: "transparent",
          color: "oiva.ivory",
          border: "1px solid",
          borderColor: "oiva.ivory",
          _hover: {
            bg: "oiva.ivory",
            color: "oiva.cocoa",
          },
        },
        solid: {
          bg: "oiva.cocoa",
          color: "oiva.ivory",
          border: "1px solid",
          borderColor: "oiva.cocoa",
          _hover: {
            bg: "oiva.cocoaDeep",
            borderColor: "oiva.cocoaDeep",
          },
        },
      },
      defaultProps: {
        variant: "outline",
        size: "md",
      },
    },
    Input: {
      variants: {
        oiva: {
          field: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "oiva.hairline",
            borderRadius: "2px",
            fontFamily: fontFamilies.body,
            fontWeight: 300,
            fontSize: { base: "0.875rem", md: "0.9375rem" },
            color: "oiva.ink",
            _placeholder: { color: "oiva.taupe" },
            _hover: { borderColor: "oiva.taupe" },
            _focus: {
              borderColor: "oiva.cocoa",
              boxShadow: "none",
            },
          },
        },
        glass: {
          field: {
            bg: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            borderRadius: "2px",
            fontFamily: fontFamilies.body,
            fontWeight: 300,
            fontSize: { base: "0.875rem", md: "0.9375rem" },
            color: "oiva.ink",
            _placeholder: { color: "oiva.taupe" },
            _hover: { borderColor: "rgba(255, 255, 255, 0.85)" },
            _focus: {
              borderColor: "oiva.cocoa",
              boxShadow: "0 0 0 1px rgba(62, 18, 20, 0.15)",
            },
          },
        },
      },
      defaultProps: {
        variant: "oiva",
      },
    },
    Textarea: {
      variants: {
        oiva: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "oiva.hairline",
          borderRadius: "2px",
          fontFamily: fontFamilies.body,
          fontWeight: 300,
          fontSize: { base: "0.875rem", md: "0.9375rem" },
          color: "oiva.ink",
          _placeholder: { color: "oiva.taupe" },
          _hover: { borderColor: "oiva.taupe" },
          _focus: {
            borderColor: "oiva.cocoa",
            boxShadow: "none",
          },
        },
        glass: {
          bg: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.65)",
          borderRadius: "2px",
          fontFamily: fontFamilies.body,
          fontWeight: 300,
          fontSize: { base: "0.875rem", md: "0.9375rem" },
          color: "oiva.ink",
          _placeholder: { color: "oiva.taupe" },
          _hover: { borderColor: "rgba(255, 255, 255, 0.85)" },
          _focus: {
            borderColor: "oiva.cocoa",
            boxShadow: "0 0 0 1px rgba(62, 18, 20, 0.15)",
          },
        },
      },
      defaultProps: {
        variant: "oiva",
      },
    },
    Select: {
      variants: {
        oiva: {
          field: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "oiva.hairline",
            borderRadius: "2px",
            fontFamily: fontFamilies.body,
            fontWeight: 300,
            fontSize: { base: "0.8125rem", md: "0.875rem" },
            color: "oiva.ink",
            _hover: { borderColor: "oiva.taupe" },
            _focus: {
              borderColor: "oiva.cocoa",
              boxShadow: "none",
            },
          },
        },
        glass: {
          field: {
            bg: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            borderRadius: "2px",
            fontFamily: fontFamilies.body,
            fontWeight: 300,
            fontSize: { base: "0.8125rem", md: "0.875rem" },
            color: "oiva.ink",
            _hover: { borderColor: "rgba(255, 255, 255, 0.85)" },
            _focus: {
              borderColor: "oiva.cocoa",
              boxShadow: "0 0 0 1px rgba(62, 18, 20, 0.15)",
            },
          },
        },
      },
      defaultProps: {
        variant: "oiva",
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "oiva.hairline",
        opacity: 1,
      },
    },
    Link: {
      baseStyle: {
        color: "oiva.cocoa",
        _hover: {
          color: "oiva.rose",
          textDecoration: "none",
        },
        transition: "color 0.3s ease-out",
      },
    },
    Radio: {
      baseStyle: {
        control: {
          borderColor: "oiva.hairline",
          _checked: {
            bg: "oiva.cocoa",
            borderColor: "oiva.cocoa",
          },
        },
      },
    },
  },
});

export default theme;
