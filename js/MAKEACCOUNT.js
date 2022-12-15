let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function SaveAcount(){
    let user = new ncmb.User();

    let AccountName = document.getElementById("accountName").value;
    let MaileAddress = document.getElementById("address").value;
    let Pass = document.getElementById("pass").value;
    let RepetitionPass = document.getElementById("repetitionPass").value;
    
    if(AccountName == "" || MaileAddress == "" || Pass == "" || RepetitionPass == "" || Pass != RepetitionPass){
        alert("入力条件を満たしていません。間違いがないか再度ご確認ください。");
    }else{
        user.set("mailAddress",MaileAddress)
            .set("userName",AccountName)
            .set("password",Pass)
            .signUpByAccount()
            .then(function(user){
                console.log("新規ユーザー登録成功:" + JSON.stringify(user));
                window.location.href="./Login.html";
            })
            .catch(function(error){
                console.log("ユーザー登録失敗:" + error + "," + JSON.stringify(error));
            });
    }
}