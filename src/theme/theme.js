const palette = {
  surface: {
    neutral: "rgba(225, 233, 238, 1)",
    light: "rgba(255, 255, 255, 1)",
    dark: "rgba(37, 38, 46, 1)",
    100: "rgba(245, 249, 252, 1)",
    300: "rgba(205, 217, 224, 1)",
    400: "rgba(175, 188, 196, 1)",
    500: "rgba(136, 149, 160, 1)",
    600: "rgba(98, 112, 124, 1)",
    700: "rgba(61, 71.92, 82, 1)",
    800: "rgba(37, 38, 46, 1)",
    900: "rgba(28, 27, 34, 1)",
    a100: "rgba(150, 170, 181, 1)",
    a200: "rgba(63, 106, 129, 1)",
    a400: "rgba(55, 61.9, 70, 1)",
    a700: "rgba(11.69, 11.69, 11.69, 1)",
  },
  error: {
    red: "rgba(244, 67, 54, 1)",
    light: "rgba(229, 115, 115, 1)",
    dark: "rgba(211, 47, 47, 1)",
    50: "rgba(255, 235, 238, 1)",
    100: "rgba(255, 205, 210, 1)",
    200: "rgba(239, 154, 154, 1)",
    400: "rgba(239, 83, 80, 1)",
    600: "rgba(229, 57, 53, 1)",
    800: "rgba(198, 40, 40, 1)",
    900: "rgba(183, 28, 28, 1)",
    a100: "rgba(255, 205, 210, 1)",
    a200: "rgba(255, 82, 82, 1)",
    a400: "rgba(255, 23, 68, 1)",
    a700: "rgba(213, 0, 0, 1)",
  },
  warning: {
    light: "rgba(255, 183, 77, 1)",
    dark: "rgba(245, 124, 0, 1)",
    50: "rgba(255, 243, 224, 1)",
    100: "rgba(255, 224, 178, 1)",
    200: "rgba(255, 204, 128, 1)",
    400: "rgba(255, 167, 38, 1)",
    500: "rgba(255, 152, 0, 1)",
    600: "rgba(251, 140, 0, 1)",
    800: "rgba(239, 108, 0, 1)",
    900: "rgba(230, 81, 0, 1)",
    a100: "rgba(255, 209, 128, 1)",
    a200: "rgba(255, 171, 64, 1)",
    a400: "rgba(255, 145, 0, 1)",
    a700: "rgba(255, 109, 0, 1)",
  },
  sucess: {
    light: "rgba(129, 199, 132, 1)",
    dark: "rgba(56, 142, 60, 1)",
    50: "rgba(232, 245, 233, 1)",
    100: "rgba(200, 230, 201, 1)",
    200: "rgba(165, 214, 167, 1)",
    300: "rgba(129, 199, 132, 1)",
    400: "rgba(102, 187, 106, 1)",
    500: "rgba(76, 175, 80, 1)",
    600: "rgba(67, 160, 71, 1)",
    800: "rgba(46, 125, 50, 1)",
    900: "rgba(27, 94, 32, 1)",
    a100: "rgba(185, 246, 202, 1)",
    a200: "rgba(105, 240, 174, 1)",
    a400: "rgba(0, 230, 118, 1)",
    a700: "rgba(0, 200, 83, 1)",
  },
  info: {
    light: "rgba(100, 181, 246, 1)",
    dark: "rgba(25, 118, 210, 1)",
    50: "rgba(227, 242, 253, 1)",
    100: "rgba(187, 222, 251, 1)",
    200: "rgba(144, 202, 249, 1)",
    400: "rgba(66, 165, 245, 1)",
    500: "rgba(33, 150, 243, 1)",
    600: "rgba(30, 136, 229, 1)",
    800: "rgba(21, 101, 192, 1)",
    900: "rgba(13, 71, 161, 1)",
    a100: "rgba(130, 177, 255, 1)",
    a200: "rgba(68, 138, 255, 1)",
    a400: "rgba(41, 121, 255, 1)",
    a700: "rgba(41, 98, 255, 1)",
  },
  primary: {
    500: "#45BBBD",
    50: "#FFFFFF",
    100: "#E0FFFF",
    200: "#AEF0F5",
    300: "#7ADBE0",
    400: "#57CCD0",
    600: "#40ACAD",
    700: "#409E9D",
    800: "#388D8C",
    900: "#306F6B",
    a100: "#D2FFFF",
    a200: "#85FFFF",
    a400: "#30FFFB",
    a700: "#47E7E1",
  },
  secondary: {
    500: "#F8D152",
    50: "#FFFFFF",
    100: "#FDF7DE",
    200: "#FAECAF",
    300: "#F9E37E",
    400: "#F7D961",
    600: "#F8C54B",
    700: "#F4B244",
    800: "#F5A63F",
    900: "#F2882F",
  },
  tertiary: {
    50: "rgba(218.03, 215.99, 219.05, 1)",
    100: "rgba(193.04, 181.05, 208.08, 1)",
    200: "rgba(163.97, 142.03, 191, 1)",
    300: "rgba(135.91, 102, 177.99, 1)",
    400: "rgba(115, 72, 166, 1)",
    500: "rgba(95.11, 42.08, 155.04, 1)",
    600: "rgba(86.95, 38, 150.96, 1)",
    700: "rgba(75.99, 28.05, 140, 1)",
    800: "rgba(64, 22, 134, 1)",
    900: "rgba(43, 8, 119, 1)",
    a100: "rgba(170.08, 121.12, 224.91, 1)",
    a200: "rgba(120.1, 57.12, 222.1, 1)",
    a400: "rgba(104, 0, 223, 1)",
    a700: "rgba(94.09, 0, 200.94, 1)",
  },
};
export default palette;

