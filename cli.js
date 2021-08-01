#!/usr/bin/env node

const OTPAuth = require('otpauth')
const assert = require('assert')

const [, , secret] = process.argv
assert.ok(!!secret, `Please use command: quick-totp $SECRET`)

const totp = new OTPAuth.TOTP({
  algorithm: 'SHA1',
  digits: 6,
  period: 30,
  secret: secret,
})

const token = totp.generate()
console.info(token)
