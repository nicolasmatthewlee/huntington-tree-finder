/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "graph-paper":
          'url(\'data:image/svg+xml;utf8,<svg width="15" height="15" viewBox="0 0 100 100" fill="rgb(245,245,245)" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="white"/><rect x="0.5" y="0.5" width="99" height="99" stroke="rgb(210,210,210)"/></svg>\')',
      }),
    },
  },
  plugins: [],
};
