all: build

jshint:
	@node_modules/.bin/jshint ./public/js/*

build:
	touch js/build.js
	@node_modules/.bin/r.js -o js/build.js

watch:
	compass watch