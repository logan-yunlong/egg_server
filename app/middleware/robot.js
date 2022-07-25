// options === app.config.robot

module.exports = (options, app) => {
    //
    return async function robotMiddleware(ctx, next) {
        // 获取user-agent
        const source = ctx.get('user-agent') || '';
        // 判断options.ua 进行判断
        const match = options.ua.some((ua) => ua.test(source));
        if (match) {
            ctx.status = 403;
            ctx.message = 'go away, robot';
        } else {
            await next();
        }
    };
}
