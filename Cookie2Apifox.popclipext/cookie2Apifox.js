//文本输入
const lines = popclip.input.text.match(/[^\r\n]+/g); // 按行读取

//文本转换
var cookies_list = [];

for( var i=0; i<lines.length;i++){ //遍历所有行
    if(lines[i].replace(/^\s+|\s+$/g,"").length>0){ // 判断是否是空行
        cookies_list = cookies_list.concat(lines[i].split(';').map(str => str.replace('=',':').replace('\n','')).filter(str => str.length > 0));
    }
}

//文本复制
if (cookies_list.length > 0) {
    popclip.copyText(cookies_list.join('\n'));
}