var assert = require('assert');
var writer = require('../src/writer.js');

describe('Writer', function() {
  beforeEach(function() {
    writer.clearWritings()
  })

  describe('before writing', function() {
    it('should return empty string if no writing has been done yet', function() {
      assert.equal(writer.getWritings(), '');
    });
  });
  describe('when writing', function() {
    it('writing something should return writings', function() {
      assert.equal(writer.writeSomething('foo'), 'foo');
    });
    it('clear writing some remove any existing writings', function() {
      writer.writeSomething('clear me')
      writer.clearWritings()
      assert.equal(writer.getWritings(), '')
    })
    it('writing something should update writings', function() {
      assert.equal(writer.writeSomething('something'), 'something')
    })
    it('additional writings should append to previous writings', function() {
      writer.writeSomething('something')
      assert.equal(writer.writeSomething(' else'), 'something else')
    })
  });
});