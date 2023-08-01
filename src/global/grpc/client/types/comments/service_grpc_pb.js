// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var comments_service_pb = require('../comments/service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_commnets_CreateCommentRequest(arg) {
  if (!(arg instanceof comments_service_pb.CreateCommentRequest)) {
    throw new Error('Expected argument of type commnets.CreateCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commnets_CreateCommentRequest(buffer_arg) {
  return comments_service_pb.CreateCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commnets_DeleteCommnetRequest(arg) {
  if (!(arg instanceof comments_service_pb.DeleteCommnetRequest)) {
    throw new Error('Expected argument of type commnets.DeleteCommnetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commnets_DeleteCommnetRequest(buffer_arg) {
  return comments_service_pb.DeleteCommnetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commnets_GetCommentsByArticleIDRequest(arg) {
  if (!(arg instanceof comments_service_pb.GetCommentsByArticleIDRequest)) {
    throw new Error('Expected argument of type commnets.GetCommentsByArticleIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commnets_GetCommentsByArticleIDRequest(buffer_arg) {
  return comments_service_pb.GetCommentsByArticleIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commnets_GetCommentsByArticleIDResponse(arg) {
  if (!(arg instanceof comments_service_pb.GetCommentsByArticleIDResponse)) {
    throw new Error('Expected argument of type commnets.GetCommentsByArticleIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commnets_GetCommentsByArticleIDResponse(buffer_arg) {
  return comments_service_pb.GetCommentsByArticleIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commnets_GetRepliesByCommentIDRequest(arg) {
  if (!(arg instanceof comments_service_pb.GetRepliesByCommentIDRequest)) {
    throw new Error('Expected argument of type commnets.GetRepliesByCommentIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commnets_GetRepliesByCommentIDRequest(buffer_arg) {
  return comments_service_pb.GetRepliesByCommentIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_commnets_GetRepliesByCommentIDResponse(arg) {
  if (!(arg instanceof comments_service_pb.GetRepliesByCommentIDResponse)) {
    throw new Error('Expected argument of type commnets.GetRepliesByCommentIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_commnets_GetRepliesByCommentIDResponse(buffer_arg) {
  return comments_service_pb.GetRepliesByCommentIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommentServiceService = exports.CommentServiceService = {
  createComment: {
    path: '/commnets.CommentService/CreateComment',
    requestStream: false,
    responseStream: false,
    requestType: comments_service_pb.CreateCommentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_commnets_CreateCommentRequest,
    requestDeserialize: deserialize_commnets_CreateCommentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteCommnet: {
    path: '/commnets.CommentService/DeleteCommnet',
    requestStream: false,
    responseStream: false,
    requestType: comments_service_pb.DeleteCommnetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_commnets_DeleteCommnetRequest,
    requestDeserialize: deserialize_commnets_DeleteCommnetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getCommentsByArticleID: {
    path: '/commnets.CommentService/GetCommentsByArticleID',
    requestStream: false,
    responseStream: false,
    requestType: comments_service_pb.GetCommentsByArticleIDRequest,
    responseType: comments_service_pb.GetCommentsByArticleIDResponse,
    requestSerialize: serialize_commnets_GetCommentsByArticleIDRequest,
    requestDeserialize: deserialize_commnets_GetCommentsByArticleIDRequest,
    responseSerialize: serialize_commnets_GetCommentsByArticleIDResponse,
    responseDeserialize: deserialize_commnets_GetCommentsByArticleIDResponse,
  },
  getRepliesByCommentID: {
    path: '/commnets.CommentService/GetRepliesByCommentID',
    requestStream: false,
    responseStream: false,
    requestType: comments_service_pb.GetRepliesByCommentIDRequest,
    responseType: comments_service_pb.GetRepliesByCommentIDResponse,
    requestSerialize: serialize_commnets_GetRepliesByCommentIDRequest,
    requestDeserialize: deserialize_commnets_GetRepliesByCommentIDRequest,
    responseSerialize: serialize_commnets_GetRepliesByCommentIDResponse,
    responseDeserialize: deserialize_commnets_GetRepliesByCommentIDResponse,
  },
};

exports.CommentServiceClient = grpc.makeGenericClientConstructor(CommentServiceService);
