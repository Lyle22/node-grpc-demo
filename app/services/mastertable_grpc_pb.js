// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var mastertable_pb = require('./mastertable_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_org_example_services_CreateTableReq(arg) {
  if (!(arg instanceof mastertable_pb.CreateTableReq)) {
    throw new Error('Expected argument of type org.example.services.CreateTableReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_example_services_CreateTableReq(buffer_arg) {
  return mastertable_pb.CreateTableReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_example_services_CreateTableResp(arg) {
  if (!(arg instanceof mastertable_pb.CreateTableResp)) {
    throw new Error('Expected argument of type org.example.services.CreateTableResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_example_services_CreateTableResp(buffer_arg) {
  return mastertable_pb.CreateTableResp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_example_services_TableEntity(arg) {
  if (!(arg instanceof mastertable_pb.TableEntity)) {
    throw new Error('Expected argument of type org.example.services.TableEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_example_services_TableEntity(buffer_arg) {
  return mastertable_pb.TableEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_example_services_TableName(arg) {
  if (!(arg instanceof mastertable_pb.TableName)) {
    throw new Error('Expected argument of type org.example.services.TableName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_example_services_TableName(buffer_arg) {
  return mastertable_pb.TableName.deserializeBinary(new Uint8Array(buffer_arg));
}


var MasterTableServiceService = exports.MasterTableServiceService = {
  createTable: {
    path: '/org.example.services.MasterTableService/createTable',
    requestStream: false,
    responseStream: false,
    requestType: mastertable_pb.CreateTableReq,
    responseType: mastertable_pb.CreateTableResp,
    requestSerialize: serialize_org_example_services_CreateTableReq,
    requestDeserialize: deserialize_org_example_services_CreateTableReq,
    responseSerialize: serialize_org_example_services_CreateTableResp,
    responseDeserialize: deserialize_org_example_services_CreateTableResp,
  },
  findByName: {
    path: '/org.example.services.MasterTableService/findByName',
    requestStream: false,
    responseStream: false,
    requestType: mastertable_pb.TableName,
    responseType: mastertable_pb.TableEntity,
    requestSerialize: serialize_org_example_services_TableName,
    requestDeserialize: deserialize_org_example_services_TableName,
    responseSerialize: serialize_org_example_services_TableEntity,
    responseDeserialize: deserialize_org_example_services_TableEntity,
  },
};

exports.MasterTableServiceClient = grpc.makeGenericClientConstructor(MasterTableServiceService);
