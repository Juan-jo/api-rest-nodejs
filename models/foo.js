'use strict'
const mongoose = require('mongoose')
const Shema = mongoose.Schema

const foo = Shema({
    key: String
})

module.exports = mongoose.model('foo', foo)