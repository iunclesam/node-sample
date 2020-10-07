/*
    简单文件写入
        fs.writeFile(file, data[, options], callback)
        fs.writeFileSync(file, data[, options])
            - file 要操作的文件路径
            - data 要写入的数据
            - options 选项，可以对写入进行一些设置
                - flag
                    r 只读
                    w 可写
                    a 追加
            - callback 当写入完成以后执行的函数

    var fs = require("fs");

    fs.writeFile("hello3.txt", "这是通过writeFile写入的内容", {flag:"r"}, function (err) {

        if (!err) {
            console.log("写入成功～～～");
        } else {
            console.log(err);
        }
    });
 */

// 引入fs模块
var fs = require("fs");

fs.writeFile("/Users/agan/work/front_end/node-sample/02.文件系统/hello3.txt", "这是通过writeFile写入的内容", {flag:"w"}, function (err) {
    if (!err) {
        console.log("写入成功～～～");
    } else {
        console.log(err);
    }
});