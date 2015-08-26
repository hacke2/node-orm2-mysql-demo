var md5Helper = require('../helpers/md5Helper'),
    ModelBase = require('./ModelBase'),
    util = require('util');

var Category = function(productLineID, name) {
    var now = new Date();
    this.categoryID = md5Helper.createMD5(now.getTime());
    this.productLineID = productLineID;
    this.name = name;   //产品线名称
    this.createTime = now;
    ModelBase.call(this);
};

Category.getType = function() {
    return {
        categoryID : String,
        productLineID : String,
        name : String,
        createTime : Date
    }
};

//继承原型方法
util.inherits(Category, ModelBase);

module.exports = Category;

