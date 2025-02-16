/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    "files.associations": {
        "*.css": "tailwindcss"
    },
    "editor.quickSuggestions": {
        "strings": "on"
    },
    darkMode: "class",
  };  