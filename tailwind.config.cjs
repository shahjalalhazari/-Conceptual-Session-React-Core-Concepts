/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#e278db",
                "secondary": "#dfea44",
                "accent": "#10b51b",
                "neutral": "#392A3C",
                "base-100": "#EEF3F6",
                "info": "#97BEF2",
                "success": "#61EAA6",
                "warning": "#F8C83A",
                "error": "#EE4F2F",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}