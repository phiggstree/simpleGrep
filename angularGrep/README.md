# AngularJS Simple Grep Application for plumGrid (onBoarding Exercise)

## Overview

This simple application filters and highlights texts base on user's inputs to 1) query text field 2)
search area text field.The search results area will be populated in the "Results Area" along with the line index 

## Application Directory Layout

    app/                    --> all of the files to be used in production
      css/                  --> css files
        app.css             --> default stylesheet to the app
        bootstrap-theme.css --> bootleg stylesheet to the app
        bootstrap.css       --> bootleg stylesheet to the app
      fonts/                --> fonts files for the app
      index.html            --> app layout file (the main html temp file of the app)
      js/                   --> javascript files
        grepApp.js          --> the main application module
        grepControllers.js  --> application controllers
        grepCustomFilters.js--> custom angular filters
      bower_components      --> 3rd party js libraries, including angular    
    test/                   --> test source files and libraries
      karma.conf.js         --> config file for running unit tests with Karma
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/
        scenarios.js        --> end-to-end specs
      unit/                 --> unit level specs/tests
        controllersSpec.js  --> specs for controllers
        filtersSpec.js      --> specs for filters


## Contact
for more information or questions/feedback/comments contact me @ duyenr@plumgrid.com 
