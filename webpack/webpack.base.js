const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const outputDir = path.join(__dirname, "../dist");
  const srcDir = path.join(__dirname, "src");

  return {
    target: "web",
    entry: "./src/index.ts",
    output: {
      path: path.join(outputDir),
      filename: path.join("js", "bundle.js"),
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/,
        },

        {
          test: /\.(gif|png|jpg|svg)$/,
          use: "file-loader",
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: ["url-loader?limit=100000"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
    ],
  };
};
