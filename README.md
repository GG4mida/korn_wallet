## Korn

模拟炒币（现货）、数字货币实时行情 & 资讯、最新空投信息等。基于 react-native 构建。

## 应用截图

> 如图片无法加载请开启 FQ 软件。

### light

<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-1.png?raw=true" width="260" alt="light-1"/>
<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-2.png?raw=true" width="260" alt="light-2"/>
<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-3.png?raw=true" width="260" alt="light-3"/>
<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-4.png?raw=true" width="260" alt="light-4"/>

### dark

<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-1.png?raw=true" width="260" alt="dark-1"/>
<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-2.png?raw=true" width="260" alt="dark-2"/>
<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-3.png?raw=true" width="260" alt="dark-3"/>
<img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-4.png?raw=true" width="260" alt="dark-4"/>

## 应用安装

### android

[apk 下载](https://www.baidu.com)

### ios

> 目前仅支持使用 testflight 进行安装，详细的安装步骤请参阅：[ios 安装](https://www.baidu.com)

## 开发设置

### react-native

首先参考 react-native 官方的环境配置说明：
https://reactnative.dev/docs/environment-setup

### ios

#### 环境要求

- macos Big Sur 及以上
- xcode 12.5.1 及以上

#### 运行步骤

定位至项目根目录：

```bash
yarn install
cd ios & pod install && cd ..
yarn ios
```

### 说明

- 建议使用 yarn 做为包管理器
- yarn ios & yarn android 命令，默认启动本机的 8081 端口做为 js 的 bundle 服务。如果 8081 端口被占用，请先解除占用
- 如果本地未运行后台接口服务，请直接配置 .env 配置文件中 API_URL=https://www.korndev.com
- code push 相关配置请参考官方文档说明：https://github.com/microsoft/react-native-code-push

## 免责声明

- 本项目使用到的行情及资讯数据，均来自于币安，本应用不会修改任何接口数据。
- 本项目代码仅供学习交流，如用于商业用途造成任何负面影响，与代码贡献人员无关。

## License

[BSD](https://www.wikiwand.com/en/BSD_licenses)
[LICENSE](/LICENSE)

```

```
