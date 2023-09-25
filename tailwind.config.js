/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      colors: {
        // primary template (tp) colors
        "tp-darkBlue": " hsl(233, 26%, 24%)",
        "tp-limeGreen": " hsl(136, 65%, 51%)",
        "tp-brightCyan": "hsl(192, 70%, 51%)",
        // neutral template (tp) colors
        "tp-grayishBlue": "hsl(233, 8%, 62%)",
        "tp-lightGrayish": "hsl(220, 16%, 96%)",
        "tp-veryLightGray": "hsl(0, 0%, 98%) ",
        "tp-white": "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "phone-pattern": "url(/images/image-mockups.png)",
      },
      fontFamily: {
        "tp-sans": "Public Sans",
      },
      maxWidth: {
        "2xs": "300px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
