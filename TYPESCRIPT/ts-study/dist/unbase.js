"use strict";
var notSure = 4;
notSure = 'mg';
var value;
value = true;
value = 1;
value = 'hello';
value = Symbol('key');
value = {};
value = [];
value.foo.bar;
value();
new value();
value[0][0];
var val;
val = true;
val = 1;
val = 'hello';
val = Symbol('key');
val = {};
val = [];
function error(message) {
    throw new Error(message);
}
var empty = [];
var list = [1, 2, 3, 4];
var list1 = [1, 2, 3, 4, '5'];
var list2 = [1, 2, 3, 4];
var list3 = [0, 1, 'hello'];
var x;
x = ['hello', 9, false];
var Direction;
(function (Direction) {
    Direction[Direction["center"] = 1] = "center";
})(Direction || (Direction = {}));
var values;
values = [];
values = Direction;
values = [1, 'hello'];
values = {};
//# sourceMappingURL=unbase.js.map