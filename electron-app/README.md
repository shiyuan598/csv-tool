# My Electron App

这是一个简单的 Electron 桌面应用示例，包含：

- 加载本地 HTML 页面
- 使用 Electron Builder 打包成 Windows 安装程序（`.exe`）

---

## 🧰 环境要求

- Node.js >= 16.x
- npm >= 8.x

---

## 📦 安装依赖

首次安装依赖前建议设置淘宝镜像源，避免 Electron 下载失败：

```bash
npm config set registry https://registry.npmmirror.com
```

然后安装依赖：

```bash
npm install
```
## 🚀 启动应用（开发模式）
```bash
npm start
```

## 🏗️ 打包应用（Windows）
使用 Electron Builder 打包成 Windows 安装程序：

```bash
npm run package-win
```

打包完成后，在 `dist` 目录下会生成 `win-unpacked` 文件夹，其中包含可执行 文件。
```

## 🍎 打包 macOS（可选）
```
使用 Electron Builder 打包成 macOS 应用：

```bash
npm run package-mac
```