//文本输入
const lines = popclip.input.text.match(/[^\r\n]+/g) // 按行读取

//文本转换
var res=[]

for( var i=0; i<lines.length;i++){ //遍历所有行
    if(lines[i].replace(/^\s+|\s+$/g,"").length>0){ // 判断是否是空行
        res.push(lines[i]) // 保留非空行
    }
}

//文本输出
popclip.pasteText(res.join('\n')) // 将所有行拼接并粘贴