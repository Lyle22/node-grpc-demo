const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./protos/news.proto";
const mastertable_PROTO_PATH = "./protos/mastertable.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService;
const MasterTableService = grpc.loadPackageDefinition(protoLoader.loadSync(mastertable_PROTO_PATH, options)).MasterTableService;

const client = new NewsService("localhost:50051", grpc.credentials.createInsecure());

const MT_Client = new MasterTableService("localhost:50051", grpc.credentials.createInsecure());

module.exports = { client, MT_Client };
