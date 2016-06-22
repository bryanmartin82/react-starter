//Probably not needed, because moving to Karma. OR...have totally separate webpack config

require('babel-register')({
  sourceRoot: './src'
});
var jsdom = require('jsdom');

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom.jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

function noop() {
  return null;
}
require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
