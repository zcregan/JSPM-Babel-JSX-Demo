System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "jsx": "github:zcregan/plugin-babeljsx@master",
    "github:zcregan/plugin-babeljsx@master": {
      "babel": "npm:babel@4.7.13"
    }
  }
});

