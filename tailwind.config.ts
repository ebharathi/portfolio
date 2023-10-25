import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width:{
        '400':'400px',
        '300':'300px',
        '200':'200px',
        '100':'100px'
      },
      height:{
        '400':'400px',
        '300':'300px',
        '200':'200px',
        '100':'100px',
        '85':'75px'
      },
      borderWidth:{
        '1':'1px'
      },
      borderRadius:{
         
         'full':'50%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
