## oejia_menu
Odoo 菜单美化主题

## 特性
- 模块安装即可使用，轻量简单，不改变原有结构
- 支持 odoo 10、11
- 支持 icon 图标，可以在odoo菜单页设置图片样式名 如“fa fa-circle-o


## 在线 Demo

关注下方测试公众号，访问 http://kf.calluu.cn/ 点“微信登录”扫码即可进入系统

![info](http://oejia.net/files/201811/23151148085.jpeg)


## 效果

![info](https://github.com/JoneXiong/oejia_menu/raw/master/static/description/3.png)

![info](https://github.com/JoneXiong/oejia_menu/raw/master/static/description/1.png)

![info](https://github.com/JoneXiong/oejia_menu/raw/master/static/description/2.png)


## 说明
Odoo11中要支持子菜单显示icon图标请做如下修改
```
#odoo/tools/convert.py 中

if not values.get('parent_id'):
改为
if 1:
```

## 交流

技术分享 http://www.oejia.net/

Odoo-OpenERP扩展开发群: 260160505
