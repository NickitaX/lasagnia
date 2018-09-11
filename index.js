const utils = require('./lib/utils')

const chalk = require('chalk')

function run() {
  const configuration = utils.getConfigurationFile()
  getSafe(() => configuration.project.files, null) ? utils.checkFiles() : console.log(chalk.yellow.bold('Files configuration doesn\'t exist.'))
  getSafe(() => configuration.project.folders, null) ? utils.checkFolders() : console.log(chalk.yellow.bold('Folders configuration doesn\'t exist.'))
}

function getSafe(func, defaultValue) {
  try {
    return func();
  } catch (e) {
    return defaultValue;
  }
}

module.exports = {
  run,
}
