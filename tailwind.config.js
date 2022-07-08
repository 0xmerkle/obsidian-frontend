/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'lava-texture': "url('/lava-texture.jpeg')",
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
