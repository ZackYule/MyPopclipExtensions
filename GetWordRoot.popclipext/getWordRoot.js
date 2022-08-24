//文本输入
const lines = popclip.input.text.match(/[^\r\n]+/g) // 按行读取

//文本转换
var target_word=''

for( var i=0; i<lines.length;i++){ //遍历所有行
    if(lines[i].replace(/^\s+|\s+$/g,"").length>0){ // 判断是否是空行
        target_word = lines[i].split(/\r\n|\r|\n/).map(str => str.trim()).filter(str => str.length > 0)[0]; // 保留第一个字符
    }
}

//网址请求
const axios = require('axios')
const config = {
    headers: {
        'Cookie': 'JSESSIONID=DDCB5F0763E20EFE7CDC562F58AACE59; DICTWEB_LOGIN_NAME=3133333833343031363230; DICTWEB_LOGIN_PASSWORD=3033636536386130366430366133356231313235623736343465643139306662'
    }
}
const response = await axios.get('https://www.dicts.cn/dict/dict/dict!searchhtml3.asp?id='+target_word,config) 

var target_url = 'https://www.dicts.cn'+String(response.data).trim()

//文本输出
popclip.showText(target_word)
//打开网址
popclip.openUrl(target_url);
