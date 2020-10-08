/*
    流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

var fs = require("fs");

// 创建一个可读流
var rs = fs.createReadStream("/Users/agan/Downloads/Kalimba.mp3");

// 创建一个可写流
var ws = fs.createWriteStream("a.mp3");

// 监听流的开启和关闭
rs.once("open", function () {
    console.log("可读流打开～～");
});

rs.once("close", function () {
    console.log("可读流关闭～～");
});

ws.once("open", function () {
    console.log("可写流打开～～");
});

ws.once("close", function () {
    console.log("可写流关闭～～");
});

// pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
