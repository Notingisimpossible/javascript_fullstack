var parent=document.getElementById('content-items')
//console.log(parent)

var send=document.getElementById('send')
send.addEventListener('click',function(){
    var html=$('<li class="content-item">'+
    '<div class="pic">'+
        '<img src="http://img3.imgtn.bdimg.com/it/u=2567164415,1390386928&fm=26&gp=0.jpg" alt="">'+
    '</div>'+
    '<div class="message">'+
        '<p class="name">无敌的我</p>'+
        '<p class="detial">我还能削啊是擦市场上出售擦撒撒旦撒旦ADsdssafsafasfsfkjdhbdskvjsbdkvjbsdkjvbdskvbdksv</p>'+
    '</div>'+
'</li>')
html.appendTo(parent)
/*  
var li=document.createElement('li')
li.setAttribute('class','content-item')//修改标签上的属性

//console.log(li)

var divPic=document.createElement('div')
divPic.setAttribute('class','pic')
li.appendChild(divPic)


var img=document.createElement('img')
img.setAttribute('src','http://img3.imgtn.bdimg.com/it/u=2567164415,1390386928&fm=26&gp=0.jpg')
divPic.appendChild(img)
//console.log(divPic)

var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')
var p1text=document.createTextNode('我是你爸爸')
p1.setAttribute('class','name')
p1.appendChild(p1text)
message.appendChild(p1)

var p2=document.createElement('p')
var p2text=document.createTextNode('我是无敌的宫本')
p2.setAttribute('class','detial')
p2.appendChild(p2text)
message.appendChild(p2)
//console.log(li)
parent.appendChild(li)*/
})

