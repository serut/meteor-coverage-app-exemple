| Travis        | Circle CI  | Coveralls  | Codecov  |
| ------------- |:-------------:|----------:|----------:|----------:|
| [![Build Status](https://travis-ci.org/serut/meteor-coverage-app-exemple.svg?branch=master)](https://travis-ci.org/serut/meteor-coverage-app-exemple) | [![Circle CI](https://circleci.com/gh/serut/meteor-coverage-app-exemple.svg?style=svg)](https://circleci.com/gh/serut/meteor-coverage-app-exemple) | [![Coverage Status](https://coveralls.io/repos/github/serut/meteor-coverage-app-exemple/badge.svg?branch=master)](https://coveralls.io/github/serut/meteor-coverage-app-exemple?branch=master) | [![codecov](https://codecov.io/gh/serut/meteor-coverage-app-exemple/branch/master/graph/badge.svg)](https://codecov.io/gh/serut/meteor-coverage-app-exemple) |

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

See the .travis.yml for additional informations
