const fs = require('fs');

function checkConfigurationFile() {
  return fs.statSync(`${process.cwd()}/recipe.json`)
}

function getConfigurationFile() {
  return JSON.parse(fs.readFileSync(`${process.cwd()}/recipe.json`, 'utf8'))
}

function checkFolders(){
  getConfigurationFile().project.folders.forEach((folder) => {
    fs.statSync(`${process.cwd()}/${folder}`)
  })
  return true
}

function checkFiles(){
  getConfigurationFile().project.files.forEach((folder) => {
    fs.statSync(`${process.cwd()}/${folder}`)
  })
  return true
}

module.exports = {
  checkConfigurationFile,
  getConfigurationFile,
  checkFolders,
  checkFiles,
}