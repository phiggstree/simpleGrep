'use strict';

describe("describe e2e panelDetails,", function() {

  // Testing UI
 describe("describe panelDetails webcomponent ", function() {

      var searchList = element.all(by.repeater('item in searchTextArray.lineText'));
      var query = element(by.model('query'));
      var searcharea = element(by.model('searcharea'));
      var checkBoxes = element.all(by.model('myCheckboxType'));




    it("should show nothing in panelDetails if
        nothing was selected in resourceMap", function() {

      searcharea.sendKeys('apple\nApple\nAPPLE');
      query.sendKeys('apple');
      expect(searchList.count()).toBe(3); //return: apple,Apple,APPLE
      query.clear();
      searcharea.clear();
    });

    it("should perform a simple search, with no return", function() {
      // filter for No matches - Simple Search
      searcharea.sendKeys('apple\nApple\nAPPLE');
      query.sendKeys('blue');
      expect(searchList.count()).toBe(0); //return nothing
      query.clear();
      searcharea.clear();
    });

    it("should perform a case sensitive search", function() {
      // filter for - Case Sensitive
      checkBoxes.get(0).click();
      searcharea.sendKeys('blue\nBlue\nBLUE');
      query.sendKeys("blue");
      expect(searchList.count()).toBe(1); //return: blue
      query.clear();
      searcharea.clear();
    });

    it("should perform a fit search", function() {
      // filter for - FIT
      checkBoxes.get(1).click();
      searcharea.sendKeys('blue\nBlue\nBLUE\nblu\nbl\nFoo');
      query.sendKeys("bl");
      expect(searchList.count()).toBe(5); //return: blue,Blue,BLUE,blu,bl
      query.clear();
      searcharea.clear();
    });

    it("should perform a case/fit search", function() {
      // filter for - Case/Fit Sensitive
      checkBoxes.get(2).click();
      searcharea.sendKeys('blue\nBlue\nBLUE\nblu\nbl');
      query.sendKeys("bl");
      expect(searchList.count()).toBe(3); //return: blue,blu,bl
      query.clear();
      searcharea.clear();
    });


    it(" should perform a simple search, with special characters", function() {
      // filter for special characters  - Simple Search
      searcharea.sendKeys('[^$.|?*+()\n[^$.|?*+()\n');
      query.sendKeys("|");
      expect(searchList.count()).toBe(2); //return
      query.clear();
      searcharea.clear();
    });



  }); //end of testing UI, filters
}); //end of describe e2e



// Note: how to test highlight color, Use GetCSSValue (to research)
// var elm = element(by.css('ul.first_menu > li > a'));
// function waitForCssValue (elementFinder, cssProperty, cssValue) {
//     return function () {
//         return elementFinder.getCssValue(cssProperty).then(function(actualValue) {
//             return actualValue === cssValue;
//         });
//     };
// };
// expect(elm.getCssValue("color")).toEqual("rgba(11, 51, 60, 1)");
// expect(elm.getCssValue("text-decoration")).toEqual("none");
