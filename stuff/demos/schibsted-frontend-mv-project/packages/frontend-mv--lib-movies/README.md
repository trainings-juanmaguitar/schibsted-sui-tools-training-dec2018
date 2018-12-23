[![Build Status](https://travis-ci.com/juanmaguitar/frontend-mv--lib-movies.svg?branch=master)](https://travis-ci.com/juanmaguitar/frontend-mv--lib-movies)

## Initial setup, building and serving.

1. Create a Firebase project using the [Firebase console](https://console.firebase.google.com).
1. In the **Authentication** section of your project's Firebase console, open the **Sign-In Method** tab and enable the **Google** and the **Email/Password** sign-in providers.

1. Install the run-time and build dependencies:
   ```bash
   npm install
   ```
1. Tell Firebase to use your new project locally:

   ```bash
   firebase use --add
   ```

# frontend-mv--lib-movies

For this project you'll need to pass the following environment variables

- `NODE_ENV` → to specify one of the following environments: `development`, `preproduction`, `production`, `test`.

```
NODE_ENV=development
```

## Tests

You can launch the tests with

```
yarn test
```
