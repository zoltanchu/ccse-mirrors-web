---
sidebarShare: true
prev: false
next: false
---

# [ROS2](/ros2/) Mirror

新建 `/etc/apt/sources.list.d/ros2-latest.list`，内容为（以`Ubuntu 20.04 LTS `为例）：

```
deb https://mirrors.sustech.edu.cn/ros2/ubuntu/ focal main
```

然后再输入如下命令，信任 ROS 的 GPG Key，并更新索引：

```
sudo apt install curl gnupg2
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
sudo apt update
```

Reference: https://index.ros.org/doc/ros2/Installation/Crystal/Linux-Install-Binary/

## 参考

- [https://mirrors.tuna.tsinghua.edu.cn/help/ros2/](https://mirrors.tuna.tsinghua.edu.cn/help/ros2/)

