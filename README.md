# Markdown Links

## Descripcion
Markdown Links es un modulo instalable en tu proyecto,su funcionalidad es la de extraer y verificar el codigo respuesta http de links que se encuentren en archivos exclusivamente de tipo markdown,tambien cuenta con la funcionalidad de buscar dentro de carpetas archivos tipo markdown para la extracion  y verificacion de los links.



## Instalacion
El metodo de instalacion de este modulo se plantea de dos diferentes formas,por medio de el link al repositorio de github el cual se instalaria desde consola haciendo uno de npm.
```sh
npm install --global carfolacam98/BOG002-md-links
```
Otra forma de instalarlo es con un modulo de npm ejecutando el siguiente comando:
```sh
npm i mdlinks-versioncli-sigrun
```

## 2. Ejecucion

Despues de instalado el modulo verifica que las dependencias de tu package.json incluyan las siguientes lineas (la dependencia depende de la opcion que hayas elegido de descarga del modulo)
```sh
"dependencies": {
    "md-links": "github:carfolacam98/BOG002-md-links",
    //or
    "mdlinks-versioncli-sigrun": "^0.1.0"
  }
}
```

Posterior a este paso ejecuta en tu consola la linea de codigo del cli,la cual es:
```sh
mdlinks 'path' [options]
```
El path puede ser una ruta relativa o absoluta a una carpeta o archivo especifico.


#### Options

##### `--validate or -v`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats or -s`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
