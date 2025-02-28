/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*"],
  theme: {
    extend: {
        keyframes: {
          typing: {
            '0%': {
              width: '0%',
              visibility: 'hidden',
            },
            '100%': {
              width: '100%',
            },
          },
          blink: {
            '50%': {
              borderColor: 'transparent',
            },
            '100%': {
              borderColor: 'white',
            },
          },
          slideFromBottom: {
            '0%': {
              transform: 'translateY(100%)',
              opacity: 0,
            },
            '100%' : {
              transform: 'translateY(0)',
              opacity: 1,
            },
          },
        },
        animation: {
          typing: 'typing 3s steps(20) infinite alternate, blink .7s infinite',
          slideFromBottom: "slideFromBottom 2s ease .5s forwards",
        },
    },
  },
  plugins: [],
}

