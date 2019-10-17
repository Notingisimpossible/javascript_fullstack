const program=require('commander');

const mergeAction = (options)=>{
    console.log(options);
}
program.command('image')
.description('合并图片')
.option('-b, --background<background image>','背景图片')
.option('-f,--flag<flag image>','国旗图片')
.option('-t,--<target imag name>','合成图片')
.action(mergeAction)

program.parse(process.argv)