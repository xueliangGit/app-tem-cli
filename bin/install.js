/*
 * @Author: xuxueliang
 * @Date: 2021-04-27 20:34:45
 * @LastEditTime: 2021-05-09 17:46:36
 * @LastEditors: xuxueliang
 * @Description:
 */
const path = require('path')
const fs = require('fs-extra')
const { configPath } = require('./config')
if (fs.existsSync(configPath)) {
  // 已存在不再重复添加
} else {
  // 直接添加
  fs.ensureFileSync(configPath)
  fs.copyFileSync(path.join(__dirname, './cache.js'), configPath)
}
