module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      tablet : "1024px",
      lg: "1200px",  
      xl: "1400px",
    },
  },
};