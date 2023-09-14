import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            customblue: {
               100: "#45456A",
               200: "#2563EB",
               300: "#10101E",
               400: "#0B0B1B",
            },
            customgreen: {
               100: "#59F8BE",
               200: "#1DD69E",
            },
            customgrey: {
               100: "#FBFBFB",
               200: "#F2F2F2",
               300: "#68727D",
            },
         },
         animation: {
            "spin-3": "spin 3s linear infinite",
            "spin-4": "spin 4s linear infinite",
            "spin-5": "spin 5s linear infinite",
            "spin-10": "spin 10s linear infinite reverse",
            "pulse-1": "pulse1 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            wiggle1: "wiggle1 4s ease-in-out infinite",
            wiggle2: "wiggle2 5s ease-in-out infinite",
            wiggle3: "wiggle3 10s ease-in-out infinite",
            wigglereverse1: "wiggle1 5s ease-in-out infinite reverse",
            topbottom1: "topbottom 5s ease-in-out infinite alternate",
            topbottom2: "topbottom 4s ease-in-out infinite alternate",
            rigthleft: "rigthleft 8s ease-in-out infinite alternate",
         },
         keyframes: {
            wiggle1: {
               "0%, 100%": { transform: "rotate(-1deg)" },
               "50%": { transform: "rotate(1deg)" },
            },
            wiggle2: {
               "0%, 100%": { transform: "rotate(-3deg)" },
               "50%": { transform: "rotate(3deg)" },
            },
            wiggle3: {
               "0%, 100%": { transform: "rotate(2deg)" },
               "50%": { transform: "rotate(-2deg)" },
            },
            topbottom: {
               "0%, 100%": { transform: "translateY(-25px)" },
               "50%": { transform: "translateY(0px)" },
            },
            rigthleft: {
               "0%, 100%": { transform: "translateX(-20px)" },
               "50%": { transform: "translateX(0px)" },
            },
            pulse1: {
               "0%, 100%": { opacity: "1" },
               "50%": { opacity: ".3" },
            },
         },
      },
   },
   plugins: [],
};
export default config;
