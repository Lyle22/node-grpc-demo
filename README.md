# gRPC on Node.js Demo Application

------

Refer TO https://grpc.io/docs/languages/node/basics/#server


# 介绍
Create an API with gRPC and Node.js

# 项目构建
We will need a basic knowledge of:
- JavaScript
+ How Nodejs works
- REST
+ API
- Client to server communication.

We will need the following tools installed in our machine:
- Nodejs: You can download Nodejs binary from here
+ NPM/Yarn: NPM comes bundled with Nodejs binary. Yarn can be installed using NPM npm i yarn -g.

## 准备项目环境
进入项目跟目录
```shell

npm init -y

npm install @grpc/grpc-js @grpc/proto-loader

```

1. 使用proto-loader的方式来加载 .proto 文件

2 .使用proto-tools的方式来加载 .proto 文件

```shell
npm install -D grpc-tools

protoc --js_out=import_style=commonjs,binary:./app/services --grpc_out=grpc_js:./app/services --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin --proto_path=./protos mastertable.proto

```

## 服务端
### 运行服务
```shell
npm i
node server.js
```

## 客户端

### 访问服务
```shell
node client/new.js
```





