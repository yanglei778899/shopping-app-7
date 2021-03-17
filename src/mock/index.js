const fs = require("fs")
const path = require("path")
const JSON5 = require("json5")
const Mock = require("mockjs")

function getJsonFile(filePath) {//读取json文件
    var json = fs.readFileSync(path.join(__dirname, filePath), "utf-8")
    return JSON5.parse(json)
}

module.exports = function (app) {
    if (process.env.MOCK === true) {
        app.get("/user/userInfo", function (rep, res) {//监听http请求
            var json = getJsonFile("./data.json5")
            res.json(Mock.mock(json))
        })
        app.get("/aaa", function (rep, res) {
            var json = getJsonFile("./data.json5")
            res.json(Mock.mock(json))
        })
    }
}