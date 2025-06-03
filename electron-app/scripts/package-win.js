const packager = require('electron-packager')
const path = require('path')

const options = {
  dir: '.', // 当前目录
  name: 'MyApp', // App 名字
  platform: 'win32', // Windows
  arch: 'x64', // 架构：你也可以设成 ['x64', 'ia32'] 适配双版本
  electronVersion: '36.3.2', // Electron 版本
  overwrite: true, // 覆盖已有输出
  out: 'dist', // 输出目录
  electronZip: path.resolve(__dirname, '../electron-zip/electron.exe'),
  icon: path.resolve(__dirname, '../assets/icon.ico'), // Windows 必须用 .ico
  win32metadata: {
    CompanyName: 'Your Company',
    FileDescription: 'Your App Description',
    ProductName: 'MyApp'
  }
}

packager(options)
  .then(appPaths => {
    console.log('✅ Windows 打包成功！输出路径：', appPaths)
  })
  .catch(err => {
    console.error('❌ Windows 打包失败：', err)
  })
