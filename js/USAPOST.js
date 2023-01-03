let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);
 
function throwUsa(){

    let fileName = document.getElementById("file-name").value;
    let fileData = document.getElementById("file-data").files[0];
    let filetext = document.getElementById("UsaText").value;

    ncmb.File.upload(fileName, fileData, filetext)
        .then(function(res){
            // アップロード後処理
            window.location.href="./Home.html";
        })
        .catch(function(err){
            // エラー処理
        });
}