---
sidebarShare: true
prev: false
next: false
---

# [Zerotier](/zerotier/) Mirror

## 介绍

>ZeroTier creates secure networks between on-premise, cloud, desktop, and mobile devices.

## 安装

### Windows

下载 [https://mirrors.sustech.edu.cn/zerotier/dist/ZeroTier%20One.msi](https://mirrors.sustech.edu.cn/zerotier/dist/ZeroTier%20One.msi) 并安装。

### MacOS

下载 [https://mirrors.sustech.edu.cn/zerotier/dist/ZeroTierOne.pkg](https://mirrors.sustech.edu.cn/zerotier/dist/ZeroTierOne.pkg) 并安装。

### Linux

下载安装脚本，修改安装域名，添加南科大镜像源：

```shell
curl https://install.zerotier.com/ | sed 's,download.zerotier.com/,mirrors.sustech.edu.cn/zerotier/,g' | sudo bash
```

安装zerotier-one（以Debian/Ubuntu为例）：

``` sh
sudo apt-get update
sudo apt install zerotier-one
```

### 其他系统

请在添加软件源后/下载时，替换官方的下载链接中的`download.zerotier.com/`为`mirrors.sustech.edu.cn/zerotier/`。

## 参考

- [https://www.zerotier.com/download/](https://www.zerotier.com/download/)