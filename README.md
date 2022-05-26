# 大数据分析实训
## 使用Spark SQL分析美国新冠肺炎疫情
**技术栈：**

Spark SQL 数据分析

Spring Boot + Vue3 + ECharts 数据可视化

**项目实现思路：**

将Spark SQL分析的数据结果存入MySQL数据库，然后通过Spring Boot + Vue3 + ECharts可视化展示

**仓库说明：**

可视化部分是前后端分离实现的

前端使用Vue3 + ECharts

后端使用Spring Boot + MyBatis Plus  

**项目演示：**

[http://spark.znzzi.com/](http://spark.znzzi.com/)

懒得截图了，进去看吧，

⚠️每日增长的折线图有点小bug，加载可能会404，感兴趣的可以尝试修复一下


还有很多可以完善的地方比如

下钻到县地图（没做是因为没有找到完整的json地图文件，要复习所以不想在实训上浪费太多时间）

替换掉人数最少的词云图，因为词云图一般都是按照多的显示，时间紧也没有改，等等

有兴趣可以尝试一下