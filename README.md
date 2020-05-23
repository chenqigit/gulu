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