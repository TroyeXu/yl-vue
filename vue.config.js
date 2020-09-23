module.exports = {
  // 修改 src 目錄 為 examples 目錄
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js', // 把src 修改為examples
      // 模板來源
      template: 'public/index.html',
      // 在 dist/index.html 的輸出
      filename: 'index.html',
    },
  },
  // 擴展 webpack 配置，使 packages 加入編譯
  /* chainWebpack 是一個函數，會接收一個基於 webpack-chain 的 ChainableConfig 實例。允許對內部的 webpack 配置進行更細粒度的修改。 */
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add(__dirname + 'packages') // 注意這裡需要絕對路徑，所有要拼接__dirname
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的選項...
        return options
      })
  },
}
