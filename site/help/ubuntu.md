---
sidebarShare: true
prev: false
next: false
---

# [Ubuntu](https://mirrors.sdust.edu.cn/ubuntu/) 源使用帮助

## 介绍

[Ubuntu](https://ubuntu.com/) 是一个基于 Debian 的 Linux 发行版。

## 使用指南

首先，通过下面命令备份原本的配置。

``` sh
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
```

其次，通过下面的命令将软件源换成本镜像站。

``` sh
sudo sed -i "s@http://.*archive.ubuntu.com@https://mirrors.sdust.edu.cn@g" /etc/apt/sources.list
```

::: tip
因为镜像站与上游同步有延迟，可能会导致系统不能及时检查、安装上最新的安全更新，所以不建议替换 security 源。如果需要更换的话，请通过执行下面命令更换 `sudo sed -i "s@http://.*security.ubuntu.com@https://mirrors.sdust.edu.cn@g" /etc/apt/sources.list`
:::

最后，通过下面命令刷新缓存。

``` sh
sudo apt-get update
```
