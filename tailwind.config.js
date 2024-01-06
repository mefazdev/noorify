/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito': ['Nunito', 'sans-serif'],
  
      },
      height: {
        '102': '26rem',
      },
      width:{
        '102': '31rem'
      },
      
       fontWeight:{
        'ultra':'900'
       }
       ,

       keyframes: {
        tooltip_show: {
          '0%' : { visibility: 'hidden', opacity: '0'},
          '15%' : { visibility: 'hidden', opacity: '0'},
          '20%' : { visibility: 'visible', opacity: '0'},
          '70%' : { visibility: 'visible', opacity: '0'},
          '100%' : { visibility: 'visible', opacity: '10'},
        }
       
      },
      animation: {
        tooltip_show: 'tooltip_show 1s ease forwards',
      }
    },
  
  variants: {
    extend: {
      width: ['hover'],
      animation: ['group-hover'],
    },
    },
    
  },   
  plugins: [],  
}