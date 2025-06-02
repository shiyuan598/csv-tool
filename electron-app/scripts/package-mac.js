const packager = require('electron-packager')
const path = require('path')

packager({
  dir: '.',
  name: 'MyApp',
  platform: 'darwin',
  arch: 'arm64',
  electronVersion: '36.3.2',
  overwrite: true,
  out: 'dist',
  electronZip: path.resolve(__dirname, '../electron-zip/electron-v36.3.2-darwin-arm64.zip')
}).then(appPaths => {
  console.log('✅ 打包成功：', appPaths)
}).catch(err => {
  console.error('❌ 打包失败：', err)
})
