const styleRules = require("./rule");

module.exports = {
  // BEM Style Guide 👉 http://getbem.com/naming/ 
  // or https://en.bem.info/methodology/naming-convention/#naming-rules
  plugins: ["@namics/stylelint-bem"],
  extends: ["stylelint-config-standard"],
  rules: {
    // 👀  https://github.com/namics/stylelint-bem-namics#configuration
    "plugin/stylelint-bem-namics": {
      patternPrefixes: [],
      helperPrefixes: [],
    },
    ...styleRules
  }
}