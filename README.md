# stylelint-config-kanas

> This package provides Kanas's CSS .stylelintrc (with BEM plugin) as an extensible shared config.

## Installation

```bash

# npm
npm install stylelint @kanas/stylelint-config-kanas -D

# yarn
yarn add stylelint @kanas/stylelint-config-kanas -D

```

## Usage

You can create a file .stylelintrc.js in the project root directory,Configuration is as follows:

```javascript
// .stylelintrc.js
module.exports = {
  extends: ["@kanas/stylelint-config-kanas"]
};
```

## Further Reading

- [StyleLint Configs](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md)
