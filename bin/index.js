#!/usr/bin/env node

/*
 * @Author: xuxueliang
 * @Date: 2021-04-27 20:09:36
 * @LastEditTime: 2021-05-08 15:25:55
 * @LastEditors: xuxueliang
 * @Description:
 */
const figlet = require('figlet')
const chalk = require('chalk')
const program = require('commander')
const pkg = require('../package')
process.title = pkg.name
console.log(chalk.greenBright(pkg.name + ':' + pkg.version))
console.log(chalk.green(figlet.textSync(pkg.name)))
require('./generate')
program.version(pkg.version, '-v, --version').usage('<command> [options]').parse(process.argv)
