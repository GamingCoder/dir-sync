var Path = require('path'),
    fs = require('fs'),
    chai = require('chai'),
    expect = chai.expect

var setup = require('./setup')
var sync = require('../index')

describe('Basic File', function () {
  beforeEach(function () {
    setup.beforeEach()
  })
  afterEach(function () {
    setup.afterEach()
  })
  it('should exist in target dir', function (done) {
    var conf = {
      'task': 'sync',
      'target': Path.resolve('./target'),
      'src': Path.resolve('./src')
    }
    sync(conf, function () {
      fs.exists(Path.resolve('/src/basic.txt'), function (exists) {
        expect(exists).to.eql(true)
        done()
      })
    })
  })
})
