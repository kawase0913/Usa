let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function throwNORMALPOST(){

    let ArticleView = ncmb.DataStore("ArticleView");
    let articleView = new ArticleView();

    var fs = require('upfile');
    fs.readFile('', function (err, data) {
      if (err) throw err;
      var name = "abc.txt";
      ncmb.File.upload(name, data)
          .then(function(data){

           })
          .catch(function(err){

           });
    });
}