---
sidebarShare: true
prev: false
next: false
---

# [Linux Mint](/linuxmint/) Mirror

Linux Mint 也采用 apt 作为包管理器，与 Ubuntu 和 Debian 类似，你需要编辑 `/etc/apt/sources.list` 和 `/etc/apt/sources.list.d/*` 中的路径。对于来自 Ubuntu 的部分源，可以参考 Ubuntu 镜像使用帮助进行修改。

以 sonya 为例，需要修改 `/etc/apt/sources.list.d/mint.list` ，把 `packages.linuxmint.com` 替换为 `mirrors.sustech.edu.cn/linuxmint` ：

```text
deb http://mirrors.sustech.edu.cn/linuxmint/ sonya main upstream import backport
```

然后运行 `apt update` 即可。

## 参考

- [https://mirrors.tuna.tsinghua.edu.cn/help/linuxmint/](https://mirrors.tuna.tsinghua.edu.cn/help/linuxmint/)

