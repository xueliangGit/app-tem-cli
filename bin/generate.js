#!/usr/bin / env node
const program = require('commander')
const chalk = require('chalk')
// const HDC = require('../../src/index')
const { configPath, temPath } = require('./config')
const strBy = [
  '当你遇到难点的时候，你应该庆幸，你又要提高了！',
  '喜欢折腾就开始造吧！',
  '开拓你的思维，没有什么技术难点，只是没有想到而已！',
  '技能是靠经验打磨出来的！',
  '前端发展很快，一不留神就会跟不上的；所以请不断学习'
]
const config = require(configPath)
/**
 * 创建
 */
program
  .command('create')
  .description('create App')
  // .alias('conf')
  .action(function () {
    require('./cmd/create')()
  })
program
  .command('add <gitName> <gitUrl>')
  .description('添加git模版')
  // .alias('conf')
  .option('-s', '--s', '强制处理')
  .action(function (gitName, gitUrl, cmd) {
    // console.log(gitName, gitUrl, cmd.s)
    require('./cmd/add')(gitName, gitUrl, !!cmd.s)
  })
program
  .command('ls')
  .description('列出 列表')
  // .alias('conf')
  .action(function () {
    // console.log(gitName, gitUrl, cmd.s)
    require('./cmd/ls')
  })
program
  .command('del <gitName>')
  .description('删除 列表')
  // .alias('conf')
  .action(function (gitName) {
    // console.log(gitName, gitUrl, cmd.s)
    require('./cmd/del')(gitName)
  })
console.log('')
function showinfo(errInfo = '') {
  if (errInfo) console.log(chalk.red(`ERROR: ${errInfo}`))
  console.log()
  console.log(' Examples:')
  console.log()
  console.log(chalk.gray('    # Use of links'))
  console.log('    $ yamjs create [path]')
  console.log()
  console.log()
}
