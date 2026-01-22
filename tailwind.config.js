/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  // Оптимизация: сканирование всех файлов для удаления неиспользуемых стилей
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // Дополнительные опции для production оптимизации
  future: {
    hoverOnlyWhenSupported: true, // Hover только на устройствах с поддержкой
  },
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Success/Warning/Info colors
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        // Gray scale for UI elements
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Custom burgundy palette
        burgundy: {
          50: "#AA506A",   // lightest
          100: "#AA3252",  // light
          DEFAULT: "#56051B", // primary/main
          500: "#56051B",  // primary/main (alias)
          700: "#40121F",  // dark
          900: "#370111",  // darkest
        },
        // Chart colors for data visualization
        chart: {
          1: '#56051B', // burgundy (primary)
          2: '#0D0101', // black
          3: '#AA506A', // burgundy light
          4: '#38BDF8', // sky blue
          5: '#FB923C', // orange
          6: '#A78BFA', // purple
          7: '#34D399', // emerald
          8: '#FBBF24', // amber
          9: '#F472B6', // pink
          10: '#4ADE80', // green
        },
        // Status colors for lesson/course statuses
        status: {
          pending: '#F59E0B',      // amber-500
          'in-progress': '#3B82F6', // blue-500
          completed: '#10B981',     // green-500
          cancelled: '#6B7280',     // gray-500
          expired: '#EF4444',       // red-500
          draft: '#8B5CF6',         // violet-500
        },
        // Level colors for language proficiency levels
        level: {
          'a1': '#86EFAC',  // green-300 (beginner)
          'a2': '#4ADE80',  // green-400
          'b1': '#FBBF24',  // amber-400 (intermediate)
          'b2': '#FB923C',  // orange-400
          'c1': '#F472B6',  // pink-400 (advanced)
          'c2': '#A855F7',  // purple-500 (proficient)
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
      },
      fontSize: {
        'hero': ['82px', { lineHeight: '100%', letterSpacing: '-2.46px', fontWeight: '600' }],
        'subhero': ['34px', { lineHeight: '115%', fontWeight: '500' }],
        'caption-dark': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height, auto)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height, auto)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "zoom-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "zoom-in": "zoom-in 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
