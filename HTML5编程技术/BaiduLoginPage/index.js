function $(str) {
  return document.querySelector(str);
}

var userName = $("#userName");
var passWord = $("#passWord");
var userNameTip = $("#userNameTip");
var isletter = /^[a-zA-Z]+$/; // 字母的正则表达式
var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; // 判断邮箱的正则表达式
// 判断字符串中是否包含字母
function hasLetter(str) {
  for (var i in str) {
      var asc = str.charCodeAt(i);
      if ((asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122)) {
          return true;
      }
  }
  return false;
}
//验证手机号码是否正确
function isMobile(s) {
	var patrn = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (!patrn.exec(s))
		return false;
	return true;
}

// 当按下键盘，对输入的数据进行判断
userName.oninput = function () {
  if(userName.value.length < 5 || userName.value.length > 17) {
    userNameTip.innerText = "请输入5-15位的用户名"
  }else if(hasLetter(userName.value)){
    if(!isletter.test(userName.value.slice(0,1))){ // 判断是否为字母开头
      if (!reg.test(userName.value)) { // 不是字母开头且不符合邮箱格式
        userNameTip.innerText = "请输入正确的邮箱或用户名格式(用户名字母开头)"
      }else{
        userNameTip.innerText = ""
      }
    }else{
      userNameTip.innerText = ""
    }
  }else if(!isMobile(userName.value)) { // 判断是否符合手机格式
    userNameTip.innerText = "请输入正确的手机格式"
  }else{
    userNameTip.innerText = ""
  }
} 
// 提交表单
function subForm() {
  if(userNameTip.innerText != "" || userName.value === '' || passWord.value === '') {
    alert("请按要求输入用户名和密码")
  } else if(userName.value != "admin" || passWord.value != "123456") {
    alert("用户名或密码错误")
  } else {
    send();
  }
}

// 将表单数据以url字符串形式传递
function send() {
  var username = userName.value;
  var password = passWord.value;
  var url = "saveInfo.html" + "?" + "username=" + encodeURI(username) + "&password=" + encodeURI(password);
  window.location.href = url;
}