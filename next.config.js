const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.externals = [];

    config.plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    );

    config.module.rules.push(
      {
        test: /\.scss$/,
        exclude: /main\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?importLoaders=1&modules&localIdentName=[name]---[local]---[hash:base64:5]',
          'sass-loader'
        ]
      },
    )

    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /main\.scss/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader?importLoaders=1&modules&localIdentName=[name]---[local]---[hash:base64:5]',
        ]
      },
    )

    // config.resolve.extensions.push('css');

    // config.module.rules.push(
    //   {
    //     test: /\.(scss|css)$/,
    //     include: /node_modules/,
    //     use: [
    //     {
    //       loader: 'css-loader',
    //         options: {
    //           importLoaders: 1,
    //           modules: true,
    //           localIdentName: '[name]__[local]___[hash:base64:5]'
    //         }
    //       }
    //     ]
    //   },
    // )

    // if (!isServer) {
    //   config.optimization = {
    //     ...config.optimization,
    //     splitChunks: {
    //       chunks: 'all',
    //       name: false,
    //     },
    //     // Keep the runtime chunk seperated to enable long term caching
    //     // https://twitter.com/wSokra/status/969679223278505985
    //     runtimeChunk: {name: 'static/runtime/webpack.js'},
    //   }
    // }
    // console.log('TEST', config)
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}
