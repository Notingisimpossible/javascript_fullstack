-document.write("<br>")  <br>换行符 输出多项内容用+连接
-alert输出内容，可以是字符串或变量，与document.write 相似。
-mymessage=confirm("内容")  点击确定 返回true 取消 返回false

-prompt(str1, str2) 
str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
var myname=prompt("请输入你的姓名:");
if(myname!=null)
  {   alert("你好"+myname); }
else
  {  alert("你好 my friend.");  }

-window.open([URL], [窗口名称], [参数字符串])
窗口名称：可选参数，被打开窗口的名称。
    1.该名称由字母、数字和下划线字符组成。
    2."_top"、"_blank"、"_self"具有特殊意义的名称。
       _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页
    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
   4.name 不能包含有空格。
参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。

close() 关闭窗口

-Object.innerHTML innerHTML是获取当前对象内容
