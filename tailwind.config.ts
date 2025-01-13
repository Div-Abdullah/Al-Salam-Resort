import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#026970",
        secondaryColor: "#279196",
        thirdColor: "#d48750",
        bgColor: "#fff7f0",
      },
      backgroundImage: {
        'bgpattern': "url('/bacground.png')",
        'footerpattern': "url('/footerimg.png')",
      },
      fontFamily: {
        zain: ["Zain", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
