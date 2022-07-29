// 打包后的bundle是需要在浏览器上运行，但是bundle是commonjs规范。
// 所以得自己实现export和default

//export 
let exports = {}
(function(code){
    eval(code)
})(`exports.default=(a,b)=>a+b`)

//require
(function (list) {
    function require(file) {
      var exports = {};
      (function (exports, code) {
        eval(code);
      })(exports, list[file]);
      return exports;
    }
    require("index.js");
  })({
    "index.js": `
      var add = require('add.js').default
      console.log(add(1 , 2))
          `,
    "add.js": `exports.default = function(a,b){return a + b}`,
  });
  
