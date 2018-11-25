---?borderColor=#FFD3A2

##  @emoji[sunny] WEB APP

+++?color=#FFD3A2

This piece of our architecture is in charge of:
- handling the routing
- link the domain to the pages & components
- use components from `sui-components` & `uilib-components`

+++?color=#FFD3A2

### First Steps

Create the folder w/ the proper syntax

```
frontend-<marketplace>--web-app
frontend-mv--web-app
```

Initiate proper repo and npm package

```
npm init -y
git init
```

+++?color=#FFD3A2

### DEV dependencies

```
npm i -D \
  @s-ui/bundler \
  @s-ui/ssr \
  @s-ui/lint \
  @s-ui/mono \
  @s-ui/precommit \
  husky
```
+++?color=#FFD3A2

### DEV dependencies

- [@s-ui/bundler](https://github.com/SUI-Components/sui/tree/master/packages/sui-bundler) → The responsible of handle with our bundling with webpack etc...
- [@s-ui/ssr](https://github.com/SUI-Components/sui/tree/master/packages/sui-ssr) → The responsible of set our server side rendering server creating our server folder, passing and getting context and more...
- [@s-ui/lint](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint) → The responsible of handle with our linting
- [@s-ui/mono](https://github.com/SUI-Components/sui/tree/master/packages/sui-mono) → The one that will handle with our commit and release flow
- [@s-ui/precommit](https://github.com/SUI-Components/sui/tree/master/packages/sui-precommit) → Pre-commit hook management
- [husky](https://github.com/typicode/husky#readme) - Git hooks management

+++?color=#FFD3A2

### PROD dependencies

```
npm i -S \
  @s-ui/component-peer-dependencies \
  @s-ui/hoc \
  @s-ui/i18n \
  @s-ui/react-initial-props \
  isomorphic-fetch
```

+++?color=#FFD3A2

## Resources

- Boilerplate → https://github.schibsted.io/carlos-villuendas/spa-mock

- Examples:
  - https://github.schibsted.io/victor-ribero/frontend-mv--web-app
  - https://github.schibsted.io/david-marin/frontend-mv--web-app
