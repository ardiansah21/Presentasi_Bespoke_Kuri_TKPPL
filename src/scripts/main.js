// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');
//theme
var beachday = require('bespoke-theme-beachday');
// var voltaire = require('bespoke-theme-voltaire');
// var nebula = require('bespoke-theme-nebula');
// //var greeny = require('bespoke-theme-greeny');
//var buildWars = require('bespoke-theme-build-wars');


// var keys = require('bespoke-keys'),
//   touch = require('bespoke-touch'),
//   //bullets = require('bespoke-bullets'),
//   //scale = require('bespoke-scale'),
//   progress = require('bespoke-progress'),
//   backdrop = require('bespoke-backdrop');

//PLUGIN
var progress = require('bespoke-progress');
//var insertCss = require('insert-css');



// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  classes(),
  nav(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  multimedia(),
  extern(bespoke),
  progress(),
  beachday(),
  //insertCss()

]);