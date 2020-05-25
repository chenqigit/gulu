一个npm包的学习代码

chenqi-vui

如人饮水,冷暖自知


我的努力求学没有得到别的好处，
只不过是愈来愈发觉自己的无知。

快速开始--

<template>
  <div id="app">
    <g-button>欢迎使用vui</g-button>
  </div>
</template>

import { Button } from 'chenqi-vui'
export default {
  name: 'App',
  components: {
    'g-button': Button
  }
}





