// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAuYcocaq1YzKv3nzwIzYBHvjOEjN5QkJY',
    authDomain: 'docstatusandroid.firebaseapp.com',
    databaseURL: 'https://docstatusandroid.firebaseio.com',
    projectId: 'docstatusandroid',
    storageBucket: 'docstatusandroid.appspot.com'
  },
  algoliaConfig: {
    appKey: 'V7K7DR01T2',
    searchKey: '57aec6622f4add625c9ef6f5bac7acd5'
  }
};
