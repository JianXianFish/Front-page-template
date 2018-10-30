# Explain
The file in this zip file is a template similar to Galton.

# 代码规范

## 一、 文件命名规范  

### 1.所有文件和目录都使用全小写英文，中划线分割的方式命名。

> 示例： 

```
bind-phone.html
bind-phone.js
e-sinature.html
risk-announce.html
```

### 2. 当某个文件属于某一个平台特有时，使用`.`分割，`.`后面的部分为平台名称  

> 示例

```
bind.alipay.js  // bind是功能的名称描述，alipay是指，该文件仅适用于支付宝app
bind.suning.js
bind-phone.alipay.js
```

### 3. 对于外部库，直接使用外部库文件的原命名即可，如果原命名实在太丑或不能一目了然，可以一起讨论更改

> 示例

```
jQuery.js

```

## 二、 HTML和CSS命名规范  

### 1. 样式类名，使用全小写，中划线分割方式

> 示例  

```
<style>
.example-description {

}
div.example-description {

}
</style>
```



### 2. 所有自定义属性名(属性值不做要求)

> 示例

```
<div data-name="MyNameIs..." class="example-description"></div>
```

## 三、 变量命名规范  

### 1. 所有常量，使用全大写，下划线分割

> 示例  

```
const CONFIGS = {}
const ERROR_UNKNOW = '未知错误';
```

### 2. 所有变量和函数，均使用小写字母开头，单词之间使用驼峰方式区分

> 示例

```
var myName = '码农';
function doSomeThing() {
}
```

### 3. 所有类名，均使用大写字母开头，使用驼峰方式分隔单词

> 示例  

```
class Cat {

}

var cat = new Cat()

// 这是一个类的定义
function Dog() {

}

var dog = new Dog()
```
