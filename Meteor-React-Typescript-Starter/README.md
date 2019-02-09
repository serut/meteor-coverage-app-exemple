# Meteor React Typescript Starter Project

## Meteor Packages

[`barbatus:typescript`](https://atmospherejs.com/barbatus/typescript): To support TypeScript. [[GitHub Home](https://github.com/barbatus/typescript)]

[`ecmascript`](https://atmospherejs.com/meteor/ecmascript): Required for if source contains JavaScript files. Can be removed if using TypeScript fully.

[`mdg:validated-method`](https://atmospherejs.com/mdg/validated-method): Wrapper for Meteor methods. See [Meteor Guide](https://guide.meteor.com/methods.html#validated-method) for details. Typings in `/@types` folder. [[GitHub Home](https://github.com/meteor/validated-method)]

[`aldeed:collection2`](https://atmospherejs.com/aldeed/collection2): For schema validation on write. See [Meteor Guide](https://guide.meteor.com/collections.html#schemas-on-write) for details. Typings in `/@types` folder. [[GitHub Home](https://github.com/aldeed/meteor-collection2)]

[`meteortesting:mocha`](https://atmospherejs.com/meteortesting/mocha): Meteor testing package. See [Meteor Guide](https://guide.meteor.com/testing.html) for more details.

`jquery`: Required for `meteortesting:mocha` in browser testing to work?

## Meteor Typings

Meteor TypeScript definitions are stored in `@types` folder, which are included in `typeRoots` option in `tsconfig.json`.

> Note: As described in this [issue](https://github.com/Microsoft/TypeScript/issues/22217), TypeRoots is a support added for back compat with [typings](https://github.com/typings/typings) and to allow migration. However [meteor typings](https://github.com/meteor-typings) have not been updated to new typings workflow.

## TypeScript Config

`tsconfig.json`: Files in `client` and `server` are included in TypeScript transpilation. Files in `imports` will be transitively transpiled when imported by files in `client` and `server` folder. However, for TypesScript compiler settings in `tsconfig.json` to apply to 'orphaned' files in `imports` directory (i.e. files that not imported), the `imports` folder is included as well.

## VS Code Debugging

Default timeout when attaching to new meteor debug instance is 30 seconds. To increase if needed. Alternatively run `npm run debug` and attach manually.

Chrome Debugging requires [`chrome`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) VS Code extension.

## Starting Project

```bash
meteor npm install
# Run project
meteor run
# Run in debug mode
meteor npm run debug
```

## Test Coverage (WIP)

### Known Issues:

1. Static assets for coverage HTML reports cannot be generated properly.

2. `lmieulet:meteor-coverage@3.1.1` not working well for TypeScript source files.

> Note: The following packages must be in `.meteor/packages` in the following order for test coverage to work: `lmieulet:meteor-coverage@3.1.1`, `jquery`, `lmieulet:meteor-coverage@1.1.4`.

> Linux Users: Change `%CD%` to `$PWD/` for npm scripts in package.json.

```
npm run test:coverage
```
