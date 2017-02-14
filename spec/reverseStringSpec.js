var val = require("../app/reverseString.js");
describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(val.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for 'anna'", function() {
      expect(val.reverseString('anna')).toEqual(true);
    });

    it("should return true for 'NaN'", function() {
      expect(val.reverseString('NaN')).toEqual(true);
    });

    it("should return true for 'civic'", function() {
      expect(val.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return 'skoob' for 'books'", function() {
      expect(val.reverseString('books')).toEqual('skoob');
    });

    it("should return 'nomolos' for 'solomon'", function() {
      expect(val.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return 'csim' for 'misc'", function() {
      expect(val.reverseString('misc')).toEqual('csim');
    });

  });

});