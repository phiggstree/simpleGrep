'use strict';

/* customFilters for the grep App */
var grepCustomFilters = angular.module('grepCustomFilters', []);

grepCustomFilters.filter('highlightFilter', function($sce){
	    return function(searcharea, query) {
	    if (query) searcharea = searcharea.replace(new RegExp('('+query+')', 'gi'),
	      '<span class="hightlightText">$&</span>');

      console.log ("Filter:highlightFilter:Trusted HTML " + searcharea)
	    return $sce.trustAsHtml(searcharea);

	  };
	});

grepCustomFilters.filter('customFilter', function(){
    return function(searcharea,query,myCheckboxType) {

    /*exit if searcharea or query is null*/
    if (searcharea==null || query == null) {
      console.log ("Fitler:customFilter:No Filtering Done")
      return;
      };

    var filtered =[];
    /*check for special characters*/
    if( /[^a-zA-Z0-9]/.test(query) ) {
        var letterMatch = new RegExp('['+ query +']','i');
        for (var i = 0; i < searcharea.length; i++) {
          var item = searcharea[i];
          if (letterMatch.test(item)) {
            filtered.push(item);
            console.log ("Filter:customFilter:non alphanumeric" + letterMatch +" ItemValue:" + item)
          }
        }
        return filtered;
    }
    /*check for special characters*/

    if (myCheckboxType==1){
        /*CASE* remove i from parameters*/
        var letterMatch = new RegExp('('+ query + ')');
        for (var i = 0; i < searcharea.length; i++) {
          var item = searcharea[i];
          if (letterMatch.test(item)) {
            filtered.push(item);
            console.log ("Fitler:customFilter:Case:Pushed::letterMatch: " + letterMatch +":ItemValue:" + item)
          }
        //return (''+query).indexOf(''+searcharea) > -1;
        //(/keyword/).test(source)
        }return filtered;

    } else if (myCheckboxType==2){
        /*FIT*  [h?|i?|\s] */
        //var chars = query.split('');
        var matchPattern = query;
        //for (var i = 0; i < chars.length; i++) {
        //  matchPattern += chars[i] + "?|";
        //}
        var letterMatch = new RegExp('('+ matchPattern +')', 'i');
        for (var i = 0; i < searcharea.length; i++) {
          var item = searcharea[i];
          if (letterMatch.test(item)) {
            filtered.push(item);
            console.log ("Filter:customFilter:Fit:Pushed:letterMatch: " + letterMatch +" ItemValue:" + item)
          }
        }
        return filtered;

    } else if (myCheckboxType==3){
          /*BOTH: case sensitive and general fit*/
        //var chars = query.split('');
        var matchPattern = query;
        //for (var i = 0; i < chars.length; i++) {
        //  matchPattern += chars[i] + "";
        //}
        var letterMatch = new RegExp('('+ matchPattern +')');
        for (var i = 0; i < searcharea.length; i++) {
          var item = searcharea[i];
          if (letterMatch.test(item)) {
            filtered.push(item);
            console.log ("Filter:customFilter:Case/Fit:Pushed:letterMatch: " + letterMatch +"ItemValue:" + item)
          }
        }
        return filtered;

     } else {
        /*simple search*/ 
        var letterMatch = new RegExp('('+ query +')', 'i');
        for (var i = 0; i < searcharea.length; i++) {
          var item = searcharea[i];
          if (letterMatch.test(item)) {
            filtered.push(item);
            console.log ("Filter:customFilter:Simple:Pushed: "+ "item Index: " + i +"ItemValue: "+ item)
            console.log ("Filter:customFilter:Simple:letterMatch: " + letterMatch)
          }
        }
        return filtered; 
     }/*end of else*/
  }; 
});/*end of customFilter function*/

