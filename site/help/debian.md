---
sidebarShare: true
prev: false
next: false
---

# [Debian](/debian/) 镜像

## 介绍

[Debian](https://www.debian.org/) 是一个由社区支持的 Linux 发行版。

## 使用指南

首先，通过下面命令备份原本的配置。

``` sh
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
```

其次，通过下面的命令将软件源换成本镜像站。

``` sh
sudo sed -i 's/deb.debian.org/mirrors.sdust.edu.cn/g' /etc/apt/sources.list
```

最后，通过下面命令刷新缓存。

``` sh
sudo apt-get update
```
