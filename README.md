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
gulp # use this by default
gulp test  # unavailable
gulp watch # watch changes of *.html, *.js, *.sass in src/
gulp build # unavailable
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
