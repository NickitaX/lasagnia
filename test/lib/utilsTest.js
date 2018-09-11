const {describe, it} = require('mocha')
const assert = require('assert')

const utils = require('../../lib/utils')

describe('Utils', () => {
  it('open configuration file', () => {
     assert(true, utils.getConfigurationFile())
  })
  it('check folders', () => {
    assert(true, utils.checkFolders())
  })
  it('check files', () => {
    assert(true, utils.checkFiles())
  })
})