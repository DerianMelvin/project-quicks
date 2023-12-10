import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          blue: "#2F80ED",
          darkGray: "#4F4F4F",
          gray: "#828282",
          white: "#E0E0E0",
        },
        indicator: {
          orange: "#F8B76B",
          violet: "#8785FF",
          red: "#EB5757",
          yellow: "#F2C94C",
        },
        chats: {
          yellowLight: "#FCEED3",
          yellow: "#E5A443",
          purpleLight: "#EEDCFF",
          purple: "#9B51E0",
          greenLight: "#D2F2EA",
          green: "#43B78D",
        },
        stickers: {
          e9f3ff: "#E9F3FF",
          fdcfa4: "#FDCFA4",
          f9e9c3: "#F9E9C3",
          afebdb: "#AFEBDB",
          cbf1c2: "#CBF1C2",
          cfcef9: "#CFCEF9",
          f9e0fd: "#F9E0FD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
