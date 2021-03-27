# CodeSnippet
Pequeña libreria/complemento para insertar fragmentos de código en cualquier parte de tu página HTML.

_Small library/plugin to insert code snippets anywhere on your HTML page._

## Requirements ⚙️
Requisitos necesarios para el correcto funcionamiento. Tu página debe disponer de los siguientes elementos.

_Necessary requirements for proper operation. Your page must have the following elements._

* [jQuery](https://code.jquery.com/) - Download link
* [FontAwesome](https://fontawesome.com/v4.7.0/get-started/) - Download link
* [CSS](https://github.com/csegundo/CodeSnippet/blob/main/minified/code.snippet.min.css) - CSS CodeSnippet
* [JS](https://github.com/csegundo/CodeSnippet/blob/main/minified/code.snippet.min.js) - JS CodeSnippet


A continuación se muestra una tabla de contenidos con las versiones mínimas de los navegadores en los que se pueden insertar estos bloques o fragmentos de código.

_Below is a table of contents with the minimum versions of the browsers in which these blocks or code snippets can be inserted._

|                 | jQuery  | FontAwesome | Chrome | Firefox  | Opera | Safari | IE | Edge |
|-----------------|---------|-------------|--------|----------|-------|--------|----|------|
| Minimum version | v1.12.4 | v4.7.0      | 4      | 3.5      | 10    | 3.1    | 9  | 12   |

## How to embed (v1) 🔧
Lo primero de todo tendrás que incluir tanto el JS como el CSS de _CodeSnippet_ en tu página HTML.

_First of all you will have to include both the JS and the CSS of _CodeSnippet_ in your HTML page._
```
<link rel="stylesheet" href="code.snippet.css">
<script src="code.snippet.js"></script>
```

También está disponible la versión minificada, archivos [aquí](minified/).

_The minified version is also available, files [here](minified/)._
```
<link rel="stylesheet" href="code.snippet.min.css">
<script src="code.snippet.min.js"></script>
```

Para insertar un fragmento de código tan solo deberás incluir el esqueleto mostrado a continuación:

_To insert a code snippet, you just have to include the skeleton shown below:_

```
<div class="html-code-snippet">
    <span class="copy"></span>
    <ccode>
        your code snippet here
    </ccode>
</div>
```

También podrás crear alterar los estilos para diferentes ocasiones, advirtiendo de código bueno (success), código erróneo (danger) y código con el que tener cuidado (warning).

_You can also create alter the styles for different occasions, warning of good code (success), bad code (danger) and code to be careful with._

```
<div class="html-code-snippet [success|warning|danger]">
    <span class="copy"></span>
    <ccode>
        your code snippet here
    </ccode>
</div>
```

### How to embed (v2) 🔧
Es otra forma de embeber este complemento en tu página web escribiendo menos código HTML.

_It is another way to embed this plugin into your web page by writing less HTML code._

```
<!-- inside <head> -->
<link rel="stylesheet" href="code.snippet.min.css">
<script src="code.snippet.v2.min.js"></script>

<!-- inside <body> -->
<div class="html-code-snippet [success|warning|danger]">
    your code snippet here
</div>
```

Download [here](minified/code.snippet.v2.min.js).


## Examples 📦
![Default](images/ccodeDefault.png)

![Success](images/ccodeSuccess.png)

![Warning](images/ccodeWarning.png)

![Danger](images/ccodeDanger.png)

## Status and version 🚀
Status: _unfinished_.

Version: _v1.2.0_


---
⌨️ with ❤️ by [csegundo](https://github.com/csegundo) 😊
