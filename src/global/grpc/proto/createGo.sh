#!/bin/sh

protoc --go_out=../server/pb --go_opt=paths=source_relative --go-grpc_out=../server/pb --go-grpc_opt=paths=source_relative --experimental_allow_proto3_optional articles/service.proto
protoc --go_out=../server/pb --go_opt=paths=source_relative --go-grpc_out=../server/pb --go-grpc_opt=paths=source_relative --experimental_allow_proto3_optional comments/service.proto
protoc --go_out=../server/pb --go_opt=paths=source_relative --go-grpc_out=../server/pb --go-grpc_opt=paths=source_relative users/service.proto
