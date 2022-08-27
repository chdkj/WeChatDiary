const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "9a2b8f1fa4eb4a47870755d6dafc33e5",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx7bd53aa41dc46b3b",

  // 微信公众号的appsecret
  APP_SECRET: "fd24f394a0120035f7bb48e187e40c28",

  // 微信公众号的模板ID
  TEMPLATE_ID: "qyoQTr8pOPv9-EX4yMYFpY1Y8BGfSsWQ6FQScbfpTZ0",

  // 天行API的key
  TXApiKey: "a4c35e25dec34e04fcecdbd3866d00b9",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "芃芃"
      // 用户列表的`微信号`
      userId: "o8v5Q5_vdjuv8qBAG-vV9sfPppRs",
      // 星座
      star: "狮子座"
      // 生日 - 格式：08-22
      birthday: "08-01"
      // 城市 - 格式：支持省市县区
      city: "金川区"
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2026-08-01",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2021-08-01",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
