// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCZiHxHfH2AuCwgvD7g6yjnECwL7KWlIQo',
    authDomain: 'todomvc-13714.firebaseapp.com',
    databaseURL: 'https://todomvc-13714.firebaseio.com',
    projectId: 'todomvc-13714',
    storageBucket: 'todomvc-13714.appspot.com',
    messagingSenderId: '239709159899'
  }
};
