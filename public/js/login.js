var count = 2;

function validate ()
{
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var shippervalid = false;
   var usernameUser = ["user"]
   var passwordUser = ["123"]
   var usernameShipper = ["shipper123"]
   var passwordShipper = ['123']
   for (var i = 0; i < usernameUser.length; i++)

if (user == usernameUser[i])
if (password == passwordUser [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location = "add-to-cart"
   app.get('/add-to-cart', (req,res)=>{
    res.render('add-to-cart')
})
   return false ;
}
for (var i = 0; i < usernameShipper.length; i++)
if (user == usernameShipper[i])
if (password == passwordShipper[i])
{
   shippervalid = true;
   break;
}
if(shippervalid)
{
   alert("Login was successful");
   window.location = "shipper"
   app.get('/shipper', (req,res)=>{
    res.render('shipper')
})
   return false;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   alert("Wrong password or username")
   count--;
}
}