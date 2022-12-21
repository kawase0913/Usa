let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function SaveAcount(){
    let MaileAddress = document.getElementById("address").value;
    let AccountName = document.getElementById("accountName").value;
    
    if(AccountName == "" || MaileAddress == ""){
        alert("入力条件を満たしていません。間違いがないか再度ご確認ください。");
    } else{
        ncmb.User.requestSignUpEmail(MaileAddress)
            .set("userName",AccountName)
            .then(function(user){
                console.log("新規ユーザー登録成功:" + JSON.stringify(user));
                window.location.href="./Login.html";
            })
            .catch(function(err){
                console.log("ユーザー登録失敗:" + err + "," + JSON.stringify(err));
            });
    }
}