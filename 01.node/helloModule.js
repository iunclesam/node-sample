/*
exports.name = "孙悟空";
exports.age = 18;
exports.sayName = function () {
    console.log("我是孙悟空～～～");
};*/

module.exports = {
    name : "孙悟空",
    age : 18,
    sayName : function () {
        console.log("我是孙悟空～～～");
    }
}


/*
var obj = {};
obj.a = {};
var a = obj.a;
// a 和 obj.a 指向的是同一个对象
// console.log(a == obj.a);
a.name = "孙悟空";
a = new Object();

console.log(obj.a.name);*/


/*var a = 10;
var b = a;
a++;

console.log("a =" + a);
console.log("b =" + b);*/


var obj = new Object();
obj.name = "孙悟空";
var obj2 = obj;
obj2.name = "猪八戒";

obj2 = null;

console.log("obj =" + obj.name);
console.log("obj2 =" + obj2);
