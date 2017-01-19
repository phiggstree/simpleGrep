'use strict';
/** Created by duyenr on 4/10/15: Grep App with AngularJS.
/* jasmine specs for filters */

describe('filter - hightlight', function() {

  beforeEach(module('grepCustomFilters'));

  it('should add a span with class \'hightlightText\' around each matched string.', inject(function ($sce, $filter) {
  	var result = $filter('highlightFilter')('string containing apple will be highlighted', 'apple');

  	expect(result.$$unwrapTrustedValue()).toEqual('string containing <span class="hightlightText">apple</span> will be highlighted'); 
  }));

});

describe('filter - customFilter', function() {

  var input = "Foo\nBar\nGoo\napple\nAPPLE\na\nfoo\nfo"
  var newInput = input.split("\n"); 
  var searchTextArray = newInput;

  beforeEach(module('grepCustomFilters'));

  it('return simple filter search chkbx0', inject(function ($filter) {
  var result = $filter('customFilter')(searchTextArray,'apple',0); //apple
  expect(result.length).toBe(2);
  }));

  it('return case filter search chkbx1', inject(function ($filter) {
  var result = $filter('customFilter')(searchTextArray,'APPLE',1); //APPLE
  expect(result.length).toBe(1);
  }));

  it('return fit filter search chkbx2', inject(function ($filter) {
  var result = $filter('customFilter')(searchTextArray,'fo',2);  //Foo,foo,fo
  expect(result.length).toBe(3);
  }));

  it('return case/fit filter search chkbx3', inject(function ($filter) {
  var result = $filter('customFilter')(searchTextArray,'fo',3); //foo, fo
  expect(result.length).toBe(2);
  }));

  //special characters
  var input ="[{{repeat(3)}}name:\n{{firstName()}}\n{{surname()}}\n:{{index()}}]"
  var spcInput = input.split("\n");
  var spc_searchTextArray = spcInput; 
  it('return simple search for {{', inject(function ($filter) {
    var result = $filter('customFilter')(spc_searchTextArray,'{{',0); // {{
  expect(result.length).toBe(4);
  }));


});


