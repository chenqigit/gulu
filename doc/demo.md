做一个vue的npm包  学习~
npm init 创建环境
npm i vue
选择构建工具  
npm install -D parcel-bundler
parcel +vue 基础使用   thanks
https://www.cnblogs.com/qfstudy/p/9936586.html
./node_modules/.bin/parcel index.html --no-cache
caniuse  兼容性网站


1. 在 GitHub 上有一个远程仓库
2. 仓库中有一个 package.json
3. 仓库中有一个 LICENSE 文件
4. 仓库中有一个 README.md 文件
5. 仓库中有一个 index.html 文件

1. 安装 parcel-bundler
2. 创建 src/app.js 文件
3. 创建 src/button.vue 文件
3. 在 index.html 中引用 src/app.js 文件
4. 在 src/app.js 中引用 vue 和 src/button.vue
5. 让 `<g-button></g-button>` 变成 `<button>按钮</button>`
6. 访问 http://localhost:1234 可以正常查看按钮


BDD  行为驱动开发    (开发是为了满足用户的行为)
TDD  测试驱动开发    (需要变成测试用例,让测试用例完成)
Assert 断言

chai这是一款用于节点和浏览器的BDD / TDD断言库，可以与任何javascript测试框架完美地配对。


安装
npm install --save-dev chai

thanks https://www.cnblogs.com/jiaoshou/p/12186771.html

# 使用 Karma + Mocha做单元测试

1. Karma（`[ˈkɑrmə]` 卡玛）是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例
2. Mocha（`[ˈmoʊkə]` 摩卡）是一个单元测试框架/库，它可以用来写测试用例
3. Sinon（西农）是一个 spy / stub / mock 库，用以辅助测试（使用后才能理解）

重点部分——————
开始上传npm

0. 更新 package.json 
    1. 在 package.json 里将版本号改为 0.0.1，等我们做完了再改成 1.0.0
    2. 创建 index.js，在 index.js 里将你想要导出的内容全部导出
1. 去 https://www.npmjs.com/ 注册一个账户
2. 确认一下邮箱（必须）
3. 在 gulu 项目根目录运行 npm adduser
    - 如果错误提示里面含有 https://registry.npm.taobao.org 则说明你的 npm 源目前为淘宝源，需要更换为 npm 官方源
4. 运行 npm publish

// chenqigit
// chenqinpm

去 https://www.npmjs.com/ 注册一个账户
npm adduser 用户登录
npm publish 发布