/*
 * @Author: xuxueliang
 * @Date: 2021-04-29 15:46:53
 * @LastEditTime: 2021-04-29 16:11:35
 * @LastEditors: xuxueliang
 * @Description:
 */
/*
 * @Author: xuxueliang
 * @Date: 2021-04-29 14:11:24
 * @LastEditTime: 2021-04-29 15:15:09
 * @LastEditors: xuxueliang
 * @Description:
 */
const chalk = require('chalk')
const { writeFileSync } = require('fs-extra')
const { configPath, temPath } = require('../config')
const config = require(configPath)

module.exports = function (name) {
  if (!name) {
    console.log(chalk.greenBright(`没有可用的gitname`))
    return
  }
  if (config[name]) {
    delete config[name]
    writeFileSync(configPath, `module.exports =${JSON.stringify(config, '', ' ')}`)
    console.log(chalk.greenBright(`处理完毕`))
    return
  }
  console.log(chalk.yellowBright(`不存在 【${name}】 的配置,请检查输入值`))
}
