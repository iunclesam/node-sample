/*
    npm的命令
        - 查看npm版本：npm -v
        - 查看所以模块版本：npm version
        - 搜索包：npm search 包名
        - 安装包：npm install / i 包名
        - 删除包：npm remove / r 包名
        - 安装包并添加到依赖中：npm install 包名 --save
        - 下载当前项目所依赖的包：npm install
        - 全局安装包（全局安装的包一般都是一些工具）：npm install 包名 -g
 */
var math = require("math");

console.log(math.add(123, 456));