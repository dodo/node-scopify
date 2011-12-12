# Scopify Browserify plugin

Tired of having multiple global requires from different libraries or frameworks?

Put at least the browserify bundle into its own scope so it doesn't spam your global namespace.

## using the CLI tool

```shell
browserify entry.js -p scopify -o browserify.js
```

Then just throw a `<script src="/browserify.js"></script>` into your HTML!

## using the middleware

```javascript
var express = require('express');
var app = express.createServer();
app.listen(8080);

var bundle = require('browserify')(__dirname + '/entry.js');
bundle.use(require('scopify'));
app.use(bundle);
```

Then just throw a `<script src="/browserify.js"></script>` into your HTML!

