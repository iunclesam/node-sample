/*
    异步文件写入

        fs.open(path[, flags[, mode]], callback)
            - 用来打开文件
 */

// 引入fs模块
var fs = require("fs");

// 打开文件
fs.open("hello2.txt", "w", function (err, fd) {

    // 判断是否出错
    if (!err) {

        // 如果没有出错，则对文件进行写入操作
        fs.write(fd, "这是异步写入的内容", function (err) {

            if (!err) {
                console.log("写入成功～～");
            }

            // 关闭文件
            fs.close(fd, function (err) {
                if (!err){
                    console.log("文件已关闭～～～");
                }
            })
        })
    } else {
        console.log(err);
    }
});

console.log("程序向下执行~~~");