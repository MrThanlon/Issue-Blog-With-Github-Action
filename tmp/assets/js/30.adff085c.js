(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{125:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"xavier-配置记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xavier-配置记录"}},[s._v("#")]),s._v(" Xavier 配置记录")]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("@author: folezhang")])])]),s._v(" "),n("h2",{attrs:{id:"构建工具及依赖项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建工具及依赖项"}},[s._v("#")]),s._v(" 构建工具及依赖项")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# catkin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y python-catkin-tools\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# glog")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libgoogle-glog-dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gflags")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libgflags-dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zlib")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y zlib1g\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# qt5.0+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y qtcreator qt5-default\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ffmpeg")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y ffmpeg\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pangolin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libgl1-mesa-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libglew-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y cmake\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/stevenlovegrove/Pangolin.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Pangolin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\ncmake --build "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ceres")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y cmake\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libgoogle-glog-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libatlas-base-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libeigen3-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libsuitesparse-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://ceres-solver.googlesource.com/ceres-solver\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ceres-solver "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" camke "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),n("h2",{attrs:{id:"硬件驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#硬件驱动"}},[s._v("#")]),s._v(" 硬件驱动")]),s._v(" "),n("h3",{attrs:{id:"realsense"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#realsense"}},[s._v("#")]),s._v(" RealSense")]),s._v(" "),n("p",[s._v("驱动安装参考链接："),n("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense/blob/master/doc/installation_jetson.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("librealsense installation jetson"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key adv --keyserver keys.gnupg.net --recv-key F6E65AC044F831AC80A06380C8B3A55A6F3EFCDE "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-key F6E65AC044F831AC80A06380C8B3A55A6F3EFCDE\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://realsense-hw-public.s3.amazonaws.com/Debian/apt-repo bionic main"')]),s._v(" -u\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y librealsense2-utils\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y librealsense2-dev\n")])])]),n("p",[s._v("验证状态：成功。")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证指令")]),s._v("\nrealsense-viewer\n")])])]),n("h3",{attrs:{id:"realsense-ros"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#realsense-ros"}},[s._v("#")]),s._v(" RealSense ros")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 依赖项")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ros-melodic-ddynamic-reconfigure\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 下载源码并使用 catkin 编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/IntelRealSense/realsense-ros.git\n")])])]),n("p",[s._v("验证状态：成功。")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证指令")]),s._v("\nroslaunch realsense2_camera rs_camera.launch\n")])])]),n("h3",{attrs:{id:"kinect-仅支持一代和二代"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kinect-仅支持一代和二代"}},[s._v("#")]),s._v(" Kinect [仅支持一代和二代]")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考链接：https://www.ncnynl.com/archives/201912/3484.html")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# libfreenect2 安装：https://github.com/OpenKinect/libfreenect2/blob/master/README.md#linux")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/OpenKinect/libfreenect2\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" libfreenect2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载并安装依赖")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" depends\n./download_debs_trusty.sh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential cmake pkg-config\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i debs/libusb*deb\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libturbojpeg libjpeg-turbo8-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i debs/libglfw3*deb\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" -DCMAKE_INSTALL_PREFIX"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/freenect2  -DENABLE_CXX11"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ON\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j4\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 usb 权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" platform/linux/udev/90-kinect2.rules /etc/udev/rules.d/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安装完成，请重启 xavier 后验证"')]),s._v("\n")])])]),n("ol",[n("li",[s._v("如果出现 "),n("code",[s._v("libGL.so")]),s._v(" 错误，请按以下步骤安装 "),n("code",[s._v("libglvnd")]),s._v(" 并修复链接:")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考链接：https://devtalk.nvidia.com/default/topic/1044109/jetson-agx-xavier/no-usr-lib-aarch64-linux-gnu-tegra-libgl-so-0-with-jetpack-4-4-1/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libxext-dev libx11-dev x11proto-gl-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/NVIDIA/libglvnd.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" libglvnd\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./autogen.sh\n./configure\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j4\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认安装路径为 /usr/local/lib/aarch64-linux-gnu/libGL.so")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后删除掉原来的 libGL.so，重新建立链接")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm /usr/lib/aarch64-linux-gnu/libGL.so")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /usr/local/lib/aarch64-linux-gnu/libGL.so /usr/lib/aarch64-linux-gnu/libGL.so")]),s._v("\n")])])]),n("p",[s._v("验证状态：该驱动仅适用于 kinect 一代和二代，不支持 kinect for azure 。")]),s._v(" "),n("p",[s._v("说明：kinect for xavier 目前不支持 arm 平台，官方计划在近期加入，进度见："),n("code",[s._v("https://github.com/microsoft/Azure-Kinect-Sensor-SDK/issues/871")])]),s._v(" "),n("h3",{attrs:{id:"velodyne"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#velodyne"}},[s._v("#")]),s._v(" Velodyne")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载源码并用 catkin build 编译即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ros-drivers/velodyne.git\n")])])]),n("ol",[n("li",[s._v("报错 "),n("code",[s._v("fatal error: pcap.h: No such file or directory")]),s._v("，需要安装 "),n("code",[s._v("pcap")]),s._v(" 依赖库："),n("code",[s._v("sudo apt install libpcap-dev")])])]),s._v(" "),n("p",[s._v("验证状态：成功。")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证指令")]),s._v("\nroslaunch velodyne_pointcloud laserscan_nodelet.launch\n")])])]),n("h2",{attrs:{id:"系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统"}},[s._v("#")]),s._v(" 系统")]),s._v(" "),n("h3",{attrs:{id:"orb-slam-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#orb-slam-2"}},[s._v("#")]),s._v(" ORB SLAM 2")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 依赖库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libeigen3-dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 下载源码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/raulmur/ORB_SLAM2.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ORB_SLAM2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x build.sh\n./build.sh\n")])])]),n("ol",[n("li",[n("p",[s._v("编译时缺少 "),n("code",[s._v("Pangolin")]),s._v("，从"),n("a",{attrs:{href:"https://github.com/stevenlovegrove/Pangolin",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码"),n("OutboundLink")],1),s._v("编译安装 "),n("code",[s._v("Pangolin")]),s._v(" 即可，安装脚本见前文。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("usleep")]),s._v(" 语句报错，参考这条 "),n("a",{attrs:{href:"https://github.com/raulmur/ORB_SLAM2/issues/337",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),n("OutboundLink")],1),s._v(" 解决，为 "),n("code",[s._v("include/System.h")]),s._v(" 添加 "),n("code",[s._v("include <unistd.h>")]),s._v(" 头文件即可。")])])]),s._v(" "),n("h3",{attrs:{id:"vins-fusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vins-fusion"}},[s._v("#")]),s._v(" VINS Fusion")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 下载源码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/HKUST-Aerial-Robotics/VINS-Fusion\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 编译安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/vins-workspace/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" VINS-Fusion ~/vins-workspace/src\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/vins-workspace\ncatkin build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'source ~/vins-workspace/devel/setup.bash'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])])]),n("ol",[n("li",[s._v("提示缺少 "),n("code",[s._v("ceres")]),s._v("，从源码编译安装即可，安装脚本见前文。")])]),s._v(" "),n("p",[s._v("验证状态：成功。")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证指令")]),s._v("\nroslaunch vins vins_rviz.launch\n")])])]),n("h3",{attrs:{id:"elastic-fusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#elastic-fusion"}},[s._v("#")]),s._v(" Elastic Fusion")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y cmake-qt-gui "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" build-essential libusb-1.0-0-dev libudev-dev freeglut3-dev libglew-dev libsuitesparse-dev libeigen3-dev zlib1g-dev libjpeg-dev openjdk-8-jdk\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 OpenNI2: https://github.com/occipital/OpenNI2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" g++ libusb-1.0-0-dev libudev-dev freeglut3-dev doxygen graphviz\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/mikeh9/OpenNI2-TX1.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" OpenNI2-TX1/OpenNI2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j4\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Elastic Fusion")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/mp3guy/ElasticFusion.git\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ElasticFusion\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修复 cmake 文件，自带的 cmake 无法正确找到 suite sparse 库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/ceres-solver/ceres-solver/master/cmake/FindSuiteSparse.cmake "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./Core/src/FindSuiteSparse.cmake\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./Core/src/FindSuiteSparse.cmake ./GPUTest/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./Core/src/FindSuiteSparse.cmake ./GUI/src\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 msse 指令优化，arm 平台无法应用此优化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\-msse2\\ \\-msse3\\ //g'")]),s._v(" ./Core/src/CMakeLists.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\-msse2\\ \\-msse3\\ //g'")]),s._v(" ./GPUTest/src/CMakeLists.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\-msse2\\ \\-msse3\\ //g'")]),s._v(" ./GUI/src/CMakeLists.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修复 CMakeList.txt 错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4 a set(CMAKE_MODULE_PATH "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CMAKE_MODULE_PATH}")]),s._v(' "'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CMAKE_CURRENT_SOURCE_DIR}")]),s._v("\")'")]),s._v(" ./GPUTest/src/CMakeLists.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8 a find_package(SuiteSparse REQUIRED)'")]),s._v(" ./GPUTest/src/CMakeLists.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\/usr\\/include\\/suitesparse\\//"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SUITESPARSE_INCLUDE_DIRS}")]),s._v(")/g'")]),s._v(" ./GPUTest/src/CMakeLists.txt\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./Core\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j8\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/GPUTest\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j8\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/GUI\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j8\n")])])]),n("ol",[n("li",[s._v("如果运行时报错："),n("code",[s._v("0:19(10): error: GLSL 3.30 is not supported. Supported versions are: 1.10, 1.20, 1.30, 1.40, 1.00 ES, and 3.00 ES")]),s._v("，在命令行中加入 "),n("code",[s._v("export MESA_GL_VERSION_OVERRIDE=3.3")]),s._v("。")]),s._v(" "),n("li",[s._v("如果运行时报错："),n("code",[s._v("Error: invalid texture reference:")]),s._v("，参考这条 "),n("a",{attrs:{href:"https://github.com/mp3guy/ElasticFusion/issues/193",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),n("OutboundLink")],1),s._v(" 解决。")])]),s._v(" "),n("p",[s._v("验证状态：成功。")]),s._v(" "),n("h3",{attrs:{id:"surfelmeshing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#surfelmeshing"}},[s._v("#")]),s._v(" surfelmeshing")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/puzzlepaint/surfelmeshing.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 msse 优化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" surfelmeshing\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/msse/d'")]),s._v(" CMakeLists.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake -DCMAKE_BUILD_TYPE"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RelWithDebInfo -DCMAKE_CUDA_FLAGS"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-arch=sm_61"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j4\n")])])]),n("p",[s._v("验证状态：存在兼容性问题，GLEW 引用出错。")]),s._v(" "),n("h3",{attrs:{id:"libvisensor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#libvisensor"}},[s._v("#")]),s._v(" libvisensor")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖项")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libeigen3-dev libboost-dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源码安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/visensor-workspace/src\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/visensor-workspace/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ethz-asl/libvisensor.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/visensor-workspace\ncatkin build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装为全局依赖，方便 ok_vis 使用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/visensor-workspace/src/libvisensor\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./install_libvisensor.sh\n")])])]),n("p",[s._v("验证状态：编译成功。")]),s._v(" "),n("h3",{attrs:{id:"ok-vis-ros"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ok-vis-ros"}},[s._v("#")]),s._v(" ok_vis ros")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖项")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ros-melodic-pcl-ros libgoogle-glog-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libatlas-base-dev libeigen3-dev libsuitesparse-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libopencv-dev libboost-dev libboost-filesystem-dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源码安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/okvis-workspace/src\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/okvis-workspace/src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ethz-asl/okvis_ros.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" okvis_ros\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/gwli/okvis.git "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方版本不支持 arm64 架构，使用别人修改的版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/okvis-workspace\ncatkin build\n")])])]),n("p",[s._v("验证状态：代码无法编译通过，存在语法问题。")]),s._v(" "),n("ol",[n("li",[s._v("如果报错 "),n("code",[s._v("libvisensor not found")]),s._v("，请先按照前文脚本安装 "),n("code",[s._v("libvisensor")]),s._v("。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);