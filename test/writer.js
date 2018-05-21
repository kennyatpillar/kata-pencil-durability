var assert = require('assert');
var writer = require('../src/writer.js');

describe('Writer', function() {
  describe('before writing', function() {
    it('should return empty string if no writing has been done yet', function() {
      assert.equal(writer.getWritings(), '');
    });
  });
});