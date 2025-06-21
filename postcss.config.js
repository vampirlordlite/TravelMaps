/**
 * @type {import('postcss').Postcss}
 * @description Конфигурация PostCSS для проекта с Tailwind CSS
 * @see https://postcss.org/
 * @see https://tailwindcss.com/docs/using-with-preprocessors
 */
module.exports = {
    plugins: {
        // 1. Импорт стилей и переменных
        'postcss-import': {},

        // 2. Поддержка современных CSS-функций
        'postcss-preset-env': {
            stage: 1,
            features: {
                'nesting-rules': true,
                'custom-media-queries': true,
            },
            autoprefixer: {
                flexbox: 'no-2009',
            },
        },

        // 3. Tailwind CSS (должен идти перед Autoprefixer)
        tailwindcss: {},

        // 4. Автопрефиксер (добавляет вендорные префиксы)
        autoprefixer: {},

        // 5. Оптимизация только для production
        ...(process.env.NODE_ENV === 'production'
            ? {
                cssnano: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true,
                            },
                            cssDeclarationSorter: true,
                        },
                    ],
                },
            }
            : {}),
    },
};