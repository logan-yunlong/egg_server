"use strict";

const Service = require('egg').Service;

class TaskService extends Service {
    async create(task) {
        const result = await this.app.mysql.insert('t_task', task); // 在 post 表中，插入 title 为 Hello World 的记录
        this.logger.debug('create success' + JSON.stringify(result));
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }

    async read(taskId) {
        return await this.app.mysql.get('t_task', {id: taskId})
    }

    async update(row) {
        const result = await this.app.mysql.update('t_task', row)
        const success = result.affectedRows === 1;
        return {
            status: success,
            result
        };
    }
}

module.exports = TaskService;
