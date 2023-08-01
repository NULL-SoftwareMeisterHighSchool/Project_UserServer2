#!/bin/sh

protoc \
    --plugin="protoc-gen-ts=/Users/oneee/.nvm/versions/node/v18.17.0/bin/protoc-gen-ts" \
    --plugin="protoc-gen-grpc=/Users/oneee/.nvm/versions/node/v18.17.0/bin/grpc_tools_node_protoc_plugin" \
    --js_out="import_style=commonjs,binary:../client/types" \
    --ts_out="service=grpc-node,mode=grpc-js:../client/types" \
    --grpc_out="grpc_js:../client/types" \
    --experimental_allow_proto3_optional \
    articles/service.proto

protoc \
    --plugin="protoc-gen-ts=/Users/oneee/.nvm/versions/node/v18.17.0/bin/protoc-gen-ts" \
    --plugin="protoc-gen-grpc=/Users/oneee/.nvm/versions/node/v18.17.0/bin/grpc_tools_node_protoc_plugin" \
    --js_out="import_style=commonjs,binary:../client/types" \
    --ts_out="service=grpc-node,mode=grpc-js:../client/types" \
    --grpc_out="grpc_js:../client/types" \
    --experimental_allow_proto3_optional \
    comments/service.proto

protoc \
    --plugin="protoc-gen-ts=/Users/oneee/.nvm/versions/node/v18.17.0/bin/protoc-gen-ts" \
    --plugin="protoc-gen-grpc=/Users/oneee/.nvm/versions/node/v18.17.0/bin/grpc_tools_node_protoc_plugin" \
    --js_out="import_style=commonjs,binary:../client/types" \
    --ts_out="service=grpc-node,mode=grpc-js:../client/types" \
    --grpc_out="grpc_js:../client/types" \
    --experimental_allow_proto3_optional \
    users/service.proto