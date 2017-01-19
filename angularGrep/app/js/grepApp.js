'use strict';

/* Grep App Module */
/* 4-15-2015: This simple app, filters and highlights texts base on user's query and input */
/* text in the search textarea */

/* Registering the filters to module as dependency*/
var grepApp = angular.module('grepApp', [
    'grepControllers',
    'grepCustomFilters'
]);
