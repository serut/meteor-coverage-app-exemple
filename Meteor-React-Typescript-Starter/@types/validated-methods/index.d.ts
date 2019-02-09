declare module 'meteor/mdg:validated-method' {
  export class ValidatedMethod<T, U> {
    constructor(options: {
      /**
       * DDP method name
       */
      name: string;
      /**
       * Method extensions
       */
      mixins?: Function[];
      /**
       * Argument validation. Use null if method does not need argument validation or it does not take any arguments
       */
      validate: null | ((args: any) => boolean); // returned from SimpleSchemaInstance.validator() method;
      /**
       * Use this to pass options into Meteor.apply every time this method is called.  This can be used, for instance, to
       * ask meteor not to retry this method if it fails.
       */
      applyOptions?: {
        noRetry: boolean;
        returnStubValue: boolean;
        throwStubExceptions: boolean;
        onResultReceived: (result: any) => void;
        [key: string]: any };
      /**
       * This is the body of the method. Use ES2015 object destructuring to get the keyword arguments.
       */
      run: (args: T) => U;
    })

    call(args: T, cb?: (error: any, result: any) => void ): U;

    /**
     * Run method (at client?) without validation.
     */
    run(args: T): U;

    /**
     * Call this from your test code to simulate calling a method on behalf of a particular user.
     */
    _execute(context: { [key: string]: any; }, args: { [key: string]: any; }): void;
  }
}