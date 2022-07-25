"use strict";

const news = {
    serverUrl: "https://service-5yyhy5n3-1252153359.sh.apigw.tencentcs.com/release",
}
const appInfo = (appInfo) => {
    const config = {};
    config.keys = appInfo.name + '123678142_1238917';
    // config.middleware = ['cors'];
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    }
    config.news = news;
    // 配置middleware
    config.middleware = ['robot']
    // 配置robot的正则表达式
    config.robot = {ua: [/Baiduspider/i]}
    return config;
};

module.exports = appInfo;
