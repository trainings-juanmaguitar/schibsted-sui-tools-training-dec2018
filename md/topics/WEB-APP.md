
## WEB APP

+++

This piece of our architecture is in charge of:
- handling the routing
- link the domain to the pages & components
- use components from `sui-components` & `uilib-components`

+++

### First Steps

Create the folder w/ the proper syntax

`frontend-<marketplace>--web-app` → `frontend-mv--web-app`

Initiate proper repo and npm package

```
npm init -y
git init
```

+++

### First Steps (Install DEV dependendencies)

```
npm i -D \
  @s-ui/bundler \
  @s-ui/ssr \
  @s-ui/lint \
  @s-ui/mono \
  @s-ui/precommit \
  husky
```

+++

## Resources

- Boilerplate → https://github.schibsted.io/carlos-villuendas/spa-mock

- Examples:
  - https://github.schibsted.io/victor-ribero/frontend-mv--web-app
  - https://github.schibsted.io/david-marin/frontend-mv--web-app
