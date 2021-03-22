const Mock = require("mockjs")
const Random = Mock.Random;
const fs = require("fs")
const path = require("path")
const JSON5 = require("json5")
const homeData = require("./homeData.js")

const top = homeData.top
const goods = homeData.goods

// function getJsonFile(filePath) {
//   var json = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8")
//   return JSON5.parse(json)
// }
module.exports = function (app) {
  app.get("/api/getHomeData", function (rep, res) {
    // var json = getJsonFile("./homeData.json5")
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(top))))
  })
  app.get("/api/getHomeData/getpopApi1", function (rep, res) {
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(goods.popImgUrl1))))
  })
  app.get("/api/getHomeData/getpopApi2", function (rep, res) {
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(goods.popImgUrl2))))
  })
  app.get("/api/getHomeData/newsImgUrl1", function (rep, res) {
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(goods.newsImgUrl1))))
  })
  app.get("/api/getHomeData/newsImgUrl2", function (rep, res) {
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(goods.newsImgUrl2))))
  })
  app.get("/api/getHomeData/sellImgUrl1", function (rep, res) {
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(goods.sellImgUrl1))))
  })
  app.get("/api/getHomeData/sellImgUrl2", function (rep, res) {
    res.json(Mock.mock(JSON5.parse(JSON5.stringify(goods.sellImgUrl2))))
  })
}