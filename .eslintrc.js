module.exports = {
  "rules": {},
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  }
};
