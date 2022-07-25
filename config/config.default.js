"use strict";

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
    return config;
};

module.exports = appInfo;
