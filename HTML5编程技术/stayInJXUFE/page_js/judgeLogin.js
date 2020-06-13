var stroage = window.sessionStorage
var login = stroage.getItem("login")
if(login !== "ok"){
  alert("请先登录！")
  window.location.href = "./login.html"
}