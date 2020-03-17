# 1.vue项目中动态绑定src不显示图片解决方法
渲染之后，发现图片不显示，上网查找之后发现是应为图片链接是需要通过 require包裹的
```javascript
data() {
    return {
        img_src:require("../../assets/images/mirror-service.png)"
    }
}  
```