module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "./bundle.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".ts", ".tsx", ".json"]
  },
  devServer: {
    publicPath: "/dist/",
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
