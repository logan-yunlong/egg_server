# egg_server

a server for egg.js examples

## 部署 serverless

参考文档：https://github.com/serverless-components/tencent-egg

```bash
  npm intall serverless -g
  serverless deploy
```


## Dockerfile 
from node 的版本选择

* node:<version> 
> 全量版本,没啥好说的，体积也是最大的。

* node:<version>-slim
> 这是删除冗余依赖后的精简版本镜像，和 node:<version>一样，都是基于 debian 构建，体积上比默认镜像小很多，
> 删除了很多公共的软件包，只保留了最基本的 node 运行环境。


* node:<version>-alpine
> 这个版本基于 alpine 镜像构建，比 debian 的 slim 版本还要小，可以说是最小的 node 镜像。
> 虽然体积小，但是功能不少，普通的 node.js 应用都能跑起来，
> 但是如果项目中用到了 c++ 扩展的话，就不要用这个了，
> 因为 alpine 使用 musl 代替 glibc，一些 c/c++ 环境的软件可能不兼容。

打包后的大小对比
```text
 node           14-buster           70c62b76e4cc        5 hours ago         912MB
 node           14-buster-slim      9917d232c3dd        5 hours ago         181MB
 node           14-alpine           9db54a688554        5 hours ago         117MB
```

## 使用Dockerfile打包
```bash
docker build -t egg_server ./
docker run -p 7001:7001 egg_server
```
