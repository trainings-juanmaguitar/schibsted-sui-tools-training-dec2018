# Web App

## Launch Devel

## SPA

```
npm run spa:dev
```

## SSR

```
npm run ssr:dev
```


## Deploy SPA

Default deploy for SPA is configured w/ `surge`

```
npm run spa:deploy
```

### w/ `now`

SPA can also be deployed w/ `now` through `sui-deploy`

```
NOW_TOKEN=XXXXXXXXXXXXXXXXX npm run spa:deploy:now
```

## Deploy SSR

```
npm run ssr:deploy:production
```

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
1. Run the build script to transpile and pack the sources:
    ```bash
    npm run build
    ```
1. Serve the app locally:
    ```bash
    npm run serve
    ```
1. Try out the app by opening [http://localhost:5000](http://localhost:5000) in your browser.



## URLS:

### production:

- SPA: https://spa-mock-production.surge.sh/
- SSR: https://spa-mock-production.now.sh

### development

- SPA: https://spa-mock-development.surge.sh/
- SSR: https://spa-mock-development.now.sh

