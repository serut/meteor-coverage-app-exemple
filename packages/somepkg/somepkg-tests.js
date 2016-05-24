import './some.pck.test.js'


// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by somepkg.js.
import { name as packageName } from "meteor/somepkg";

// Write your tests here!
// Here is an example.
Tinytest.add('somepkg - example', function (test) {
  test.equal(packageName, "somepkg");
});
