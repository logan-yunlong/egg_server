const {app, mock, assert} = require('egg-mock/bootstrap');

describe('test/app/home.test.js', function () {
    describe('GET /', () => {
        it('should status 200 and get the body', () => {
            return app.httpRequest().get('/')
                .expect(200) //期待状态值200
                .expect('hello world') // 期待body是 hello world
        });

        // 依次发送多个请求
        it('should send multi requests', async () => {
            // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
            await app
                .httpRequest()
                .get('/')
                .expect(200) // 期望返回 status 200
                .expect('hello world'); // 期望 body 是 hello world

            // 再请求一次
            const result = await app
                .httpRequest()
                .get('/')
                .expect(200)
                .expect('hello world');

            // 也可以这样验证
            assert(result.status === 200);
        });
    })
});
