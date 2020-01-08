// SPIES
it('calls subscribers on publish', function () {
    var callback = sinon.spy()
    PubSub.subscribe('message', callback)
  
    PubSub.publishSync('message')
  
    assertTrue(callback.called)
  })
  // example taken from the sinon documentation site: http://sinonjs.org/docs/