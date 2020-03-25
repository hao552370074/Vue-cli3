module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: {
    devServer: {
      port: 8080,
      open: true
    }
  }
};
