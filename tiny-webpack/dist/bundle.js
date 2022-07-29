(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {};
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('./src/index.js')
    })({"./src/index.js":{"deps":{"/add.js":"./src/add.js","/minus.js":"./src/minus.js"},"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"/add.js\"));\n\nvar _minus = _interopRequireDefault(require(\"/minus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log((0, _add[\"default\"])(2, 3));\nconsole.log((0, _minus[\"default\"])(2, 3));"},"./src/add.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nvar _default = add;\nexports[\"default\"] = _default;"},"./src/minus.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar minus = function minus(a, b) {\n  return a - b;\n};\n\nvar _default = minus;\nexports[\"default\"] = _default;"}})