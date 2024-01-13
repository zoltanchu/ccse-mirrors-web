---
sidebarShare: true
prev: false
next: false
---

# [Arch Linux](https://mirrors.sdust.edu.cn/archlinux/) 源使用帮助


## 介绍

[Arch Linux](https://archlinux.org) 是一个轻量的、灵活的 Linux 发行版，遵循 K.I.S.S. 原则。

## 使用说明

编辑 `/etc/pacman.d/mirrorlist`，在文件的最顶端添加

``` toml
Server = https://mirrors.sdust.edu.cn/archlinux/$repo/os/$arch
```

::: tip
国内用户，推荐另外使用 Arch Linux CN 源，请参考 [Arch Linux CN 源使用帮助](https://mirrors.sdust.edu.cn/help/archlinuxcn.html)
:::

