const Controller = require('egg').Controller;

class NewsController extends Controller {

    async list() {
        let dataList = {
            list: [
                {id: 1, title: 'this is news 1', url: '/news/1'},
                {id: 2, title: 'this is news 2', url: '/news/2'},
            ]
        }
        // 再次获取一下远程的信息
        const remoteNewsList = await this.ctx.service.news.list(0);
        dataList.list = [...dataList.list, ...remoteNewsList];
        console.log(dataList.list);
        await this.ctx.render('news/list.tpl', dataList);
    }


}


module.exports = NewsController;
