#
FROM node:14.20-alpine

ENV TIME_ZONE=Asia/Shanghai

# 建立目录 /usr/src/app
# apk add --no-cache tzdata 时区设定
# && echo "${TIME_ZONE}" > /etc/timezone \ 显示时区
# && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime
RUN \
  mkdir -p /usr/src/app \
  && apk add --no-cache tzdata \
  && echo "${TIME_ZONE}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime

# 设定工作区
WORKDIR /usr/src/app

# 复制package
COPY package.json /usr/src/app/


# 安装依赖项 使用镜像地址
RUN npm i --registry=https://registry.npm.taobao.org

COPY . /usr/src/app

EXPOSE 7001
