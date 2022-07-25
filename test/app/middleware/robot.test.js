const {app, mock, assert} = require('egg-mock/bootstrap');

describe('test/app/middleware/robot.test.js', function () {
    it('机器人应当被锁定到403，禁止访问！', () => {
        return app
            .httpRequest().get('/')
            .set('User-Agent', 'Baiduspider')
            .expect(403);
    })
});
