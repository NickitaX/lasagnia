const fs = require('fs');

function checkConfigurationFile() {
  return fs.statSync(`${__dirname}/../receipt.json`)
}

function getConfigurationFile() {
  return JSON.parse(fs.readFileSync(`${__dirname}/../receipt.json`, 'utf8'))
}

function checkFolders(){
  getConfigurationFile().project.folders.forEach((folder) => {
    fs.statSync(`${__dirname}/../${folder}`)
  })
  return true
}

function checkFiles(){
  getConfigurationFile().project.files.forEach((folder) => {
    fs.statSync(`${__dirname}/../${folder}`)
  })
  return true
}

module.exports = {
  checkConfigurationFile,
  getConfigurationFile,
  checkFolders,
  checkFiles,
}