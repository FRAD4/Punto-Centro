// ====== Punto Centro Fitness — Tailwind Design Tokens ======
// Este archivo se carga ANTES que el CDN de Tailwind

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed": "#001f28",
        "on-surface": "#e5e2e1",
        "secondary": "#c6c6c7",
        "on-secondary-fixed-variant": "#454747",
        "on-primary": "#003543",
        "surface-container": "#201f1f",
        "on-surface-variant": "#bbc9cf",
        "tertiary-container": "#feb127",
        "on-background": "#e5e2e1",
        "surface-dim": "#131313",
        "surface": "#131313",
        "error": "#ffb4ab",
        "inverse-surface": "#e5e2e1",
        "on-secondary-container": "#b4b5b5",
        "on-error": "#690005",
        "primary": "#a4e6ff",
        "primary-container": "#00d1ff",
        "outline-variant": "#3c494e",
        "surface-container-highest": "#353534",
        "tertiary-fixed-dim": "#ffba49",
        "primary-fixed-dim": "#4cd6ff",
        "on-tertiary-fixed": "#291800",
        "primary-fixed": "#b7eaff",
        "surface-container-low": "#1c1b1b",
        "on-primary-fixed-variant": "#004e60",
        "surface-tint": "#4cd6ff",
        "outline": "#859399",
        "on-tertiary": "#442b00",
        "inverse-on-surface": "#313030",
        "on-secondary": "#2f3131",
        "on-primary-container": "#00566a",
        "tertiary": "#ffd59c",
        "inverse-primary": "#00677f",
        "surface-container-high": "#2a2a2a",
        "background": "#131313",
        "surface-container-lowest": "#0e0e0e",
        "surface-variant": "#353534",
        "on-secondary-fixed": "#1a1c1c",
        "secondary-fixed-dim": "#c6c6c7",
        "surface-bright": "#3a3939",
        "on-tertiary-container": "#6b4700",
        "on-error-container": "#ffdad6",
        "tertiary-fixed": "#ffddb1",
        "error-container": "#93000a",
        "secondary-fixed": "#e2e2e2",
        "on-tertiary-fixed-variant": "#624000",
        "secondary-container": "#454747"
      },
      borderRadius: {
        DEFAULT: "0rem",
        lg: "0rem",
        xl: "0rem",
        full: "9999px"
      },
      spacing: {
        gutter: "16px",
        unit: "4px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "max-width": "1280px"
      },
      fontFamily: {
        "headline-lg-mobile": ["Archivo Narrow"],
        "headline-lg": ["Archivo Narrow"],
        "body-md": ["Geist"],
        "headline-md": ["Archivo Narrow"],
        "body-lg": ["Geist"],
        "label-caps": ["Geist"],
        "display-lg": ["Archivo Narrow"]
      },
      fontSize: {
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  }
};
