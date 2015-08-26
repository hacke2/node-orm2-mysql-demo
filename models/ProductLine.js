var md5Helper = require('../helpers/md5Helper'),
    ModelBase = require('./ModelBase'),
    util = require('util');

var ProductLine = function(name) {
    var now = new Date();
    this.productLineID = md5Helper.createMD5(now.getTime());
    this.name = name;   //产品线名称
    this.createTime = now;
    ModelBase.call(this);
};

ProductLine.getType = function() {
    return {
        productLineID : String,
        name : String,
        createTime : Date
    }
};


//继承原型方法
util.inherits(ProductLine, ModelBase);

module.exports = ProductLine;

