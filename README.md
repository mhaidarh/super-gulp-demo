# Super Gulp Demo

Super Gulp demo.

## Installation

```sh
npm install -g gulp
npm install
```

## Usage

Original commands:

```sh
gulp # copy, lint, build css, watch (+browser-sync)
gulp test  # test with mocha in browser (+browser-sync)
gulp watch # watch changes of *.html, *.js, *.sass|*.scss|*.less|*.styl
gulp build # default build without watch
```

Aliasing `gulp` with `npm` for easy commands:

```sh
npm start     # gulp
npm test      # gulp test
npm run watch # gulp watch
npm run build # gulp build
```

## Development

### Gulp

Tasks

* `gulp.task`: defines your tasks. Its arguments are name, deps and fn.
* `gulp.src`: points to the files we want to use.
* `gulp.dest`: points to the output folder we want to write files to
* `gulp.watch`:

## License

MIT
