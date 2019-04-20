// 💄 StyleLint 💄
module.exports = {
  // =====================================================================
  // Style Color Rules
  // =====================================================================
  // https://stylelint.docschina.org/user-guide/rules/color-no-invalid-hex/
  "color-no-invalid-hex": true,
  // https://stylelint.docschina.org/user-guide/rules/color-hex-case/
  "color-hex-case": "lower",
  // https://stylelint.docschina.org/user-guide/rules/color-named/
  "color-named": "never",
  // https://stylelint.docschina.org/user-guide/rules/color-hex-length/
  "color-hex-length": "long",

  // =====================================================================
  // Style Function Rules
  // =====================================================================
  // https://stylelint.docschina.org/user-guide/rules/function-calc-no-invalid/
  "function-calc-no-invalid": true,
  // https://stylelint.docschina.org/user-guide/rules/function-calc-no-unspaced-operator/
  "function-calc-no-unspaced-operator": true,
  // https://stylelint.docschina.org/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
  "function-linear-gradient-no-nonstandard-direction": true,

  // =====================================================================
  // Style Block Rules
  // =====================================================================
  // https://stylelint.docschina.org/user-guide/rules/no-duplicate-at-import-rules/
  "no-duplicate-at-import-rules": true,
  // https://stylelint.docschina.org/user-guide/rules/declaration-block-no-duplicate-properties/
  "declaration-block-no-duplicate-properties": [
    true,
    {
      ignore: ["consecutive-duplicates"]
    }
  ],
  // https://stylelint.docschina.org/user-guide/rules/declaration-block-no-shorthand-property-overrides/
  "declaration-block-no-shorthand-property-overrides": true,
  // https://stylelint.docschina.org/user-guide/rules/declaration-block-single-line-max-declarations/
  "declaration-block-single-line-max-declarations": 1,
  // https://stylelint.docschina.org/user-guide/rules/block-no-empty/
  "block-no-empty": true,
  // https://stylelint.docschina.org/user-guide/rules/comment-no-empty/
  "comment-no-empty": true,
  // https://stylelint.docschina.org/user-guide/rules/no-invalid-double-slash-comments/
  "no-invalid-double-slash-comments": true,
  // https://stylelint.docschina.org/user-guide/rules/font-family-no-missing-generic-family-keyword/
  "font-family-no-missing-generic-family-keyword": null,
  // https://stylelint.docschina.org/user-guide/rules/no-descending-specificity/
  "no-descending-specificity": null,

  // =====================================================================
  // Style Unit Rules
  // =====================================================================
  // https://stylelint.docschina.org/user-guide/rules/unit-blacklist/
  "unit-blacklist": ["em", "dpi", "pt"],
  // https://stylelint.docschina.org/user-guide/rules/length-zero-no-unit/
  "length-zero-no-unit": true,
  // https://stylelint.docschina.org/user-guide/rules/number-leading-zero/
  "number-leading-zero": "always",
  // https://stylelint.docschina.org/user-guide/rules/number-no-trailing-zeros/
  "number-no-trailing-zeros": true,

  // =====================================================================
  // Style Prefix Rules
  // =====================================================================
  // ⚠️ PostCSS Built-in Plugin autoprefixer will fix prefix ⚠️
  // https://stylelint.docschina.org/user-guide/rules/media-feature-name-no-vendor-prefix/
  "media-feature-name-no-vendor-prefix": true,
  // https://stylelint.docschina.org/user-guide/rules/at-rule-no-vendor-prefix/
  "at-rule-no-vendor-prefix": true,
  // https://stylelint.docschina.org/user-guide/rules/selector-no-vendor-prefix/
  "selector-no-vendor-prefix": true,
  // https://stylelint.docschina.org/user-guide/rules/property-no-vendor-prefix/
  "property-no-vendor-prefix": true,
  // https://stylelint.docschina.org/user-guide/rules/value-no-vendor-prefix/
  "value-no-vendor-prefix": true
};
