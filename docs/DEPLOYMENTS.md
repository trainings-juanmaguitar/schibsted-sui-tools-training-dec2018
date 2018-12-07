# Deployments


## Build SPA con `sui-bundler`

Para generar la SPA podemos utilizar [`sui-bundler`](https://github.com/SUI-Components/sui/tree/master/packages/sui-bundler) haciendo

```
sui-bundler build -C
```

Esto nos genera una carpeta `public` con todo nuestro código de la SPA

Si nos vamos a esta carpeta `public` y lanzamos un servidor de estáticos como por ejemplo con `npx http-server` podremos ver nuestra _build_ de la SPA en local 

## Deploy SPA

### Deploy SPA con `spa-deploy`

Para hacer deploy de la spa podemos utilizar [`spa-deploy`](https://github.com/SUI-Components/sui/tree/master/packages/sui-deploy) especificando:

- el nombre del proyecto o del deploy → `frontend-mv--web-app--juanma` 
- el nombre (ruta) de la carpeta a deployar → `public` 
- el servicio de hosting → [`--now`](https://github.com/SUI-Components/sui/tree/master/packages/sui-deploy#--now) 
- si queremos deploy público (también podría ser [con contraseña](https://github.com/SUI-Components/sui/tree/master/packages/sui-deploy#-a---auth-userpassword-only-for-spa)) → [--public](https://github.com/SUI-Components/sui/tree/master/packages/sui-deploy#-p---public)

```
sui-deploy spa frontend-mv--web-app--juanma public --now --public
```

> ⚠️  !Ojo! Para que funcione correctamente el deploy con `spa-deploy` hay que especificar un token que puedes obtener desde https://zeit.co/account/tokens


Asi que especificando el token...

```
 NOW_TOKEN=XXXXXXXXXXXXXXXXX sui-deploy spa frontend-mv--web-app--juanma public --now --public
```

...esto hará deploy de nuestra SPA en `https://frontend-mv-web-app-juanma.now.sh` 


### Deploy SPA directamente con `now`

También podemos hacer deploy con `now` directamente para lo que necesitaremos estar logueados (o especificar un token )

Podemos comprobar si estamos logueados con `now whoami`. Si no lo estamos nos podemos loguear con `now login`

Una vez logueados podemos hacer deploy con `now` especificando:

- el nombre del proyecto o del deploy → `frontend-mv--web-app--juanma` 
- el nombre (ruta) de la carpeta a deployar → `public`  

```
now -n frontend-mv--web-app--juanma public
```

Si queremos hacer deploy independientemente de estar logueados o no, podemos especificar el token con el parametro `-t`

```
now -n frontend-mv--web-app--juanma public -t XXXXXXXXXXXXXXXXX
```


## Build SSR 

Para generar la SSR podemos utilizar [`sui-ssr`](https://github.com/SUI-Components/sui/tree/master/packages/sui-ssr) haciendo

```
sui-ssr build -C
```

Esto nos genera una carpeta `server` con todo nuestro código de servidor automáticamente generado.

Es decir que haciendo `node server` lanzaríamos el servidor con la versión SSR de nuestra SPA en local 

```
NODE_ENV=development node server
```


## Deploy SSR

Para hacer deploy de la versión SSR de nuestra app tenemos primero que generar una versión autocontenida con `sui-ssr archive`

```
sui-ssr archive > /tmp/server.zip
```

Esto genera un paquete autocontenido (artifactory) que se puede deployar de manera autónoma

### Deploy SSR directamente con `now`

Para hacer _deploy_ con `now` directamente de esta versión autocontenida generada con `sui-ssr archive`, descomprimimos el .zip generado, entramos en la carpeta y ...

```
now -e NODE_ENV=production
```







