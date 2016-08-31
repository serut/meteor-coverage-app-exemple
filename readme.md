| Travis                                                                                                                                                |                                                                      Circle CI                                                                     |                                                                                                                                                                                      Coveralls |                                                                                                                                                      Codecov |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Build Status](https://travis-ci.org/serut/meteor-coverage-app-exemple.svg?branch=master)](https://travis-ci.org/serut/meteor-coverage-app-exemple) | [![Circle CI](https://circleci.com/gh/serut/meteor-coverage-app-exemple.svg?style=svg)](https://circleci.com/gh/serut/meteor-coverage-app-exemple) | [![Coverage Status](https://coveralls.io/repos/github/serut/meteor-coverage-app-exemple/badge.svg?branch=master)](https://coveralls.io/github/serut/meteor-coverage-app-exemple?branch=master) | [![codecov](https://codecov.io/gh/serut/meteor-coverage-app-exemple/branch/master/graph/badge.svg)](https://codecov.io/gh/serut/meteor-coverage-app-exemple) |

## What's up?

Unfortunately, the combo `meteor-coverage` & `spacejam` is unstable, with 1 to 10 % chance to fail a test with a phantomjs error that some ES6 is undefined (=corrupted).  
You can see on the [circle ci page](https://circleci.com/gh/serut/meteor-coverage-app-exemple) some tests with +150 times the same test and that just fail.

## How to test your app

#### Test package using tinytest

Not working

#### Test package using mocha

`meteor test-packages --driver-package=practicalmeteor:mocha`  
becomes  
`spacejam test-packages --driver-package=practicalmeteor:mocha-console-runner`  
Required : See the Package.onTest block of the file `packages/somepkg/package.js`  

#### Test app & full-app using mocha

`meteor test  --driver-package=practicalmeteor:mocha`  
becomes  
`spacejam test  --driver-package=practicalmeteor:mocha-console-runner`  
Required : See `.meteor/packages`

## spacejam  CLI

-   [`test`,  `test --full-app`, `test-packages`]
-   `--coverage "<export types>"` (indexOf is used to detect types)
    -   `out_lcovonly` creates a lcov report (for CI platforms)
    -   `out_html` creates a html report
    -   `out_coverage` creates a dump of the coverage - used when you want to merge several coverage
    -   `in_coverage` imports a coverage dump (previously create with `out_coverage`)
    -   `out_json_report` creates a json report
    -   `out_json_summary` creates a json_summary report
    -   `out_text_summary` creates a text_summary report
    -   `out_teamcity`, `out_cobertura`, `out_lcov_`, `out_text_`, `out_text_lcov` are not working yet
-   `--driver-package=practicalmeteor:mocha-console-runner`

See the .travis.yml for additional informations
