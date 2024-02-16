const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 3s linear infinite"
            },
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                appGrey: "#282c34",
                linkBlue: " #61dafb"
            }
        }
    },
    plugins: []
};
