// forge.config.js
module.exports = {
  packagerConfig: {
    prune: true,
    icon: "./assets/icon", // 不带文件扩展名，如有图标就放 app-icon.ico
    ignore: [
      /\/tests?/,
      /\/__mocks__?/,
      /\.git/,
      /node_modules\/.*\/(test|example|docs)/,
      /\.md$/,
      /\.map$/,
      /forge\.config\.js/,
      /webpack\.config\.js/,
    ],
  },
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["win32"],
    },
    // {
    //   name: "@electron-forge/maker-squirrel",
    //   config: {
    //     name: "my_electron_app",
    //     authors: "你的名字",
    //     description: "这是我的Electron桌面应用",
    //     exe: "my-electron-app.exe",
    //     setupExe: "my-electron-app-setup.exe",
    //     noMsi: true, // 不生成 .msi 安装器，只生成 .exe 安装器
    //     nugetExePath: "./nuget.exe",
    //   },
    // },
  ],
};
