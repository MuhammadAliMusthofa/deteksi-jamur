/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
   theme: {
      container: {
         center: true,
         padding: "20px",
      },
      extend: {
         screens: {
            "2xl": "1320px",
         },
         colors: {
            primary: "#14b8a6",
            dark: "#0f172a",
            secondary: "#64748b",
            sail: "#bee5f9",
            sailsem: "#1aa1dd",
            sailmed: "#0d81bc",
            saildark: "#114969",
         },
      },
   },
   plugins: [],
};
