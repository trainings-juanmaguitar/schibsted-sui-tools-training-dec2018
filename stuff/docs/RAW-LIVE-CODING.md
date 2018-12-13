# Raw Live Coding Demo

## [Init project](https://youtu.be/0Q1p1cXI_64?t=71)

```
npm init -y
```

```
{
  "name": "rawlive-coding-demo",
  "private": true,
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```


## [`@s-ui/bundler`](https://youtu.be/0Q1p1cXI_64?t=146)

```
npm i -DE @s-ui/bundler
```

- Con `@s-ui/bundler` podemos montar un servidor de desarrollo y compilarlo _production-ready_
- Por debajo lleva webpack con toda su configuración
- Preparado para un proyecto react con Babel (preconfigurado) SASS

Montar proyectos Schibsted con zero config → https://medium.com/@midudev/webpack-and-building-a-platform-in-schibsted-spain-db5947be923d

**`scripts`**
```
"start": "sui-bundler dev"
```

### Convenio `src/app.js` e `src/index.html`

`app.js` → punto de entrada de nuestra app
`index.html` → pagina html

**`src/index.html`**
```
<div id="⚛️"></div>
```

### [React dependencies](https://youtu.be/0Q1p1cXI_64?t=532)

Podemos usar [`sui-component-peer-dependencies`](https://github.com/SUI-Components/sui/tree/master/packages/sui-component-peer-dependencies)

```
  "dependencies": {
    "prop-types": "15.6",
    "react": "16",
    "react-dom": "16",
    "react-router": "3",
    "react-helmet": "5"
  },
```

o directamente instalar la útima versión de React (con hooks y demás)

```
npm i -SE react@next react-dom@next
```

**`src/app.js`**
```
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hola Mundo</h1>, document.getElementById('⚛️'))
```

### [Linter](https://youtu.be/0Q1p1cXI_64?t=831)

```
npm i -DE @s-ui/lint
```

- cli → sin configuración
- reglas que linkar en el `package.json`


To display README on terminal
```
npx readme @s-ui/lint
```

Y para [integración con nuestro IDE](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint#ide-integration) (VSCode por ejemplo) Y copiamos en el `package.json` 


**`package.json`**
```
"eslintConfig": {
  "extends": ["./node_modules/@s-ui/lint/eslintrc.js"]
},
"sasslintConfig": "./node_modules/@s-ui/lint/sass-lint.yml"
```

Con esto [evitamos los _dot-files_](https://youtu.be/0Q1p1cXI_64?t=980) que son → la raíz de la divergencia
Para unificar configuación entre proyectos

### [ComVer](https://youtu.be/0Q1p1cXI_64?t=1081)

Cambiamos esto 

```
"@s-ui/bundler": "3.28.0",
"@s-ui/lint": "2.20.0"
```

por esto 

```
"@s-ui/bundler": "3",
"@s-ui/lint": "2"
```

seguimos la [Compatible Versioning](https://github.com/staltz/comver) → para minimizar el numero de preguntas a la hora de actualizar el paquete
- Si la API se modifica (BREAKING_CHANGES)→ MAJOR
- Si la API no se modifica → MINOR

Semantic Versioning además añadiría si es FEATURE o BUG
- Si la API se modifica (BREAKING_CHANGES)→ MAJOR
- Si la API no se modifica → MINOR
  - Si añade nueva caracteristica → FEATURE
  - Si arregla algo → BUG

```
"@s-ui/bundler": "3",
```

actualizará todas las subversiones de la 3 con la seguridad de que no se romperá nada

### [Firebase](https://youtu.be/0Q1p1cXI_64?t=1769) 

### [Domain](https://youtu.be/0Q1p1cXI_64?t=2042)

Con el _domain_ separamos todas las reglas de negocio de nuestra aplicación de la interfaz

#### [`@s-ui/domain`](https://youtu.be/0Q1p1cXI_64?t=2375)

`@s-ui/domain` proporciona interfaces (definiciones) de las clases que forman parte del dominio

→ [Introducción a Domain-Driven Design | carlos buenosvinos](https://www.youtube.com/watch?v=dDofYAOkpts)

**`scripts`**
```
"phoenix": "rm -Rf node_modules && rm package-lock.json && npm install --prefer-online"
```

##### [EntryPoint](https://youtu.be/0Q1p1cXI_64?t=2697)


[parámetros nombrados](https://youtu.be/0Q1p1cXI_64?t=2786) → http://2ality.com/2011/11/keyword-parameters.html

##### [UseCase](https://youtu.be/0Q1p1cXI_64?t=3232)

- la interfaz define que debe tener al menos un método `execute`
- convención → todo lo que devuelve el `execute` debe ser una promesa
- al constructor le inyectamos el repositorio por inyección de dependedencias

##### Factories 

Sólo en las factorias podemos crear instancias, lo que garantiza que todo funciona por inyección de dependencias → bueno para el test
Factories nos permiten instanciar siempre a través de una inyección de dependencias


##### [Repositorios](https://youtu.be/0Q1p1cXI_64?t=3687)

La conexión de mi dominio (pura lógica abstracta) con el mundo real → se modifican BD, se leen de BD, etc..
Deben devolver un objeto del dominio

##### [Entidades](https://youtu.be/0Q1p1cXI_64?t=4715)

Una entidad representa un concepto del negocio. Y tiene que cumplir dos cosas:
- Tiene que tener un identificador (dentro del contexto)
- Sus valores pueden cambiar con el tiempo (menos el ID)

Entidad anemica → saco de información sin ningún comportamiento propio

Las entidades, por convención, tienen todas un método `.toJSON()` que transforma elementos del dominio en objetos nativos javascript (desenvuelve de la entidad). solo los datos, sin los metodos

Poder reconstruir una entidad siempre a partir de su salida del toJSON()
Lo que sale del `toJSON()` es lo que podría entrar a la factoría para crear exactamente la misma entidad (objeto de dominio)

La salida del `toJSON` no es la entrada del constructor → es la entrada de la factoria (es la factoria la que se encarga siempre de crear los objetos)

Ejemplos:

- Domain → https://github.com/carlosvillu/UABTexthandler/blob/master/src/domain
- Entidad con metodos propios  → https://github.com/carlosvillu/UABTexthandler/blob/master/src/domain/texts/Entities/TextEntity.js
- Uso de entidad con metodo propio → https://github.com/carlosvillu/UABTexthandler/blob/4319285544efab492814db9b9fd6d50486e3a3db/src/domain/texts/Repositories/FireBaseTextsRepository.js#L46