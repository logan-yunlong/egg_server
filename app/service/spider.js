"use strict";

const Service = require('egg').Service;


class SpiderService extends Service {
    async list() {
        const rule = this.config.robot.ua;
    }
}

module.exports = SpiderService;
