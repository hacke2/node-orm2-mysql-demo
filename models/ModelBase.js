//基类
var ModelBase= function() {

};

//更新值
ModelBase.prototype.setParameters = function(params) {
    for(var key in params) {
        if(this.hasOwnProperty(key)) {
            this[key] = params[key];
        }
    }
};

module.exports = ModelBase;

