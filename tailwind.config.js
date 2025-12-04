

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}"
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         slideInLeft: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideInRight: {
//           '0%': { transform: 'translateX(100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         sideToSide: {
//           '0%, 100%': { transform: 'translateX(0)' },
//           '50%': { transform: 'translateX(50px)' },
//         },
//       },
//       animation: {
//         slideInLeft: 'slideInLeft 0.6s ease-out forwards',
//         slideInRight: 'slideInRight 0.6s ease-out forwards',
//         sideToSide: 'sideToSide 2s ease-in-out infinite',
//       },

//        fontFamily: {
//       barlow: ['"Barlow Condensed"', 'sans-serif'],
//     },

//      marquee: {
//           "0%": { transform: "translateX(100%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },

//           animation: {
//         marquee: "marquee 10s linear infinite",
//       }, 
//     },
//   },
//   plugins: [],
// }




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}"
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         slideInLeft: {
//           '0%': { transform: 'translateX(-100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideInRight: {
//           '0%': { transform: 'translateX(100%)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         sideToSide: {
//           '0%, 100%': { transform: 'translateX(0)' },
//           '50%': { transform: 'translateX(50px)' },
//         },
//         marquee: {
//           '0%': { transform: 'translateX(100%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//       animation: {
//         slideInLeft: 'slideInLeft 0.6s ease-out forwards',
//         slideInRight: 'slideInRight 0.6s ease-out forwards',
//         sideToSide: 'sideToSide 2s ease-in-out infinite',
//         marquee: 'marquee 10s linear infinite',
//       },
//       fontFamily: {
//         barlow: ['"Barlow Condensed"', 'sans-serif'],
//       },

//       //  animation: {
//       //   'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
//       // },

//         //  keyframes: {
//         marqueeBg: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '100%': { backgroundPosition: '100% 50%' },
//         },
//       // },
//       animation: {
//         marqueeBg: 'marqueeBg 15s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        // Slide in animations
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        // Side to side motion
        sideToSide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
        },

        // Text marquee
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        // Background sliding marquee
        marqueeBg: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },

      animation: {
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        sideToSide: 'sideToSide 2s ease-in-out infinite',
        marquee: 'marquee 10s linear infinite',
        marqueeBg: 'marqueeBg 20s linear infinite',
      },

      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
       
    },
  },
  plugins: [],
};
  



       

