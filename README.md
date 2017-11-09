# ftl-vue-webpack

因为项目必须要考虑到SEO，后端采用freemarker渲染，所以自己在下面参考项目的基础上搞了一套兼容freemarker多页应用。首页渲染使用freemarker，其他使用vuejs。

## 主要技术

1. [Vue2](https://github.com/vuejs/vue)
2. [Webpack3](https://github.com/webpack/webpack)
3. [ElementUI](https://github.com/ElemeFE/element)
4. [Less]
5. [Freemarker]

## Freemarker处理

所有的page目录下的index.ftl作为入口文件，其他ftl文件使用[copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)拷贝到对应目录下。

## 备注
有些地方还未完善，还在进一步调试修改中

## 参考
https://github.com/Plortinus/vue-multiple-pages
