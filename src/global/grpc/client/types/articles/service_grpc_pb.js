// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var articles_service_pb = require('../articles/service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_articles_CreateArticleRequest(arg) {
  if (!(arg instanceof articles_service_pb.CreateArticleRequest)) {
    throw new Error('Expected argument of type articles.CreateArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_CreateArticleRequest(buffer_arg) {
  return articles_service_pb.CreateArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_CreateArticleResponse(arg) {
  if (!(arg instanceof articles_service_pb.CreateArticleResponse)) {
    throw new Error('Expected argument of type articles.CreateArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_CreateArticleResponse(buffer_arg) {
  return articles_service_pb.CreateArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_DeleteArticleRequest(arg) {
  if (!(arg instanceof articles_service_pb.DeleteArticleRequest)) {
    throw new Error('Expected argument of type articles.DeleteArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_DeleteArticleRequest(buffer_arg) {
  return articles_service_pb.DeleteArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_GetArticleRequest(arg) {
  if (!(arg instanceof articles_service_pb.GetArticleRequest)) {
    throw new Error('Expected argument of type articles.GetArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_GetArticleRequest(buffer_arg) {
  return articles_service_pb.GetArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_GetArticleResponse(arg) {
  if (!(arg instanceof articles_service_pb.GetArticleResponse)) {
    throw new Error('Expected argument of type articles.GetArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_GetArticleResponse(buffer_arg) {
  return articles_service_pb.GetArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_ListArticleByAuthorRequest(arg) {
  if (!(arg instanceof articles_service_pb.ListArticleByAuthorRequest)) {
    throw new Error('Expected argument of type articles.ListArticleByAuthorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_ListArticleByAuthorRequest(buffer_arg) {
  return articles_service_pb.ListArticleByAuthorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_ListArticleRequest(arg) {
  if (!(arg instanceof articles_service_pb.ListArticleRequest)) {
    throw new Error('Expected argument of type articles.ListArticleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_ListArticleRequest(buffer_arg) {
  return articles_service_pb.ListArticleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_ListArticleResponse(arg) {
  if (!(arg instanceof articles_service_pb.ListArticleResponse)) {
    throw new Error('Expected argument of type articles.ListArticleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_ListArticleResponse(buffer_arg) {
  return articles_service_pb.ListArticleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_SetArticleVisibilityRequest(arg) {
  if (!(arg instanceof articles_service_pb.SetArticleVisibilityRequest)) {
    throw new Error('Expected argument of type articles.SetArticleVisibilityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_SetArticleVisibilityRequest(buffer_arg) {
  return articles_service_pb.SetArticleVisibilityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_ToggleArticleLikeRequest(arg) {
  if (!(arg instanceof articles_service_pb.ToggleArticleLikeRequest)) {
    throw new Error('Expected argument of type articles.ToggleArticleLikeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_ToggleArticleLikeRequest(buffer_arg) {
  return articles_service_pb.ToggleArticleLikeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_UpdateArticleBodyRequest(arg) {
  if (!(arg instanceof articles_service_pb.UpdateArticleBodyRequest)) {
    throw new Error('Expected argument of type articles.UpdateArticleBodyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_UpdateArticleBodyRequest(buffer_arg) {
  return articles_service_pb.UpdateArticleBodyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_articles_UpdateArticleTitleRequest(arg) {
  if (!(arg instanceof articles_service_pb.UpdateArticleTitleRequest)) {
    throw new Error('Expected argument of type articles.UpdateArticleTitleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_articles_UpdateArticleTitleRequest(buffer_arg) {
  return articles_service_pb.UpdateArticleTitleRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var ArticleServiceService = exports.ArticleServiceService = {
  createArticle: {
    path: '/articles.ArticleService/CreateArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.CreateArticleRequest,
    responseType: articles_service_pb.CreateArticleResponse,
    requestSerialize: serialize_articles_CreateArticleRequest,
    requestDeserialize: deserialize_articles_CreateArticleRequest,
    responseSerialize: serialize_articles_CreateArticleResponse,
    responseDeserialize: deserialize_articles_CreateArticleResponse,
  },
  listArticle: {
    path: '/articles.ArticleService/ListArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.ListArticleRequest,
    responseType: articles_service_pb.ListArticleResponse,
    requestSerialize: serialize_articles_ListArticleRequest,
    requestDeserialize: deserialize_articles_ListArticleRequest,
    responseSerialize: serialize_articles_ListArticleResponse,
    responseDeserialize: deserialize_articles_ListArticleResponse,
  },
  listArticleByAuthor: {
    path: '/articles.ArticleService/ListArticleByAuthor',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.ListArticleByAuthorRequest,
    responseType: articles_service_pb.ListArticleResponse,
    requestSerialize: serialize_articles_ListArticleByAuthorRequest,
    requestDeserialize: deserialize_articles_ListArticleByAuthorRequest,
    responseSerialize: serialize_articles_ListArticleResponse,
    responseDeserialize: deserialize_articles_ListArticleResponse,
  },
  getArticle: {
    path: '/articles.ArticleService/GetArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.GetArticleRequest,
    responseType: articles_service_pb.GetArticleResponse,
    requestSerialize: serialize_articles_GetArticleRequest,
    requestDeserialize: deserialize_articles_GetArticleRequest,
    responseSerialize: serialize_articles_GetArticleResponse,
    responseDeserialize: deserialize_articles_GetArticleResponse,
  },
  updateArticleBody: {
    path: '/articles.ArticleService/UpdateArticleBody',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.UpdateArticleBodyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_articles_UpdateArticleBodyRequest,
    requestDeserialize: deserialize_articles_UpdateArticleBodyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateArticleTitle: {
    path: '/articles.ArticleService/UpdateArticleTitle',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.UpdateArticleTitleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_articles_UpdateArticleTitleRequest,
    requestDeserialize: deserialize_articles_UpdateArticleTitleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteArticle: {
    path: '/articles.ArticleService/DeleteArticle',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.DeleteArticleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_articles_DeleteArticleRequest,
    requestDeserialize: deserialize_articles_DeleteArticleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  setArticleVisibility: {
    path: '/articles.ArticleService/SetArticleVisibility',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.SetArticleVisibilityRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_articles_SetArticleVisibilityRequest,
    requestDeserialize: deserialize_articles_SetArticleVisibilityRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  toggleArticleLike: {
    path: '/articles.ArticleService/ToggleArticleLike',
    requestStream: false,
    responseStream: false,
    requestType: articles_service_pb.ToggleArticleLikeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_articles_ToggleArticleLikeRequest,
    requestDeserialize: deserialize_articles_ToggleArticleLikeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ArticleServiceClient = grpc.makeGenericClientConstructor(ArticleServiceService);
