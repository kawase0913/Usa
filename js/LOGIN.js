let applicationKey = "d53f9a653bda166214deb80b3fe6825187dc78a5c26fb8b38469fe0436e8e2a5";
let clientKey = "64f25d7b797210f4581015d44968b616dd2b619ee07fbad2293c0ef4e7716b7f";
let ncmb = new NCMB(applicationKey,clientKey);

function LoginCeck(){
    var Add = document.getElementedById("address").value;
    var Pass = document.getElementedById("pass").value;
    var AccountView  = new ncmb.DataStore("AccountView"); //後でデータベースを確認
   
    AccountView.equalTo("maile_address", Add)
        .fetchAll()
        .get("password",password)
        .then(function(password){ //修正が必要かも(アプリ使用中にアカウント情報を保持するため)
            if(password != Pass){
                //パスワードが一致しない場合
                alert("パスワードが間違っています。");
                console.log("ログイン失敗(パスワード)" + error + ", " + JSON.stringify(error));
            }else{
                //パスワードが一致してログインできる場合の処理
                //アカウント情報保持のための処理？？
                location.href="Home.html";
                alert("ログイン完了");
                console.log("ログイン成功" + JSON.stringify(password));
            }
        })
        .catch(function(error){
            alert("メールアドレスが間違っています。");
            console.log("ログイン失敗(メールアドレス)" + error + ", " + JSON.stringify(error));
        });
    
     


}