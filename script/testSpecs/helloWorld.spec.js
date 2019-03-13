const {expect} = require('chai')

describe('hello world', function() {
  it('helloWorld is a function', function() {
    console.log('first test ran')
    expect(helloWorld).to.be.a('function')
  })

  it('helloWorld returns helloworld', function() {
    console.log('second test ran')
    expect(helloWorld()).to.equal('Hello world')
  })
})
