<!--
 * @Author: xuxueliang
 * @Date: 2021-05-08 16:55:06
 * @LastEditTime: 2021-05-09 18:05:00
 * @LastEditors: xuxueliang
 * @Description:
-->

# app-tem-cli 一个项目框架模板管理工具

可以把常用的模版 git 地址用这个工具来维护，使用软连接的形式来处理的项目的依赖包，所以不用担心项目多的时候 node_modules 多乱杂的情况

## 命令有

```sh
 atc create                            create App
 atc add [options] <gitName> <gitUrl>  添加git模版
 atc ls                                列出 列表
 atc del <gitName>                     删除 列表
 atc help [command]                    display help for command
```

该工具需要自行通过命令来添加自己的模版，方便个人和团队使用。

## 安装

`npm i app-tem-cli -g`
