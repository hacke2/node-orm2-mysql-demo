var md5Helper = require('../helpers/md5Helper'),
    ModelBase = require('./ModelBase'),
    util = require('util');

var Component = function(name, categoryID, userID, remarks) {
    var now = new Date();
    this.componentID = md5Helper.createMD5(now.getTime());
    this.categoryID = categoryID;
    this.name = name;   //组件名称
    this.userID = userID;   //创建人ID
    this.remarks = remarks || '';
    this.createTime = now;
    this.modifyTime = now;
    ModelBase.call(this);
};

//继承原型方法
util.inherits(Component, ModelBase);

module.exports = Component;

