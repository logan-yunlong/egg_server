"use strict";

const Controller = require('egg').Controller;

class TaskController extends Controller {
    async index() {
        let resultSet = [];
        try {
            const sql = `select * from t_task`;
            resultSet = await this.ctx.app.mysql.query(sql); // 单实例可以直接通过 app.mysql 访问
            this.logger.debug("resultSet is:" + JSON.stringify(resultSet));
            this.ctx.body = resultSet;
        } catch (e) {
            this.logger.error(e);
            this.ctx.body = resultSet;
        }
    }
}

module.exports = TaskController;
