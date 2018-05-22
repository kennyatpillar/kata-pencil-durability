var assert = require('assert');
var writer = require('../src/pencil.js');

describe('Pencil', function() {
  beforeEach(function() {
    writer.clearPaper()
  })

  describe('before writing', function() {
    it('should return empty string if no writing has been done yet', function() {
      assert.equal(writer.getPaper(), '');
    });
  });
  describe('when writing', function() {
    it('writing something should return writings', function() {
      assert.equal(writer.writeSomething('foo'), 'foo');
    });
    it('clear writing some remove any existing writings', function() {
      writer.writeSomething('clear me')
      writer.clearPaper()
      assert.equal(writer.getPaper(), '')
    })
    it('writing something should update writings', function() {
      assert.equal(writer.writeSomething('something'), 'something')
    })
    it('additional writings should append to previous writings', function() {
      writer.writeSomething('She sells sea shells')
      assert.equal(writer.writeSomething(' down by the sea shore'), 'She sells sea shells down by the sea shore')
    })
  });
});