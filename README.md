# admin-v2-admin

##  后台管理系统安装和启动方式

### 环境依赖:

```
 安装 nodejs v6.12.3版本
 安装 yarn
```

#### 项目初始化方式:

```
 安装依赖包： yarn
```

### 开发模式运行:

```
 yarn run dev
```

### 线上打包:

Mac / Linux系统：

```
 yarn run dist
```

Windows系统：

```
 yarn run dist_win
```



## 1. Yarn的介绍

- 定位：包管理工具，替代npm
- 安装速度快，版本锁定，缓存机制
- Yarn的安装：`npm install yarn -g`

### 1.1 Yarn语法

|           Yarn            |               Npm                |
| :-----------------------: | :------------------------------: |
|         yarn init         |             npm init             |
|           yarn            |           npm install            |
| yarn global add xxx@x.x.x |     npm install xxx@x.x.x -g     |
|    yarn add xxx@x.x.x     |   npm install xxx@x.x.x --save   |
| yarn add xxx@x.x.x --dev  | npm install xxx@x.x.x --save-dev |
|      yarn remove xxx      |  npm uninstall xxx --save(-dev)  |
|       yarn run xxx        |           npm run xxx            |

