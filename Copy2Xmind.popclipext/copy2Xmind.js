//文本输入
const content = popclip.input.text.replace(/[\s]/g,""); // 全部读取并去除空行

//文本转换
const text_out = content.replace("。", '\n')

//文本拷贝
popclip.copyText(text_out);
