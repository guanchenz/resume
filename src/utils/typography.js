import Typography from "typography"
import lawtonTheme from "typography-theme-lawton"

// const typography = new Typography(lawtonTheme)

const typography = new Typography({
    baseFontSize: "12px",
    baseLineHeight: 1.55,
    headerFontFamily: [
        "Roboto",
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    bodyFontFamily: ["Roboto", "sans-serif"],
    googleFonts: [
        {
            name: 'Roboto',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ]
        }
    ],
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        p: {
          margin: 0,
          padding: 0
        },
        h4: {
            fontSize: '14px'
        },
        a: {
            fontFamily: "Roboto",
            color: 'inherit',
            // fontSize: 12,
            fontWeight: 'normal',
            textDecoration: 'none',
            lineHeight: 1.55
        }
      })
});

export default typography;