const fs = require('fs')
const chalk = require('chalk')
const configFileName = '.recipe.json'

function checkConfigurationFile () {
  return fs.statSync(`${process.cwd()}/${configFileName}`)
}

function getConfigurationFile () {
  try {
    return JSON.parse(fs.readFileSync(`${process.cwd()}/${configFileName}`, 'utf8'))
  } catch (error) {
    console.log(chalk.red(`${process.cwd()}/${configFileName} could not be located. Please, create configuration file .recipe.json in your root directory.`))
    process.exit(1)
  }
}

function checkFolders () {
  console.log(chalk.yellow.bold('Running folder integrity check'))
  getConfigurationFile().project.folders.forEach((folder) => {
    try {
      fs.statSync(`${process.cwd()}/${folder}`)
      console.log(chalk.blue(`${folder} located successfully!`))
    } catch (error) {
      console.log(chalk.red(`${folder} could not be located`))
      process.exit(1)
    }
  })
  return true
}

function checkFiles () {
  console.log(chalk.yellow.bold('Running file integrity check'))
  getConfigurationFile().project.files.forEach((file) => {
    try {
      fs.statSync(`${process.cwd()}/${file}`)
      console.log(chalk.blue(`${file} located successfully!`))
    } catch (error) {
      console.log(chalk.red(`${file} could not be located`))
      process.exit(1)
    }
  })
  return true
}

module.exports = {
  checkConfigurationFile,
  getConfigurationFile,
  checkFolders,
  checkFiles,
}