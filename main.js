var h = require("virtual-dom/h");
var diff = require("virtual-dom/diff");
var patch = require("virtual-dom/patch");
var createElement = require("virtual-dom/create-element");

function render(count) {
  return h("div", {
    style: {}
  }, [String(count)]);
}

var count = 0;

var tree = render(count);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

setInterval(function() {
  count++;
  var newTree = render(count);
  var patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree
}, 1000)