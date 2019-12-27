"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming this earth...');
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.run = function () {
        console.log('跑起来。');
    };
    Cat.prototype.eat = function () {
        console.log('吃起来。。。');
    };
    Cat.prototype.sleep = function () {
        console.log('睡觉吧');
    };
    Cat.prototype.makeSound = function () {
        console.log('miao miao miao');
    };
    return Cat;
}(Animal));
var GTR = (function (_super) {
    __extends(GTR, _super);
    function GTR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GTR.prototype.init = function () {
        this.run();
    };
    return GTR;
}(Cat));
var animal = new Cat();
//# sourceMappingURL=class.js.map