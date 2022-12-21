let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function LoginCeck(){
    let Add = document.getElementById("Address").value;
    let Pass = document.getElementById("Pass").value;
    
    ncmb.User.loginWithMailAddress(Add, Pass)
        .then(function(result){
            console.log("ログイン成功:" + JSON.stringify(result));
            alert("ログインに成功しました。");
            window.location.href="./Home.html";
        })
        .catch(function(err){
            alert("ログインに失敗しました。")
            console.log("ログイン失敗:" + err + ", " + JSON.stringify(err));
        });
}
