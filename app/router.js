// app/router.js
module.exports = (app) => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get("/news", controller.news.list);
    router.get("/error", controller.error.index);
    router.get('/task', controller.task.index);
    router.get('/task/create', controller.task.create);
    router.get('/task/read', controller.task.read);
    router.get('/task/update', controller.task.update);
};
