const Mock = require("mockjs")
const Random = Mock.Random;
let bannerImgUrl = Random.image('315x175', '#894FC4', "#000", '轮播图！')
let recommendImgUrl = Random.image('200x200', '#894FC4', "#000", '推荐图！')
let featureImgUrl = Random.image('200x200', '#894FC4', "#000", '本周流行！')
let popImgUrl1 = Random.image('150x200', '#8aaFC4', "#000", '流行1')
let popImgUrl2 = Random.image('150x200', '#8bbFC4', "#990", '流行2！')
let newsImgUrl1 = Random.image('150x200', '#8aaFC4', "#000", '新款1')
let newsImgUrl2 = Random.image('150x200', '#8bbFC4', "#990", '新款2')
let sellImgUrl1 = Random.image('150x200', '#894FC4', "#000", '精选1')
let sellImgUrl2 = Random.image('150x200', '#8bbFC4', "#990", '精选2')

module.exports = {
  top: {
    code: "SUCCESS",
    data: {
      "banners|5": [{ bannerImgUrl: bannerImgUrl }],
      "Recommend|4": [{ link: "aaa", recommendImgUrl: recommendImgUrl, text: "推荐店铺" }],
      "Feature|8": [{ link: "aaa", featureImgUrl: featureImgUrl, text: "本周流行！" }]
    }
  },
  goods: {
    popImgUrl1: { "popImgUrl1|20": [{ img: popImgUrl1, name: "2021流行款", Price: 38.00, spot: 3624 }] },
    popImgUrl2: { "popImgUrl2|20": [{ img: popImgUrl2, name: "2021流行款", Price: 48.00, spot: 3624 }] },
    newsImgUrl1: { "newsImgUrl1|20": [{ img: newsImgUrl1, name: "2021流行款", Price: 36.00, spot: 3624 }] },
    newsImgUrl2: { "popImgUrl2|20": [{ img: newsImgUrl2, name: "2021流行款", Price: 46.00, spot: 3624 }] },
    sellImgUrl1: { "sellImgUrl1|20": [{ img: sellImgUrl1, name: "2021流行款", Price: 37.00, spot: 3624 }] },
    sellImgUrl2: { "sellImgUrl2|20": [{ img: sellImgUrl2, name: "2021流行款", Price: 47.00, spot: 3624 }] },
  }
}
