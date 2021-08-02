## vue: vue-cli(老版) @vue-cli(新版)   react: create-react-app

## webpack 本质是个打包工具；基于node(express) rollup (开发这些库jquery vue react的时候用到)

- 代码转化  .vue .less .scss .styls
- 代码压缩  css js html 
- 模块化    代码可复用
- 自动更新

## （node 为js在服务端运行提供了运行环境）两种常用模块化规范   commonjs规范;  esmodule;
commonjs规范    node遵循commonjs规范    导入require     导出exports. 或module.exports = {}（所有的webpack的相关配置都是commonjs规范）
esmodule 所有的业务代码基本都是esmodule  导入import      导出export