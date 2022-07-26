"use strict";
// 参考文档 API
// https://www.eggjs.org/api/Config.html

const news = {
    serverUrl: "http://service-5yyhy5n3-1252153359.sh.apigw.tencentcs.com/release",
}
// mysql配置
const mysql = {
    client: {
        // host
        host: '43.135.50.171',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'Logan@123',
        // 数据库名
        database: 'task_app',
        debug: true
    },

    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
}

// 日志配置
const logger = {
    level: 'INFO',
    consoleLevel: 'INFO'
}
// 错误中间件配置
const errorHandler = {
    match: "*"
}
const appInfo = (appInfo) => {
    const config = {};
    config.keys = appInfo.name + '123678142_1238917';
    // config.middleware = ['cors'];
    config.view = {
        defaultViewEngine: 'nunjucks', mapping: {
            '.tpl': 'nunjucks'
        }
    }
    config.logger = logger;
    config.news = news;
    // 配置middleware
    config.middleware = ['robot', 'errorHandler']
    // 配置robot的正则表达式
    config.robot = {
        ua: [/curl/i, /Baiduspider/i],
    }
    config.mysql = mysql;
    config.errorHandler = errorHandler;
    return config;
};

module.exports = appInfo;
