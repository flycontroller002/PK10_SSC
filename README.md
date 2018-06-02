# 飞单插件使用教程
[ TOC ]
------

# 插件下载地址

chrome下载地址:  [<i class="icon-download"></i> 点击下载](http://dl.pconline.com.cn/download/51614-1.html)

插件下载地址[2018-06-02更新1.0.4版]: [<i class="icon-download"></i> 点击下载(1.0.4版)](https://u17570557.ctfile.com/fs/17570557-293757282)


------
# 已支持的大盘

*说明: 市面上的大盘会根据源代码划分为以下几种大盘类型, 当启动插件登陆大盘的时候,插件会自动检测是什么类型的大盘*

> * SGWIN
> * SGWIN_NEW
> * BW
> * OAXML
> * IDC

------
# 重要提醒
``` javascript
 - 必须保持飞单插件在当前窗口, 不能切换到其他窗口,否则有可能发生漏单事件
 
 - 点击"停止"后,会清空之前保留的大盘地址, 需切换到大盘随意选择一个游戏的链接点击即可
    **** "BW盘" 非常特殊 , 需要重新登录
    
 - 已飞单的数据,在会员前端将不可被撤回, 可选择"封盘后数据" ,但封盘时间需比大盘早 <10> 秒以上,否则无法飞单成
 
 - 建议设置《2》个大盘进行飞单，出现飞单失败，机器人会自动切换到备用大盘进行飞单
```
# 常见问题
## 用户信息获取失败
解决方法: 点击"停止", 重新开始 【看不见大盘地址则,参加<a href="#插件下载地址">重要提醒</a>中的第二条】  ,依然不行的话,退出大盘登录重新登录
## 飞单不断重试
 该问题的产生大部分是因为**房间的封盘的时间设置太短,** 同时**房间封盘时间晚于大盘封盘时间**,就会造成飞单失败,大盘飞单不断重试. 
 
 解决办法: 
 
- 进入房间,修改游戏的封盘时间。
- 优先封盘时间较晚的大盘

## 多次尝试仍未获取大盘地址
解决办法： 最大的原因是飞单插件还未支持该类型的盘口， 提供该大盘的 地址，安全码，测试账号密码，给对应的代理【账户内包含100可用额】

# 安装教程
## 下载浏览器及插件
<a href="#插件下载地址">插件下载地址</a>
## 安装插件
- 打开右上角设置扩展中心

![图1](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a2abe050.png)
- 拖拽下载的flyController-[版本].crx

![图2](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a339bce0.png)

- 稍等10秒,安装成功图例 ,点击右上角启动插件

![图3](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a3fe4424.png)
## 启动飞单
- 登录**<房主账号>**

![图4](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a52e9764.png)
- 登录 **大盘** (例如: SGWIN 及 IDC)

![图5](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a5b8da3c.png)

![图6](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a63d4834.png)

- 选择要飞单的游戏及**是否封盘后数据**

![图7](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a6edb45f.png)

- 点击启动 ,系统自动监测大盘类型, 如未显示,参考 (<a href="#重要提醒">重要提醒</a>)

![图8](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6d7db8759.png)

- **确保飞单插件一直在运作**

- ![图9](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a76e1d1a.png)

- 会员在手机中下单

![图10](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a818ea99.png)

- 飞单成功样例

![图11](http://dns.ying360.net/bug/Uploads/Picture/2018-05-28/5b0b6a898f6d4.png)

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU0NTI3MzU2MSwtMTI3Njc2MjI1OV19
-->