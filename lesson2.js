/* BT JS 17/1

// 1. switch case
// 2. switch case + array
// 3. kiem tra so nguyen to
// 4. hien thi ma tran 2 chieu
// 5. ham kiem tra regex
// 6. doi email , pass => funtion
// 7. giao dien dang nhap
// 8. tao nut submit kiem  tra tong

// 1,2
var x = 5;
var y =["thu 2","thu 3","thu 4","thu 5","thu 6","thu 7","CN",];

switch (x) {
  case 0:
    console.log("thu 2");
    break;
  case 1: 
    console.log("thu 3");
    break;
  case 2:
    console.log("thu 4");
    break;
  case 3:
    console.log("thu 5");
    break;
  case 4:
    console.log("thu 6");
    break;
  case 5:
    console.log(y[x-1]);
    break;
  default:
    console.log("CN");
    break;
}

// 3. kiem tra so nguyen to
function kiemtra(number) {
  if (number <= 1) {
   return false;
  }

  for(let i = 2; i <= Math.sqrt(number); i++) {
   if (number % 1 === 0) {
     return false;
   }
  }
  return true;
}

const number = parseInt(prompt("nhap 1 so : "));
if(kiemtra(number)) {
 console.log(number + " la so nguyen to")
} else {
 console.log(number + " ko phai la so nguyen to")
} 

// 4. hien thi ma tran 2 chieu
const matran = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 0]
];

for (let i = 0; i < matran.length; i++) {
  let row = '';
  for (let j = 0; j < matran[i].length; j++) {
    row += matran[i][j] + ' ';
  }
  console.log(row);
}

// 5,6,7,8
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input id="email" type="text" name="user" class="user" placeholder="Nhập email">
    <input type="password" name="pass" class="pass" placeholder="Nhập mật khẩu">
    <input onclick="dangnhap()" onclick="kiemtraemail()" type="submit" class="submit" value="Đăng nhập">
    <p id="succesfulyText" style="display: none; color: green;">Đăng nhập thành công</p>
    <p id="failText" style="display: none; color: red;">Sai tài khoản và mật khẩu. Vui lòng dăng nhập lại !</p>
    <p id="errorText" style="display: none; color: red;">Email không hợp lệ.</p>
</body>
<script>
        var login = {
            user: "thang@gmail.com",
            pass: "123123"
        };
        
        function dangnhap() {
            var userInput = document.querySelector('.user').value;
            var passInput = document.querySelector('.pass').value;
        
            if (userInput === login.user && passInput === login.pass) {
            document.getElementById("succesfulyText").style.display = "block";
            document.getElementById("failText").style.display = "none";
            document.getElementById("errorText").style.display = "none";
            } else {
            document.getElementById("failText").style.display = "block";
        
            // kiểm tra email
            var emailInput = document.getElementById("email").value;
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        
            if (regex.test(emailInput)) {
                document.getElementById("errorText").style.display = "none";
            } else {
                document.getElementById("errorText").style.display = "block";
            document.getElementById("succesfulyText").style.display = "none";
            }
            }
        }
</script>
</html>

*/