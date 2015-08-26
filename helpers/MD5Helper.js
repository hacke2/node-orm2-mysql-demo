var crypto = require('crypto');

var createMD5 = function(content) {
    return crypto.createHash('md5').update(content * Math.random() + '').digest('hex');
};

module.exports = {
    createMD5 : createMD5
};

