/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {
      colors: {
        "navbar-left": "var(--ifm-color-navbar-left)",
        "navbar-right": "var(--ifm-color-navbar-right)",
        "primary-dark": "var(--ifm-color-primary-dark)",
        "primary-darker": "var(--ifm-color-primary-darker)",
        "primary-darkest": "var(--ifm-color-primary-darkest)",
        "primary-light": "var(--ifm-color-primary-light)",
        "primary-lighter": "var(--ifm-color-primary-lighter)",
        "primary-lightest": "var(--ifm-color-primary-lightest)",
        "highlighted-code-line-bg":
          "var(--docusaurus-highlighted-code-line-bg)",
        "background-color": "var(--ifm-background-surface-color)",
        "background-color-dark": "#1B1B1D",
      },
      animation: {
        "spin-expert": "spin 25s linear infinite",
        "spin-expert-pause": "spin 25s linear infinite paused",
        "spin-expert-reverse": "spin-reverse 25s linear infinite",
        "spin-expert-reverse-pause": "spin-reverse 25s linear infinite paused",

        "spin-advanced": "spin 75s linear infinite",
        "spin-advanced-pause": "spin 75s linear infinite paused",
        "spin-advanced-reverse": "spin-reverse 75s linear infinite",
        "spin-advanced-reverse-pause":
          "spin-reverse 75s linear infinite paused",

        "spin-intermediate": "spin 200s linear infinite",
        "spin-intermediate-pause": "spin 200s linear infinite paused",
        "spin-intermediate-reverse": "spin-reverse 200s linear infinite",
        "spin-intermediate-reverse-pause":
          "spin-reverse 200s linear infinite paused",
      },
    },
  },
  plugins: [],
};
