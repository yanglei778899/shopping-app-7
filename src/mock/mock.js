const Mock = require("mockjs")
const Random = Mock.Random;
const fs = require("fs")
const path = require("path")
const JSON5 = require("json5")
const homeData = require("./homeData.js")

// function getJsonFile(filePath) {
//   var json = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8")
//   return JSON5.parse(json)
// }
module.exports = function (app) {
  app.get("/api/getHomeData", function (rep, res) {
    // var json = getJsonFile("./homeData.json5")
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(homeData))))
  })
}