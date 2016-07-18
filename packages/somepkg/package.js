Package.describe({
  name: 'somepkg',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.mainModule('somepkg.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['practicalmeteor:mocha@2.4.5_6', 'lmieulet:meteor-coverage@0.8.1']);
  api.use('somepkg');
  api.mainModule('somepkg-tests.js');
});
