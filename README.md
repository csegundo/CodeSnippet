# CodeSnippet
Pequeña libreria para insertar fragmentos de código en cualquier parte de tu página HTML. Tan solo es necesario jQuery (ver versión en Requisitos) para el correcto funcionamiento.

_Small library to insert code snippets anywhere on your HTML page. All you need is jQuery (see version in Requirements) for correct operation._

## Requirements ⚙️
A continuación se muestra una tabla de contenidos con las versiones mínimas de los navegadores en los que se pueden insertar estos bloques o fragmentos de código.

_Below is a table of contents with the minimum versions of the browsers in which these blocks or code snippets can be inserted._

|                 | jQuery  | FontAwesome | Chrome | Firefox  | Opera | Safari | IE | Edge |
|-----------------|---------|-------------|--------|----------|-------|--------|----|------|
| Minimum version | v1.12.4 | v4.7.0      |        |          |       |        |    |      |

## How to embed ✒️
Lo primero de todo tendrás que incluir tanto el JS como el CSS de _CodeSnippet_ en tu página HTML.

_First of all you will have to include both the JS and the CSS of _CodeSnippet_ in your HTML page._
```
<link rel="stylesheet" href="code.snippet.css">
<script src="code.snippet.js"></script>
```

También está disponible la versión minificada, archivos [aquí](https://github.com/csegundo/CodeSnippet/tree/main/minified).

_The minified version is also available, files [here](https://github.com/csegundo/CodeSnippet/tree/main/minified)._
```
<link rel="stylesheet" href="code.snippet.min.css">
<script src="code.snippet.min.js"></script>
```

Para insertar un fragmento de código tan solo deberás incluir el esqueleto mostrado a continuación:

_To insert a code snippet, you just have to include the skeleton shown below:_

```
<div class="html-code-snippet">
    <span class="copy" title="Copy to clipboard!"><i class="fa fa-files-o"></i></span>
    <ccode>
        your code snippet here
    </ccode>
</div>
```

También podrás crear alterar los estilos para diferentes ocasiones, advirtiendo de código bueno (success), código erróneo (danger) y código con el que tener cuidado (warning).

_You can also create alter the styles for different occasions, warning of good code (success), bad code (danger) and code to be careful with._

```
<div class="html-code-snippet [success|warning|danger]">
    <span class="copy" title="Copy to clipboard!"><i class="fa fa-files-o"></i></span>
    <ccode>
        your code snippet here
    </ccode>
</div>
```

## Examples 📦
![Default](https://github.com/csegundo/CodeSnippet/tree/main/images/default.png)

![Success](https://github.com/csegundo/CodeSnippet/tree/main/images/success.png)

![Warning](https://github.com/csegundo/CodeSnippet/tree/main/images/warning.png)

![Danger](https://github.com/csegundo/CodeSnippet/tree/main/images/danger.png)

---
⌨️ with ❤️ by [csegundo](https://github.com/csegundo/BayShop) 😊
