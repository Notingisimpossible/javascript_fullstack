const playerAction = process.argv[2];
console.log(playerAction)

if(playerAction!='rock'&& playerAction!='paper'&& playerAction!='scissor'){
    throw new Error('出错了，再出过！');
}else{
    let computerAction;
    let flag;
    let random =Math.random()*3;
    console.log(random);
    if(random<=1){
        computerAction='rock';
        console.log('电脑出了剪刀！');
    }
    else if(random>=2){
        computerAction='scissor'
        console.log('电脑出了石头！');
    }
    else{
        computerAction='paper'
        console.log('电脑出了布！')
    }


    if(playerAction==computerAction)
    {
        console.log('平局!');
    }
    else if(playerAction=='rock'&&computerAction=='paper')
    {
        console.log('你赢了1');
    }
    else if(playerAction=='rock'&&computerAction=='scissor')
    {
        console.log('你输了2');
    }
    else if(playerAction=='paper'&&computerAction=='scissor')
    {
        console.log('你赢了3');
    }
    else if(playerAction=='paper'&&computerAction=='rock')
    {
        console.log('你输了4');
    }
    else if(playerAction=='scissor'&&computerAction=='rock')
    {
        console.log('你赢了5');
    }
    else
    {
        console.log('你输了6');
    }
}