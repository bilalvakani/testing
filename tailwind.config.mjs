// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ['Work Sans'],
      },
      screens: {
        sm: { min: '412px', max: '915px' }, // 🔁 custom "sm" range
      },
    },
  },
  plugins: [],
};
