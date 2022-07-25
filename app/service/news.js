"use strict";

const Service = require('egg').Service;

class NewsService extends Service {
    /**
     * 异步获取services
     * @param page
     * @returns {Promise<void>}
     */
    async list(page = 1) {
        const {serverUrl, pageSize} = this.config.news;
        const url = `${serverUrl}/news`;
        // 这里的serverUrl使用了自己的serverless web函数，所以简化了参数
        const options = {
            dataType: 'json',
        }
        const {data: idList} = await this.ctx.curl(url, options);
        return idList;
    }
}

module.exports = NewsService;
