## The sui-components & marketplace-components

First of all, before explaining you how to do it, it's important to know what are the marketplace-components that are created inside the marketplace studio and the sui-components that are created inside the sui-studio. Both of them use the same tool to create them that is the `sui-studio` but we will se it in the next steps.

### The sui-components

The sui-components are a set of **presentational** components that are already created in an effort by the UI & UX & Frontend teams to have the most reusable view logic shared between our marketplaces. You can check the repository [here](https://github.com/SUI-Components/sui-components) and you can see a live demo of the components and studio [here](https://sui-components.now.sh/).

### The marketplace-components

The marketplace components are reusable in the same way as the sui-components are, but they are not involved in the task of being approved by the whole stack of ux & ui & frontend members of all Schibsted Spain. They're the components that only apply to the marketplace itself regarding its design or the feature that implement.



_NOTE: BOTH sui and marketplace components are developed using the same JS and SCSS code quality and linting conventions and use almost the same tooling too. So, if you are able to create a marketplace component you should be able to create a sui as well._



### Creating our marketplace-studio.

As we explained on our previous lesson, following our repository naming convention we are going to create a repository called `frontend-<marketplace>--uilib-components`

We have a tool that handles with the effort of creating a new studio called `@s-ui/studio-create` so... let's install it!

To create your studio componentes, you can do the following if you do not want to install this package globally on your computer.
```
> npx @s-ui/studio-create frontend-<marketplace>--uilib-components
```

Else, if you prefer to install this package globally introduce the following command.
```
> npm install -g @s-ui/studio-create
```

After that, we need to run this command:

```
> sui-studio-create frontend-<marketplace>--uilib-components
```

We need one more thing that the client hasn't done for us.

Get into the project and inside the package.json scripts add the next script:

```
 "start": "sui-studio start",
```

And that's it! Just get into the folder and check that you have a whole new brand project initialized.


### How we work with our view logic

At Schibsted Spain frontend we separate concerns **literally** as you may imagine in repositories.

**How do we relate our requests to backend, calculations etc...(bussines logic) with our view logic?**
You will find out in the [lesson 3](https://github.schibsted.io/carles-nunez/frontend-ma--pet-project/tree/master/3-frontend-mv--lib-movies). But bassically we use a Object called DOMAIN that includes all our **use cases**.

**Your components should not include any requests**

The components that you develop here will retreive by props all the information that they need so... imagine that you are developing a page component. In our studio you will 'instantiate' it using react in the next way:

```jsx
<MoviesPage moviesList={fakeArray} />
```

We will see that in our web-app projects we inject the initial props through a 'getInitialProps' method so... at this moment try to fake all the data that your components need to abstract them from any business logic.

### Creating our first component.

Creating a component is easy with sui-studio. But first we need to change something in our package.json:
In the "generate" script change this `--prefix sui` to your marketplace acronym `--prefix <marketplace acronym>` for example for vibbo our acronym is vb so... `--prefix vb`

Save and then just run:

```
> npm run generate <category> <component name>
```

For example:

```
> npm run generate header search
```

It will create these files:

```
/frontend-mv--uilib-components/components/header/search/index.js
/frontend-mv--uilib-components/components/header/search/index.scss
/frontend-mv--uilib-components/demo/header/search/playground
```

**Tip**

In case your component has more than one type of visualization and you would like to add some js code in demo, you could replace:
```
/frontend-mv--uilib-components/demo/header/search/playground
```
by 
```
/frontend-mv--uilib-components/demo/header/search/demo/
```

- And inside this folder you could have:
  - index.js
  - package.json


From now, running `npm run start` you can develop your component as you will do in any other react project.

### Loading `<marketplace>-theme` into the studio

By default, sui-studio loads the `index.scss` of your component, but with `sui-theme` variables, as a default theme.

To see your components, you need to tell sui-studio what you want (let's assume your theme es called `mv-theme`):

* Link your theme
  * ```cd path/to/frontend-mv--uilib-theme && npm link```
* Install your theme in the studio
  * ```cd path/to/frontend-mv--uilib-components && npm link frontend-mv--uilib-theme```
* Create the following file
  * /frontend-mv--uilib-theme/demo/header/search/themes/movies.scss
* Add the following content to it:
```scss
@import '~frontend-mv--uilib-theme/lib/index';
@import '../../../../components/header/search/src/index';
```

And you're done! Now you should see a new theme button appear in the studio UI

![movies-theme-button](../.assets/studio-theme.png)


### SASS Conventions and linting rules

Our sass variable names are created following the [emmet abrevation syntax](https://docs.emmet.io/cheat-sheet/) and our styling methodology is [SUIT-CSS](http://suitcss.github.io/).
* [sass variables](https://github.schibsted.io/scmspain/frontend-all-wiki/wiki/Naming-of-Components%27-Sass-Variables)
* [classNames](http://suitcss.github.io/)

Classname naming runs over the follow convention:

*For root elements*
```jsx
<!-- ROOT ELEMENT -> sui-<ComponentName> in pascal case notation -->
<div className='sui-DummyComponent'>
```

*For first children*
```html
<!-- ROOT ELEMENT -> sui-<ComponentName> in pascal case notation -->
<div className='sui-DummyComponent'>
  <!-- FIRST CHILD -> sui-<ComponentName>-<childName> child name
  in camel case notation -->
  <div className='sui-DummyComponent-firstChild'>
```


### Commit and deployment of our component

All the studios are by definition [monorepos](https://trunkbaseddevelopment.com/monorepos/) so... as you may imagine we use sui-mono to handle with commit and release of our packages.

Each component is published as an independent package.

Following the same idea as we've done in the first lesson, we don't recommend to publish to NPM this pet project components.

Instead, go to the components/<category>/<mycomponent> folder and run npm link.

Then inside the project where you want to 'install' the component run npm link <package component name>


If you have any troubles or doubts dont hesitate to talk with your mentor!
