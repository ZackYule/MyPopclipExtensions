//文本输入
const content = popclip.input.text.replace(/[\s]/g,"").replace(/。+/g,"。").replace(/^，+|，+$/g,"").replace(/^。|。$/g,"") // 全部读取并去除空白

//文本转换
const text_out = content.replace(/。/g, '\n').replace(/：/g, '\n').replace(/；/g, '\n').replace(/！/g, '\n').replace(/:/g, '\n').replace(/;/g, '\n').replace(/!/g, '\n').replace(/？/g, '？\n').replace(/\?/g, '\?\n').replace(/\n\n/g, '\n')

//文本拷贝
popclip.copyText(text_out);