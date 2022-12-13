let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function SaveAcount(){
    let AcountView = ncmb.DataStore("AcountView");
    let acountView = new AcountView();
    let AccountName = document.getElementById("accountName").value;
    let MaileAddress = document.getElementById("address").value;
    let Pass = document.getElementById("pass").value;
    let RepetitionPass = document.getElementById("repetitionPass").value;

    let searchAddress;
    searchAddress = acountView.equalTo("maile_address",MaileAddress)

    if(AccountName == "" || MaileAddress == "" || Pass == "" || RepetitionPass == "" || Pass != RepetitionPass){
        alert("入力条件を満たしていません。間違いがないか再度ご確認ください。");
    }else{
        if(searchAddress==MaileAddress){
            alert("すでに存在しているメールアドレスです");
        }else{
        acountView.set("maile_address",MaileAddress)
            .set("account_name",AccountName)
            .set("password",Pass)
            .save()
            .then(function(result){
                console.log("保存成功" + JSON.stringify(result));
            })
            .catch(function(error){
                console.log("保存失敗" + error + "," + JSON.stringify(error));
            });
    }
}
}