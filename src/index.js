'use strict'

function platformAndArchitecture () {
  const platform = `platform: ${process.platform}`
  const arch = `arch: ${process.arch}`
  const message = platform + '\n' + arch
  return message
}

module.exports = platformAndArchitecture
