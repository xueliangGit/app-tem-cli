<!--
 * @Author: xuxueliang
 * @Date: 2021-05-08 16:55:06
 * @LastEditTime: 2021-05-09 17:58:54
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

项目框架
