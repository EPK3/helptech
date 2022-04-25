module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      'black': '#111213',
      'slate': '#212224',
      'grey': '#a1a1a1',
      'white': '#ffffff',
      'offWhite': '#E0E1E4',
      'blue': '#075FD1',
      'cyan': '#29b9f0',
    },
    keyframes: {
      blurFadeIn: {
        "0%": {
          opacity: 0,
          transform: 'scale(1.3)'
        },
        "50%": {
          opacity: 0.5,
          transform: 'scale(1.1)'
        },
        "100%": {
          opacity: 1,
          transform: 'scale(1)'
        }
      },
    },
    animation: {
      blurFadeIn: 'blurFadeIn 1s linear backwards',
      blurFadeIn2: 'blurFadeIn 1s linear 1s backwards;',
    },
    extend: {},
  },
  plugins: [],
}
