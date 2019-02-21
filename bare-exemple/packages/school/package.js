Package.describe({
  name: 'cgalvarez:school',
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
  api.mainModule('server/build/school.js', 'server');
  api.export('School', 'server');
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest']);
  api.use(['meteortesting:mocha', 'lmieulet:meteor-legacy-coverage@0.1.0', 'lmieulet:meteor-coverage@3.0.0']);
  api.use('cgalvarez:school');
  api.mainModule('server/school.test.js', 'server');

  Npm.depends({
    chai: '3.0.0',
    sinon: '1.4.0',
    'sinon-chai': '2.8.0',
  });
});
