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

    // 创建一条 数据
    async create() {
        let result = {status: false, value: null};
        const task = {
            id: 2,
            title: "base",
            description: "描述信息",
        }
        try {
            var insertSuccess = await this.service.task.create(task);
            if (insertSuccess) {
                result.status = true;
                result.value = insertSuccess;
            }
            this.ctx.body = result;
        } catch (e) {
            this.logger.error(e);
            this.ctx.body = result;
        }
    }

    async read() {
        const query = this.ctx.query;
        const resultSet = await this.service.task.read(query.id);
        this.ctx.body = resultSet;
    }

    async update() {
        const row = this.ctx.request.body;
        this.logger.debug(row);
        const result = await this.service.task.update(row);
        this.ctx.body = result;
    }

}

module.exports = TaskController;
