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

## URLS:

### production:

- SPA: https://spa-mock-production.surge.sh/
- SSR: https://spa-mock-production.now.sh

### development

- SPA: https://spa-mock-development.surge.sh/
- SSR: https://spa-mock-development.now.sh

