/*
 * @Author: xuxueliang
 * @Date: 2021-04-29 14:11:24
 * @LastEditTime: 2021-04-29 16:12:49
 * @LastEditors: xuxueliang
 * @Description:
 */
const chalk = require('chalk')
const { writeFileSync } = require('fs-extra')
const { configPath, temPath } = require('../config')
const config = require(configPath)

module.exports = function (name, url, write = false) {
  if (!name) {
    console.log(chalk.greenBright(`没有可用的gitname`))
    return
  }
  if (!write && config[name]) {
    console.log(chalk.yellowBright(`已经存在 【${name}】 的配置`))
    console.log(chalk.yellowBright(` ${name}:${config[name]} `))
    console.log(chalk.yellowBright(` 想要覆盖 请携带 -s 修饰符`))
    return
  }
  config[name] = url
  writeFileSync(configPath, `module.exports =${JSON.stringify(config, '', ' ')}`)
  console.log(chalk.greenBright(`处理完毕`))
}
