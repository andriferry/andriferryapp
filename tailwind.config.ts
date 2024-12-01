import type { Config } from 'tailwindcss';
import daisyUi from 'daisyui';
import tailwindTypography from '@tailwindcss/typography';
import { addDynamicIconSelectors } from '@iconify/tailwind';
import colors from 'tailwindcss/colors';

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {},
        fontFamily: {
            inter: ['Inter'],
            monrepo: ['Manrope'],
        },
    },
    plugins: [daisyUi, tailwindTypography, addDynamicIconSelectors()],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: colors.pink[500],
                    secondary: colors.violet[500],
                    accent: colors.slate[500],
                    neutral: colors.gray[50],
                    info: colors.slate[600],
                    // success: '#00ff00',
                    'info-content':colors.slate[400],
                    warning: colors.orange[400],
                    // error: '#ff0000',
                    // greenSmooth: '#B9FFE2'
                    // 'bermuda': '#78dcca',
                },
            },
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'light', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
    },
} satisfies Config;
