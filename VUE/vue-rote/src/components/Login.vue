<template>
  <div class="login">
    <div class="login-wrap">
      <h2>登录页面</h2>
      <p>
        <span>账号</span>
        <input type="text">
      </p>
      <p>
        <span>密码</span>
        <input type="text">
      </p>
      <button class="btn">{{btn}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      btn: '登录'
    }
  }
}
</script>

<style>
.login{
  width: 100%;
  display: flex;
  justify-content: center;
}
h2{
  font-size: 20px;
}
.login-wrap{
  width: 400px;
  height: 300px;
  background-color: #eeeeee;
  border: solid 1px  #eeeeee;
}
</style>