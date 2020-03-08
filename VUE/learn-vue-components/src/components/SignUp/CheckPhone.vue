<template>
  <div class="about">
    <ul>
      <li class="p1">*</li>
      <li class="p2">手机号</li>
      <li class="li-phone">
        <i-input style="width: 200px" number size="medium" placeholder="请输入手机号"/>
      </li>
    </ul>
  <br>
  <br>
    <ul style="padding-top:30px">
      <li class="p1">*</li>
      <li class="p2">验证码</li>
      <li class="li-phone">
        <i-input number  size="medium" placeholder="请输入验证码" style="width: 200px">
          <i-button slot="append" >获取验证码</i-button>
        </i-input>
      </li>
    </ul>
    <br>
    <br>
    <ul style="padding-right:50px; padding-top:30px">
      <i-button type="error" long>验证手机号</i-button>
    </ul>
  </div>
</template>

<style scoped>
  .about{
    margin-top: 15px;
    margin-left: 15px;
  }
  .about ul {
    padding-left: 50px;
  }
  .about li {
    float: left;
    list-style: none;
  }
  .li-phone{
    padding-left: 20px;
  }
  .p1 {
    color: red;
    padding-top: 4px;
  }
  .p2{
    padding-top: 4px;
  }
</style>