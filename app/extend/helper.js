var moment = require('moment');
// 相对时间
exports.relativeTime = (time) => {
    return moment(new Date(time * 1000)).fromNow()
};
