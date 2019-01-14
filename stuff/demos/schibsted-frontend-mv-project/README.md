# Movies Finder

This is a demo of a project for finding movies using Schibsted tools

## Run

Once you have configured the app properly to work locally (follow intructions described at `Local Installation`) we can run the app by doing

- from `frontend-mv--web-app/src/functions`
  - `npm run serve` to run the _backend_ (Firebase Cloud Functions)
- from `frontend-mv--web-app`
  - `npm run spa:dev` to run the SPA version of the web app
  - or `npm run ssr:dev` to run the SSR version of the web app

## Local Installation

### Firebase

In firebase create a new project and add _"Google"_ as authentication Provider 
Also set these rules

```
{
  "rules": {
    ".read": "auth != null",
    "users": {
      "$uid": {
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

### Firebase in Domain

This app relies on a firebase app so after you have created a new project in firebase

From `frontend-mv--lib-movies`

```
firebase use --add
```

And choose your firebase project

Once this is done you can run from `frontend-mv--lib-movies` the script `npm run createfirebaseconf` to automatically generate the `firebase-config.json` at `frontend-mv--lib-movies/src/config/firebase`

### Firebase in Web App

This app relies on a firebase app so after you have created a new project in firebase

From `frontend-mv--web-app`

```
firebase use --add
```

And choose your firebase project

Once this is done you can run from `frontend-mv--web-app` the script `npm run createfirebaseconf` to automatically generate the `firebase-config.json` at `frontend-mv--web-app/src`

### Cloud Function (Backend)

#### Firebase

This project has a backend in the form of a cloud function that also relies on a firebase app. This cloud function needs a credentials JSON file with the name `serviceAccountKey.json` that can be generated from firebase (https://firebase.google.com/docs/admin/setup > Agrega Firebase a tu app)
 
Once generated put that file in `frontend-mv--web-app/src/functions`

#### Environment Variables

The cloud function relies on a `.env` file with some environment variables:

- `THEMOVIEDB_API_KEY` → Api Key to access the API at `=api.themoviedb.org/3`
- `THEMOVIEDB_API_BASE_URL`  →  for example `api.themoviedb.org/3`
- `FIREBASE_API_URL`  →  for example `http://localhost:5000/moviesfinder-ecb7c/us-central1/api`
- `COOKIE_SESSION_NAME`  →  name of the cookie used in the client

```
THEMOVIEDB_API_KEY=x0xx0x0x0x0xx0x0x0xxxx0x
THEMOVIEDB_API_BASE_URL=api.themoviedb.org/3
FIREBASE_API_URL=http://localhost:5000/moviesfinder-ecb7c/us-central1/api
COOKIE_SESSION_NAME=firebase-auth-token
```


