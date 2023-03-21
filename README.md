# px2rem
[![npm version](https://badge.fury.io/js/webpack-px-to-rem.svg)](https://badge.fury.io/js/webpack-px-to-rem)

开发响应式网页，尤其是手机端，常常采取rem单位。这个webpack的小loader主要是省去了每次输入长、宽、字体等都要把像素px换算成rem的麻烦，
开发时直接输入px,最后打包打包时换算为rem。

[English Doc](https://github.com/CallMeXYZ/px2rem/blob/master/README-en.md)

## 内容列表
  - [介绍](#介绍)
  - [安装](#安装)
  - [使用](#使用)

## 介绍
这是你原先的css或者js代码
```css
// css
div {
    font-size: 14px;
    width: 100px;
}
```
```javascript
// js 例如 react
<Page style={{ fontSize: '14px', width: '100px' }} />
```
采取默认的 `1rem=10px` 转化后变成
```css
// css
div {
    font-size: 1.400rem;
    width: 10rem;
}
```
```javascript
// js such as in react
<Page style={{ fontSize: '1.400rem', width: '10rem' }} />
```

## 安装
```javascript
npm install webpack-px-to-rem --save-dev
```

## 使用
```javascript
//in your webpack.config.js

module.exports={
   ...
    module:{
        // 或者 loaders
        rules:[
            {
                test:/\.jsx$/,
                loader:'webpack-px-to-rem',
                 query:{
                    basePx:10,
                    min:1,
                    floatWidth:3
                }

            }
        ]
    }
  }
```
