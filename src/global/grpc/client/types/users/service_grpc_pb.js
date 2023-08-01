// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_service_pb = require('../users/service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_CreateUserEvent(arg) {
  if (!(arg instanceof users_service_pb.CreateUserEvent)) {
    throw new Error('Expected argument of type users.CreateUserEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_CreateUserEvent(buffer_arg) {
  return users_service_pb.CreateUserEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_DeleteUserEvent(arg) {
  if (!(arg instanceof users_service_pb.DeleteUserEvent)) {
    throw new Error('Expected argument of type users.DeleteUserEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_DeleteUserEvent(buffer_arg) {
  return users_service_pb.DeleteUserEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetGithubStatsRequest(arg) {
  if (!(arg instanceof users_service_pb.GetGithubStatsRequest)) {
    throw new Error('Expected argument of type users.GetGithubStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetGithubStatsRequest(buffer_arg) {
  return users_service_pb.GetGithubStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_GetGithubStatsResponse(arg) {
  if (!(arg instanceof users_service_pb.GetGithubStatsResponse)) {
    throw new Error('Expected argument of type users.GetGithubStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_GetGithubStatsResponse(buffer_arg) {
  return users_service_pb.GetGithubStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserEventServiceService = exports.UserEventServiceService = {
  publishUserCreated: {
    path: '/users.UserEventService/PublishUserCreated',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.CreateUserEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_CreateUserEvent,
    requestDeserialize: deserialize_users_CreateUserEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  publishUserDeleted: {
    path: '/users.UserEventService/PublishUserDeleted',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.DeleteUserEvent,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_DeleteUserEvent,
    requestDeserialize: deserialize_users_DeleteUserEvent,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getGithubStats: {
    path: '/users.UserEventService/GetGithubStats',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.GetGithubStatsRequest,
    responseType: users_service_pb.GetGithubStatsResponse,
    requestSerialize: serialize_users_GetGithubStatsRequest,
    requestDeserialize: deserialize_users_GetGithubStatsRequest,
    responseSerialize: serialize_users_GetGithubStatsResponse,
    responseDeserialize: deserialize_users_GetGithubStatsResponse,
  },
};

exports.UserEventServiceClient = grpc.makeGenericClientConstructor(UserEventServiceService);
