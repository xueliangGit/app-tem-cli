/*
 * @Author: xuxueliang
 * @Date: 2021-04-27 20:36:42
 * @LastEditTime: 2021-05-09 17:43:24
 * @LastEditors: xuxueliang
 * @Description:
 */
const os = require('os')
const path = require('path')
const floder = '.cjtCli'
module.exports = {
  configPath: path.join(os.homedir(), './', floder, '/config.js'),
  temPath: path.join(os.homedir(), './', floder, '/tem')
}
