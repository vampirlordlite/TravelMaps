/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3B82F6', // синий
                    light: '#93C5FD',
                    dark: '#1D4ED8'
                },
                secondary: {
                    DEFAULT: '#10B981', // зеленый
                    light: '#6EE7B7',
                    dark: '#047857'
                },
                map: {
                    marker: '#EF4444', // красный для маркеров
                    route: '#8B5CF6' // фиолетовый для маршрутов
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif']
            },
            boxShadow: {
                card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                floating: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],

    // Варианты тем (для переключения темной/светлой)
    darkMode: 'class',
}