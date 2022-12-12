let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function SaveAcount(){
    let AcountView = ncmb.DataStore("AcountView");
    let acountView = new AcountView();
    let AccountName = document.getElementById("accountName");
    let MaileAddress = document.getElementById("address");
    let Pass = document.getElementById("pass");
    acountView.set("maile_address",MaileAddress).save();
    acountView.set("account_name",AccountName).save();
    acountView.set("password",Pass).save();
}