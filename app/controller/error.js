"use strict";
const Controller = require('egg').Controller;

class ErrorController extends Controller {
    async index() {
        try {
            this.logger.debug("initial an error by me");
            throw new Error("主动出现一个异常情况");
        } catch (err) {
            this.logger.error(err);
            return {};
        }
    }
}

module.exports = ErrorController;
