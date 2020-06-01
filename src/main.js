require("./assets/styles/main.css");
import "./assets/styles/less/1.less";
// import mk from "./assets/js/index";
import $ from "jquery";
// import path from "path";
// console.log(path.join(__dirname, "123"));
// console.log(w);

console.log($);
console.log(window.$);

console.log(DEV);
console.log(FLAG);
console.log(ENIN);

const look = () => {
  console.log(2);
};
look();

function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable; // true

class B {}

function* gen() {
  yield 1;
}
console.log(gen().next());

"aaa".includes("1");

/**
 * 
 
const look = () => {
  console.log(2);
};
look();

// @log
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

"aaa".includes("1");
*/
