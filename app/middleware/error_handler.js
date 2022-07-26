"use strict";

module.exports = () => {
    // 异常处理
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (e) {
            // 统一的异常处理机制
            const {app} = ctx;
            // 所有的异常都在app上触发一个error事件，框架会记录一个错误日志
            app.emit('error', e, ctx);
            //
            const status = e.status || 500;
            // 生产环境时 500 错误的详细错误内容不能够返回给客户端，因为内部包含了 ：详细的错误栈信息 会涉及到一些敏感信息
            const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : e.message;
            // 设置响应体
            ctx.body = {error}
            // 设置响应状态码
            ctx.status = status;
        }
    }
};
