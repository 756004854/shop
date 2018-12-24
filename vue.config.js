const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
}

module.exports = {
  devServer: {
      port: 8080,
      proxy: {
          '/api': {
              target: 'https://api.bzqll.com/',  // target host
              ws: true,  // proxy websockets 
              changeOrigin: true,  // needed for virtual hosted sites
              pathRewrite: {
                  '^/api': ''  // rewrite path
              }
          },
      }
  }
};