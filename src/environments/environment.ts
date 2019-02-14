// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cogsApiUrl: 'http://10.0.0.159:1234',
  firebase: {
    apiKey: "AIzaSyCgzMsB_4_4MPMfTQY6A_XCPTsMvVsgmNg",
    authDomain: "lightning-app-dev.firebaseapp.com",
    databaseURL: "https://lightning-app-dev.firebaseio.com",
    projectId: "lightning-app-dev",
    storageBucket: "lightning-app-dev.appspot.com",
    messagingSenderId: "164968253058",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
