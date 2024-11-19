const grpc = require("@grpc/grpc-js");
const NEWS_PROTO_PATH = "./protos/news.proto";
const MT_PROTO_PATH = "./protos/mastertable.proto";
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const newProtos = grpc.loadPackageDefinition(protoLoader.loadSync(NEWS_PROTO_PATH, options));
const mtProtos = grpc.loadPackageDefinition(protoLoader.loadSync(MT_PROTO_PATH, options));

const server = new grpc.Server();

/**
 * Implements the RPC method.
 */
server.addService(newProtos.NewsService.service, {
    getAllNews(call, callback) {
        console.log('请求参数: 获取所有的新闻');
        const data = [{ id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" }];
        callback(null, {news: data});
    }
});

server.addService(mtProtos.org.example.services.MasterTableService.service, {
    findByName(call, callback) {
        const name = call.request.getName();
        console.log("Request Name = " + name);
        const resp = {
            "id": "123456", 
            "name": name
        };
        callback(null, resp);
    }
});

server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), (error, port) => {
    try {
      // 如果绑定成功，打印服务器运行地址和端口
      console.info(`Server running at http://0.0.0.0:50051`);
    } catch (err) {
        logger.error('Server failed to start:', err);
        return;
    }
});