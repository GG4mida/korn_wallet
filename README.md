## korn_wallet

模拟炒币（现货）、数字货币实时行情 & 资讯、最新空投信息等。基于 `react-native` 构建。

## 配套

- 对应后台服务：[korn_service](https://github.com/GG4mida/korn_service)
- 对应后台管理：[korn_web](https://github.com/GG4mida/korn_web)

## 应用截图

> 如图片无法加载请开启 `FQ` 软件。

### Light

<div>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-1.png?raw=true" width="320" alt="light-1"/>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-2.png?raw=true" width="320" alt="light-2"/>
</div>

---

<div>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-3.png?raw=true" width="320" alt="light-3"/>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/light-4.png?raw=true" width="320" alt="light-4"/>
</div>

### Dark

<div>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-1.png?raw=true" width="320" alt="dark-1"/>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-2.png?raw=true" width="320" alt="dark-2"/>
</div>

---

<div>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-3.png?raw=true" width="320" alt="dark-3"/>
  <img src="https://github.com/GG4mida/korn_wallet/blob/main/screenshot/dark-4.png?raw=true" width="320" alt="dark-4"/>
</div>

## 应用安装

### Android

> 暂不提供 `apk` 安装包。

### IOS

> 暂不提供 `ios` 安装包。两个原因：1 是国内的应用商店，对于区块链相关应用的上架比较敏感，2 是作者目前没有开发者账号。

> 想跑起来看一下的朋友，可 clone 本项目，以及 [korn_service](https://github.com/GG4mida/korn_service)（后台服务），以及 [korn_web](https://github.com/GG4mida/korn_web)（后台简易管理，可选），按相关说明运行即可。

## 开发设置

### react-native

首先参考 `react-native` 官方的环境配置说明：
[https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

### IOS

#### 环境要求

- macos Big Sur 及以上
- xcode 12.5.1 及以上
- nodejs v10.0.0+

#### 配置修改

> `.env` 文件中修改接口地址

#### 运行步骤

定位至项目根目录：

```bash
  yarn install
  cd ios & pod install && cd ..
  yarn ios or yarn android
```

### 说明

- 建议使用 `yarn` 做为包管理器
- yarn ios & yarn android 命令，默认启动本机的 8081 端口做为 js 的 bundle 服务。如果 8081 端口被占用，请先解除占用
- 如果本地未运行后台接口服务，请直接配置 .env 配置文件中 API_URL=https://www.korndev.com
- code push 相关配置请参考官方文档说明：[https://github.com/microsoft/react-native-code-push](https://github.com/microsoft/react-native-code-push)

## 联系

- 可直接提 issue
- 小飞机：[@kornchain](https://t.me/kornchain)

## 免责声明

- 本项目使用到的行情及资讯数据，均来自于币安，本应用不会修改任何接口数据。
- 本项目代码仅供学习交流，如用于商业用途造成任何负面影响，与代码贡献人员无关。

## License

[BSD](https://www.wikiwand.com/en/BSD_licenses)
