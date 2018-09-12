# Lasagnia 🥧
`V1.0`

[![Build Status](https://travis-ci.org/NickitaX/lasagnia.svg?branch=master)](https://travis-ci.org/NickitaX/lasagnia)

> NPM module which helps with project file integrity check. Lasagnia checks for required files/folders declared in configuration file.

## Build Setup

In order to add Lasagnia to your project, run:
``` bash
npm i --save-dev lasagnia
```

Lasagnia requires `.recipe.json` configuration file in your root directory.

Example of `.recipe.json` configuration file:

```json
{
  "project": {
    "folders": [
      "lib",
      "node_modules",
      "test",
      "test/lib"
    ],
    "files": [
      "lib/utils.js",
      "test/lib/utilsTest.js"
    ]
  }
}
```

To add Lasagnia as a part of Node automated script execution, add to your `package.json`:
```json
{
  "scripts": {
    "lasagnia_check": "lasagnia"
  }
}
```

And after you will be able to run Lasagnia check with:
``` bash
npm run lasagnia_check
```

Feel free to contribute!

