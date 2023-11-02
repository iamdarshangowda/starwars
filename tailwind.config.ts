import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0f1d27",
        primaryLight: "#14272f",
        secondaryDark: "#2f4947",
        secondaryLight: "#4a7065",
        accentDark: "#81c4b6",
        accentMedium: "#9fdbaf",
        accentLight: "#b0e096",
        neon: "#c1f9a7",
        error: "#FF3B30",
        grey: {
          0: "#ffffff",
          1: "#f2f2f2",
          2: "#c6c6c6",
          3: "#707070",
          4: "#4B4B4B",
          5: "#3C3C3C",
          6: "#2F2F2F",
          7: "#242424",
          8: "#22252a",
          9: "#121212",
        },
      },
      fontSize: {
        "heading-1/h1": ["2.5rem", { fontWeight: "700" }],
        "heading-2/h1": ["1.8rem", { fontWeight: "700" }],
        "heading-3/h1": ["1.2rem", { fontWeight: "700" }],
        "body-1/b1": ["16px", { fontWeight: "700" }],
        "body-1/b2": ["16px", { fontWeight: "500" }],
        "body-1/b3": ["16px", { fontWeight: "400" }],
        "body-2/b1": ["14px", { fontWeight: "700" }],
        "body-2/b2": ["14px", { fontWeight: "500" }],
        "body-2/b3": ["14px", { fontWeight: "400" }],
        "body-3/b1": ["12px", { fontWeight: "700" }],
        "body-3/b2": ["12px", { fontWeight: "500" }],
        "body-3/b3": ["12px", { fontWeight: "400" }],
        "caption/c1": ["10px", { fontWeight: "700" }],
        "caption/c2": ["10px", { fontWeight: "500" }],
        "caption/c3": ["10px", { fontWeight: "400" }],
      },
      spacing: {
        "0.5": "2px",
        "1.5": "6px",
        "2.5": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
