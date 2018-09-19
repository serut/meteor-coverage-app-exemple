import { FlowRouter } from 'meteor/kadira:flow-router';

// Needed to initialize the routing when testing.
FlowRouter.notFound = {
  action() {
  },
};