export const themeSettings = () => {
  return {
    typography: {
      fontFamily: ["DM Sans", "sans-serif"].join(","),
      h1: {
        fontSize: "2.225rem",
        lineHeight: "1",
        letterSpacing: "-0.0625rem",
      },
      h2: {
        fontSize: "1.875rem",
        lineHeight: "1.067",
        letterSpacing: "-0.05rem",
      },
      h3: {
        fontSize: "1.5rem",
        lineHeight: "1.083",
        letterSpacing: "-0.0375rem",
      },
      h4: {
        fontSize: "1.25rem",
        lineHeight: "1.1",
        letterSpacing: "-0.025rem",
      },
      h5: {
        fontSize: "1.125rem",
        lineHeight: "1.111",
        letterSpacing: "-0.0125rem",
      },
      h6: {
        fontSize: "1rem",
        letterSpacing: "-0.00625rem",
      },
      h7: {
        fontSize: "0.8rem",
        letterSpacing: "-0.00525rem",
      },
      "@media (max-width:600px)": {
        h1: {
          fontSize: "1.5rem",
          fontWeight: "2.125rem",
        },
        h2: {
          fontSize: "1rem",
          fontWeight: "1.875rem  ",
        },
        h3: {
          fontSize: ".8rem",
          fontWeight: "1.5rem  ",
        },
        h4: {
          fontSize: ".8rem",
          fontWeight: "1.25rem  ",
        },
        h5: {
          fontSize: "1rem",
          fontWeight: "1.125rem  ",
        },
        h6: {
          fontSize: "1.125rem",
          fontWeight: "1rem",
        },
        h7: {
          fontSize: "1.025rem",
          fontWeight: "0.8rem",
        },
      },
      "@media (max-width:400px)": {
        h1: {
          fontSize: "1rem",
        },
        h2: {
          fontSize: ".8rem",
        },
        h3: {
          fontSize: ".6rem",
        },
        h4: {
          fontSize: ".8rem",
        },
        h5: {
          fontSize: ".8rem",
        },
        h6: {
          fontSize: ".6rem",
        },
        h7: {
          fontSize: ".5rem",
        },
      },
    },
    palette: {
      primary: {
        main: palette.primary[500],
        light: palette.surface[100],
        alt: palette.secondary[900],
      },
    },
  };
};
