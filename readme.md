#### Test package using tinytest
`meteor test-packages`
becomes
`[coffee ]spacejam test-packages --driver-package=test-in-console`
Dependency used but not required : test-in-console

#### Test package using mocha
`meteor test-packages --driver-package=practicalmeteor:mocha`
becomes
`[coffee ]spacejam test-packages --driver-package=practicalmeteor:mocha-console-runner`
Require inside the Package.onTest block of the package: `api.use('practicalmeteor:mocha');`

#### Test app using mocha
`meteor test  --driver-package=practicalmeteor:mocha`
becomes
`[coffee ]spacejam test  --driver-package=practicalmeteor:mocha-console-runner`
Required : meteor add practicalmeteor:mocha practicalmeteor:mocha-console-runner

#### Test full-app using mocha
Add the --full-app flag to an app test

See the .travis.yml for additional informations
