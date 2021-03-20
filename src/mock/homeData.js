const Mock = require("mockjs")
const Random = Mock.Random;
let bannerImgUrl = Random.image('315x175', '#894FC4', "#000", '轮播图！')
let recommendImgUrl = Random.image('200x200', '#894FC4', "#000", '推荐图！')
let featureImgUrl = Random.image('200x200', '#894FC4', "#000", '本周流行！')

module.exports = {
  code: "SUCCESS",
  data: {
    "banners|5": [{ bannerImgUrl: bannerImgUrl }],
    "Recommend|4": [{ link: "aaa", recommendImgUrl: recommendImgUrl, text: "推荐店铺" }],
    "Feature|8": [{ link: "aaa", featureImgUrl: featureImgUrl, text: "本周流行！" }]
  }
}
