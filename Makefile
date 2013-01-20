all: build
	
jshint:
	@node_modules/.bin/jshint ./public/js/*
	
build:
	touch public/js/build.js
	@node_modules/.bin/r.js -o public/js/build.js