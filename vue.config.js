const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: NODE_ENV === 'development' ? './src/main.js' : './src/index.js',
  outputDir: 'dist',
}
