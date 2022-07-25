const {app, mock, assert} = require('egg-mock/bootstrap');

describe('test/app/examples.test.js', function () {
    it('应当模拟出一个ctx对象', () => {
        const userName = 'fengmk2';
        const ctx = app.mockContext({
            user: {
                name: userName,
            }
        });
        console.assert(ctx.user);
        console.log(ctx.user.name === userName);
    })
});
