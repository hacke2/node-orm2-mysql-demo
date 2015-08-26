var orm = require('orm'),
    Category = require('./models/Category'),
    ProductLine = require('./models/ProductLine');
//DB config
var opts = {
    database: "orm2",
    protocol: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    query: {
        pool: true
    }
};


orm.connect(opts, function (err, db) {
    if (err) throw err;

    //产品线
    var productLine1 = new ProductLine('神马搜索');
    var productLine2 = new ProductLine('阿里阅读');

    //类别
    var category1 = new Category(productLine1.productLineID, 'sc组件');
    var category2 = new Category(productLine1.productLineID, '明星垂搜组件');
    var category3 = new Category(productLine2.productLineID, '小说垂搜组件');
    var category4 = new Category(productLine2.productLineID, '小说基础组件');


    //获取DAL组件
    var productLineDAL = db.define("productLine", ProductLine.getType());
    var categoryDAL = db.define("category", Category.getType());

    productLineDAL.sync();
    categoryDAL.sync();

    //建表
    //categoryTest.sync();
    //初始化数据
    //productLineDAL.create([productLine1, productLine2],function(err, data) {
    //    if(err) {
    //        console.error(err);
    //    }else {
    //        console.log(JSON.stringify(data));
    //    }
    //});
    //categoryDAL.create([category1, category2, category3, category4],function(err, data) {
    //    if(err) {
    //        console.error(err);
    //    }else {
    //        console.log(JSON.stringify(data));
    //    }
    //});

    //找到所有的产量线

    //productLineDAL.find({}, function(err, data) {
    //    if(err) {
    //        console.error(err);
    //    }else {
    //        console.log(JSON.stringify(data));
    //    }
    //});

    //db.settings.set("properties.association_key", "{name}ID");
    ////找到神马搜索所有产品线的所有业务
    //categoryDAL.hasOne('productLine', productLineDAL);
    //categoryDAL.findByProductLine({}).one(function(err, data) {
    //    console.log(data)
    //});
    db.driver.execQuery(
        "SELECT category.?? FROM category WHERE category.?? = ?",
        ['name', 'productLineID', '33a9495313130b3929e597ce4e875508'],
        function (err, data) {
            console.log(JSON.stringify(data))
        }
    );

    //更新
    //productLineDAL.find({
    //    productLineID : '37ddacf79fe21e1d7f25e65577398e65'
    //}, function(err, _data) {
    //    if(err) {
    //        console.error(err);
    //    }else {
    //        _data[0].name = '神马搜索2';
    //        console.log(_data[0].save(function(err) {
    //                if(err) {
    //                    console.error(err);
    //                }else {
    //                    console.log('更新成功');
    //                }
    //        }));
    //    }
    //});


//search data
//    User.find({name:'Jane'}, function (err, User) {
//        console.log("User found: ", User.length);
//        console.log("User name: ", User[0].name);
//        console.log("User age : ", User[0].age);
        /*
         //update data
         User[1].age=19
         User[1].save(function (err) {
         // err.msg = "under-age";
         console.log("update successfully!");
         });*/


        /*
         //delete data
         User[0].remove(function(err){
         console.log("delete successfully!")
         })*/

});