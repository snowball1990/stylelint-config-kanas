const styleRules = require("./rule");

module.exports = {
  // BEM Style Guide 👉 http://getbem.com/naming/
  // or https://en.bem.info/methodology/naming-convention/#naming-rules
  plugins: ["stylelint-order", "@namics/stylelint-bem"],
  extends: ["stylelint-config-standard"],
  rules: {
    // =====================================================================
    // Style Name Rules
    // =====================================================================
    // 👀  https://github.com/namics/stylelint-bem-namics#configuration
    "plugin/stylelint-bem-namics": {
      patternPrefixes: [],
      helperPrefixes: []
    },
    // =====================================================================
    // Style Order Rules
    // =====================================================================
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    "order/order": [
      "custom-properties",
      "at-variables",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules"
    ],
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    "order/properties-order": [
      {
        groupName: "dimensions",
        emptyLineBefore: "always",
        properties: [
          "width",
          "height",
          "min-width",
          "min-height",
          "max-width",
          "max-height",
          "margin",
          "margin-left",
          "margin-right",
          "margin-bottom",
          "margin-top",
          "padding",
          "padding-left",
          "padding-right",
          "padding-bottom",
          "padding-top"
        ]
      },
      {
        groupName: "font",
        emptyLineBefore: "always",
        properties: [
          "font-family",
          "font-size",
          "font-weight",
          "text-align",
          "text-indent",
          "text-decoration",
          "vertical-align",
          "line-height"
        ]
      },
      {
        groupName: "appearance",
        emptyLineBefore: "always",
        properties: [
          "stroke",
          "stroke-width",
          "stroke-linecap",
          "stroke-dashoffset",
          "stroke-dasharray",
          "fill",
          "color",
          "background",
          "background-color",
          "border",
          "border-radius",
          "box-shadow",
          "filter",
          "opacity",
          "visibility",
          "overflow",
          "cursor"
        ]
      },
      {
        groupName: "layout",
        emptyLineBefore: "always",
        properties: [
          "display",
          "flex",
          "flex-shrink",
          "flex-direction",
          "grid",
          "grid-area",
          "grid-template-columns",
          "grid-template-rows",
          "grid-template-areas",
          "grid-gap",
          "justify-content",
          "align-items",
          "float",
          "position",
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      {
        groupName: "others",
        emptyLineBefore: "always",
        properties: [
          "tranform", 
          "animation", 
          "z-index"
        ]
      }
    ],
    ...styleRules
  }
};
