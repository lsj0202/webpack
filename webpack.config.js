const path = require("path");

module.exports = {
  // 웹팩의 시작점
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: {
    // public 이라는 하위 폴더에 결과물을 갖다놔 주세요
    path: path.resolve(__dirname, "public"),
    // 번들링이 되길 원하는 파일 이름 작성하기
    filename: "[name]_bundle.js",
  },
  module: {
    // style-loader 번들링된 css를 웹페이지 안에 style태그로 주입시켜줌
    // css-loader 웹팩을 동작 시켰을때 확장자가 css라면 웹팩이 알아서 css인 파일을 웹팩 안으로 로드시켜줌
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  mode: "development",
};
