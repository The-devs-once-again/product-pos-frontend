const COLORS = {
  primary: {
    50: "#feece3",
    100: "#fdc6ac",
    200: "#fba175",
    300: "#fa7b3e",
    400: "#f85507",
    500: "#c14205",
    600: "#8a2f04",
    700: "#531c02",
    800: "#531c02",
    900: "#1c0901",
  },
  secondary: {
    50: "#ecf8ef",
    100: "#d9f1df",
    200: "#c6ead0",
    300: "#b3e3c0",
    400: "#9fdcb1",
    500: "#8ad5a1",
    600: "#74ce92",
    700: "#5cc682",
    800: "#3ebf73",
    900: "#01b763",
  },
  gray: {
    50: "#f0f2f5",
    100: "#d2d7e0",
    200: "#b4bdcb",
    300: "#95a3b6",
    400: "#7788a1",
    500: "#5e6f88",
    600: "#49566a",
    700: "#343e4b",
    800: "#1f252d",
    900: "#0a0c0f",
  },
  white: {
    50: "#fcfbfc",
    100: "#fdfcfd",
    200: "#fdfdfd",
    300: "#fefdfe",
    400: "#fefefe",
    500: "#ffffff",
  }
};

const FONT = {
  thin: "InterThin",
  extraLight: "InterExtraLight",
  light: "InterLight",
  regular: "InterRegular",
  medium: "InterMedium",
  semibold: "InterSemiBold",
  bold: "InterBold",
  extraBold: "InterExtraBold",
  black: "InterBlack",
};

const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export { COLORS, FONT, SHADOWS};
