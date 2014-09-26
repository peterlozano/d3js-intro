// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

//$ = require('jquery');

// Bespoke.js
var deck = bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('.bullet'),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

/*
deck.on('activate', function(event) {
  var id = event.slide.id;

  var code = '';
  switch (id) {

    default:
  }

  if (code != '') {
    $(event.slide).append('<div class="slide-code">' + code + '</div>');
  }

  return false;
});

deck.on('deactivate', function(event) {
  $(event.slide).children().filter('.slide-code').remove();
  return false;
});
*/