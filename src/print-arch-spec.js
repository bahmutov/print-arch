'use strict'

/* eslint-env mocha */
const printArch = require('.')

describe('print-arch', () => {
  it('has platform', () => {
    const message = printArch()
    console.assert(message.includes('platform:'))
  })

  it('has arch', () => {
    const message = printArch()
    console.assert(message.includes('arch:'))
  })
})
