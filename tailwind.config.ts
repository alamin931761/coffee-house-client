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
        whiskey: "#C7A17A",
        fantasy: "#F6F4EF",
        "silver-chalice": "#acacac",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
