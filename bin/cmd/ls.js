/*
 * @Author: xuxueliang
 * @Date: 2021-04-29 14:17:08
 * @LastEditTime: 2021-05-08 15:22:01
 * @LastEditors: xuxueliang
 * @Description:
 */
const chalk = require('chalk')
const { configPath, temPath } = require('../config')
const config = require(configPath)
console.log(chalk.greenBright('已有的模板:'))
Object.entries(config).forEach(([k, v]) => {
  console.log(chalk.greenBright(k.padEnd(10)) + ':' + chalk.yellowBright(v))
})
