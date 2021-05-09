/*
 * @Author: xuxueliang
 * @Date: 2021-04-28 17:10:56
 * @LastEditTime: 2021-05-09 17:41:12
 * @LastEditors: xuxueliang
 * @Description:
 */
const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const shell = require('shelljs')
const ora = require('ora')
const { configPath, temPath } = require('../config')
const chalk = require('chalk')
const config = require(configPath)
let list = Object.entries(config || {})
module.exports = async function createApp() {
  if (!list.length) {
    console.log(chalk.yellowBright('请先执行[atc add]添加自己的项目模版后再执行该命令'))
    return
  }
  const promptList = [
    {
      type: 'list',
      message: '请选择项目模板:',
      name: 'appType',
      choices: list.map(([k, v]) => {
        return {
          name: k,
          value: v
        }
      }),
      filter: function (val) {
        // 使用filter将回答变为小写
        return val.toLowerCase()
      }
    }
  ]
  let answers = await inquirer.prompt(promptList)
  //.then((answers) => {
  //   console.log(answers) // 返回的结果
  // })
  // 创建 answers.appType
  let folderUrl = process.cwd()
  const spinner = ora('开始准备程序').start()
  // console.log(shell.exec('git clone ' + answers.appType + ' .'))
  let temName = answers.appType.split('/').pop().replace('.git', '') + '_' + answers
  let temFolderUrl = path.join(temPath, temName)
  if (!fs.existsSync(temFolderUrl)) {
    spinner.text = '开始下载模版'
    fs.ensureDirSync(temPath)
    // 检测是否有现成的依赖，没有去clone，有就跳过直接复制
    if (shell.exec(`cd ${temPath} && git clone ${answers.appType}`).code !== 0) {
      shell.echo('Error: Git clone ,')
      shell.echo('请检测网络或者权限')
      shell.exit(1)
    }
    spinner.text = '开始安装依赖'
    if (shell.exec(`cd ${temFolderUrl} && npm i `).code !== 0) {
      // spinner.text = '创建成功'
      // spinner.stop()
      shell.echo('请检测网络或者权限')
      shell.exit(1)
    } else {
      spinner.text = '创建成功'
    }

    spinner.text = '依赖安装成功'
  }
  spinner.text = '开始创建项目'
  startLn(folderUrl, temFolderUrl)
  spinner.text = '创建成功'
  spinner.stop()
  // if (shell.exec('git clone ' + answers.appType).code !== 0) {
  // }
}
function startLn(target, ori, isnode = false) {
  fs.readdir(ori, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      files.forEach((filename) => {
        // console.log(filename)
        if (isnode) {
          if (filename !== '.cache') {
            fs.symlinkSync(path.join(ori, filename), path.join(target, filename))
          }
        } else {
          if (filename !== '.git') {
            if (filename !== 'node_modules') {
              // console.log(path.join(ori, filename))
              let info = fs.statSync(path.join(ori, filename))
              if (info.isFile()) {
                fs.copyFileSync(path.join(ori, filename), path.join(target, filename))
              } else {
                fs.copySync(path.join(ori, filename), path.join(target, filename))
              }
            } else {
              fs.ensureDirSync(path.join(target, 'node_modules'))
              startLn(path.join(target, 'node_modules'), path.join(ori, 'node_modules'), true)
            }
          }
        }
      })
    }
  })
}
