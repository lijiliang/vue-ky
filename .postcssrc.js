// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['iOS >= 8','Android >= 4.1']
    },
    "postcss-pxtorem": {
      rootValue: 100,
      propWhiteList: [],
    }
  }
}
