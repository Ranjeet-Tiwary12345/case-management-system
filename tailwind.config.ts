import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        charcoal: '#111827',
        stone: '#f5f3ef',
        gold: '#c8a86a',
        line: '#d7d0c2'
      },
      boxShadow: {
        soft: '0 18px 36px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
