# `sui-studio`

To create a custom studio 

```
npx @s-ui/studio-create studio-demo
```

This will create a folder `my-studio` w/ the following structure of folders

```
├── components
│   └── README.md
├── demo
├── package-lock.json
└── package.json
```

and the following set of scripts ready to use 

```js
"build": "sui-studio build",
"check:release": "sui-studio check-release",
"co": "sui-studio commit",
"commitmsg": "validate-commit-msg",
"deploy": "sui-deploy my-studio --now",
"dev": "sui-studio dev",
"generate": "sui-studio generate --prefix sui --scope my-studio",
"lint:js": "sui-lint js",
"lint:sass": "sui-lint sass",
"lint": "npm run lint:js && npm run lint:sass",
"phoenix:ci": "npx @s-ui/mono phoenix --no-progress && (cd demo && npx @s-ui/mono phoenix --no-progress)",
"phoenix": "npx @s-ui/mono phoenix && (cd demo && npx @s-ui/mono phoenix)",
"precommit": "sui-precommit run",
"release": "sui-studio release",
"start": "sui-studio start"
```

We change `"generate": "sui-studio generate --prefix sui --scope my-studio",` to use the prefered `prefix`

```
"generate": "sui-studio generate --prefix my_cool_sui --scope my-studio",
```

## Generate a component

We genereate a component w/ `generate`

```sh
  Usage: sui-studio-generate [options]

  Options:

    -h, --help             output usage information
    -R, --router           add routering for this component
    -C, --context          add context for this component
    -P, --prefix <prefix>  add prefix for this component
    -S, --scope <scope>    add scope for this component

  Examples:

    $ sui-studio generate <category> <component>
    $ sui-studio generate cards alfa
    $ sui-studio generate searchs re-beta -P mt
    $ sui-studio generate searchs re-beta -R -C
    $ custom-help --help
    $ custom-help -h
```

So, we can do `yarn generate -- atom button`

> The `--` is necessary to pass these arguments to `generate` via `package.json` script

This command will generate the following structure 

```
.
├── components
│   ├── README.md
│   └── atom
│       └── button
│           ├── README.md
│           ├── package-lock.json
│           ├── package.json
│           └── src
│               ├── index.js
│               └── index.scss
├── demo
│   └── atom
│       └── button
│           └── playground
├── package-lock.json
└── package.json
```
