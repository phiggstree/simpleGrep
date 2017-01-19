

/** Created by duyenr on 4/10/15: Grep App with AngularJS.
/* jasmine specs for controllers */

describe('grepControllers', function() {
  beforeEach(module('grepApp'));
  beforeEach(module('grepControllers'));

  /* Test 1: function call, create array from search area input box*/
  describe('function splitTextArea', function() {
    it('should split input into array', function() {
      var input = "Foo\nBar\nGoo\napple\nAPPLE\na\nfoo\nfo"
      var newInput = input.split("\n"); 
      var searchTextArray = newInput;
      expect(searchTextArray.length).not.toEqual(0);
    });
  }); 

});/* End of unit test controllers*/




