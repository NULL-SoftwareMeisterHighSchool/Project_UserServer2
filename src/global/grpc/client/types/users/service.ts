/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.23.4
 * source: users/service.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../google/protobuf/empty";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace users {
    export class CreateUserEvent extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userID?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userID" in data && data.userID != undefined) {
                    this.userID = data.userID;
                }
            }
        }
        get userID() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set userID(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            userID?: number;
        }): CreateUserEvent {
            const message = new CreateUserEvent({});
            if (data.userID != null) {
                message.userID = data.userID;
            }
            return message;
        }
        toObject() {
            const data: {
                userID?: number;
            } = {};
            if (this.userID != null) {
                data.userID = this.userID;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userID != 0)
                writer.writeUint32(1, this.userID);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CreateUserEvent {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CreateUserEvent();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userID = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CreateUserEvent {
            return CreateUserEvent.deserialize(bytes);
        }
    }
    export class DeleteUserEvent extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userID?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userID" in data && data.userID != undefined) {
                    this.userID = data.userID;
                }
            }
        }
        get userID() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set userID(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            userID?: number;
        }): DeleteUserEvent {
            const message = new DeleteUserEvent({});
            if (data.userID != null) {
                message.userID = data.userID;
            }
            return message;
        }
        toObject() {
            const data: {
                userID?: number;
            } = {};
            if (this.userID != null) {
                data.userID = this.userID;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userID != 0)
                writer.writeUint32(1, this.userID);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeleteUserEvent {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeleteUserEvent();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userID = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DeleteUserEvent {
            return DeleteUserEvent.deserialize(bytes);
        }
    }
    export class UserInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userID?: number;
            userLogin?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userID" in data && data.userID != undefined) {
                    this.userID = data.userID;
                }
                if ("userLogin" in data && data.userLogin != undefined) {
                    this.userLogin = data.userLogin;
                }
            }
        }
        get userID() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set userID(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get userLogin() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set userLogin(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            userID?: number;
            userLogin?: string;
        }): UserInfo {
            const message = new UserInfo({});
            if (data.userID != null) {
                message.userID = data.userID;
            }
            if (data.userLogin != null) {
                message.userLogin = data.userLogin;
            }
            return message;
        }
        toObject() {
            const data: {
                userID?: number;
                userLogin?: string;
            } = {};
            if (this.userID != null) {
                data.userID = this.userID;
            }
            if (this.userLogin != null) {
                data.userLogin = this.userLogin;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userID != 0)
                writer.writeUint32(1, this.userID);
            if (this.userLogin.length)
                writer.writeString(2, this.userLogin);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UserInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userID = reader.readUint32();
                        break;
                    case 2:
                        message.userLogin = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): UserInfo {
            return UserInfo.deserialize(bytes);
        }
    }
    export class GetGithubStatsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            users?: UserInfo[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("users" in data && data.users != undefined) {
                    this.users = data.users;
                }
            }
        }
        get users() {
            return pb_1.Message.getRepeatedWrapperField(this, UserInfo, 1) as UserInfo[];
        }
        set users(value: UserInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            users?: ReturnType<typeof UserInfo.prototype.toObject>[];
        }): GetGithubStatsRequest {
            const message = new GetGithubStatsRequest({});
            if (data.users != null) {
                message.users = data.users.map(item => UserInfo.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                users?: ReturnType<typeof UserInfo.prototype.toObject>[];
            } = {};
            if (this.users != null) {
                data.users = this.users.map((item: UserInfo) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.users.length)
                writer.writeRepeatedMessage(1, this.users, (item: UserInfo) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetGithubStatsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetGithubStatsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.users, () => pb_1.Message.addToRepeatedWrapperField(message, 1, UserInfo.deserialize(reader), UserInfo));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetGithubStatsRequest {
            return GetGithubStatsRequest.deserialize(bytes);
        }
    }
    export class GithubStats extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            userID?: number;
            contributionCount?: number;
            starCount?: number;
            issueCount?: number;
            pullRequestCount?: number;
            contributedRepositoryCount?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userID" in data && data.userID != undefined) {
                    this.userID = data.userID;
                }
                if ("contributionCount" in data && data.contributionCount != undefined) {
                    this.contributionCount = data.contributionCount;
                }
                if ("starCount" in data && data.starCount != undefined) {
                    this.starCount = data.starCount;
                }
                if ("issueCount" in data && data.issueCount != undefined) {
                    this.issueCount = data.issueCount;
                }
                if ("pullRequestCount" in data && data.pullRequestCount != undefined) {
                    this.pullRequestCount = data.pullRequestCount;
                }
                if ("contributedRepositoryCount" in data && data.contributedRepositoryCount != undefined) {
                    this.contributedRepositoryCount = data.contributedRepositoryCount;
                }
            }
        }
        get userID() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set userID(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get contributionCount() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set contributionCount(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get starCount() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set starCount(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get issueCount() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set issueCount(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get pullRequestCount() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set pullRequestCount(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get contributedRepositoryCount() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set contributedRepositoryCount(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            userID?: number;
            contributionCount?: number;
            starCount?: number;
            issueCount?: number;
            pullRequestCount?: number;
            contributedRepositoryCount?: number;
        }): GithubStats {
            const message = new GithubStats({});
            if (data.userID != null) {
                message.userID = data.userID;
            }
            if (data.contributionCount != null) {
                message.contributionCount = data.contributionCount;
            }
            if (data.starCount != null) {
                message.starCount = data.starCount;
            }
            if (data.issueCount != null) {
                message.issueCount = data.issueCount;
            }
            if (data.pullRequestCount != null) {
                message.pullRequestCount = data.pullRequestCount;
            }
            if (data.contributedRepositoryCount != null) {
                message.contributedRepositoryCount = data.contributedRepositoryCount;
            }
            return message;
        }
        toObject() {
            const data: {
                userID?: number;
                contributionCount?: number;
                starCount?: number;
                issueCount?: number;
                pullRequestCount?: number;
                contributedRepositoryCount?: number;
            } = {};
            if (this.userID != null) {
                data.userID = this.userID;
            }
            if (this.contributionCount != null) {
                data.contributionCount = this.contributionCount;
            }
            if (this.starCount != null) {
                data.starCount = this.starCount;
            }
            if (this.issueCount != null) {
                data.issueCount = this.issueCount;
            }
            if (this.pullRequestCount != null) {
                data.pullRequestCount = this.pullRequestCount;
            }
            if (this.contributedRepositoryCount != null) {
                data.contributedRepositoryCount = this.contributedRepositoryCount;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userID != 0)
                writer.writeUint32(1, this.userID);
            if (this.contributionCount != 0)
                writer.writeUint32(2, this.contributionCount);
            if (this.starCount != 0)
                writer.writeUint32(3, this.starCount);
            if (this.issueCount != 0)
                writer.writeUint32(4, this.issueCount);
            if (this.pullRequestCount != 0)
                writer.writeUint32(5, this.pullRequestCount);
            if (this.contributedRepositoryCount != 0)
                writer.writeUint32(6, this.contributedRepositoryCount);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GithubStats {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GithubStats();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.userID = reader.readUint32();
                        break;
                    case 2:
                        message.contributionCount = reader.readUint32();
                        break;
                    case 3:
                        message.starCount = reader.readUint32();
                        break;
                    case 4:
                        message.issueCount = reader.readUint32();
                        break;
                    case 5:
                        message.pullRequestCount = reader.readUint32();
                        break;
                    case 6:
                        message.contributedRepositoryCount = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GithubStats {
            return GithubStats.deserialize(bytes);
        }
    }
    export class GetGithubStatsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            statElems?: GithubStats[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("statElems" in data && data.statElems != undefined) {
                    this.statElems = data.statElems;
                }
            }
        }
        get statElems() {
            return pb_1.Message.getRepeatedWrapperField(this, GithubStats, 1) as GithubStats[];
        }
        set statElems(value: GithubStats[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            statElems?: ReturnType<typeof GithubStats.prototype.toObject>[];
        }): GetGithubStatsResponse {
            const message = new GetGithubStatsResponse({});
            if (data.statElems != null) {
                message.statElems = data.statElems.map(item => GithubStats.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                statElems?: ReturnType<typeof GithubStats.prototype.toObject>[];
            } = {};
            if (this.statElems != null) {
                data.statElems = this.statElems.map((item: GithubStats) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.statElems.length)
                writer.writeRepeatedMessage(1, this.statElems, (item: GithubStats) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetGithubStatsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetGithubStatsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.statElems, () => pb_1.Message.addToRepeatedWrapperField(message, 1, GithubStats.deserialize(reader), GithubStats));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetGithubStatsResponse {
            return GetGithubStatsResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedUserEventServiceService {
        static definition = {
            PublishUserCreated: {
                path: "/users.UserEventService/PublishUserCreated",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: CreateUserEvent) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => CreateUserEvent.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            },
            PublishUserDeleted: {
                path: "/users.UserEventService/PublishUserDeleted",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: DeleteUserEvent) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => DeleteUserEvent.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            },
            GetGithubStats: {
                path: "/users.UserEventService/GetGithubStats",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetGithubStatsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetGithubStatsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: GetGithubStatsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => GetGithubStatsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract PublishUserCreated(call: grpc_1.ServerUnaryCall<CreateUserEvent, dependency_1.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_1.google.protobuf.Empty>): void;
        abstract PublishUserDeleted(call: grpc_1.ServerUnaryCall<DeleteUserEvent, dependency_1.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_1.google.protobuf.Empty>): void;
        abstract GetGithubStats(call: grpc_1.ServerUnaryCall<GetGithubStatsRequest, GetGithubStatsResponse>, callback: grpc_1.sendUnaryData<GetGithubStatsResponse>): void;
    }
    export class UserEventServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedUserEventServiceService.definition, "UserEventService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        PublishUserCreated: GrpcUnaryServiceInterface<CreateUserEvent, dependency_1.google.protobuf.Empty> = (message: CreateUserEvent, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.google.protobuf.Empty>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.google.protobuf.Empty>, callback?: grpc_1.requestCallback<dependency_1.google.protobuf.Empty>): grpc_1.ClientUnaryCall => {
            return super.PublishUserCreated(message, metadata, options, callback);
        };
        PublishUserDeleted: GrpcUnaryServiceInterface<DeleteUserEvent, dependency_1.google.protobuf.Empty> = (message: DeleteUserEvent, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.google.protobuf.Empty>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.google.protobuf.Empty>, callback?: grpc_1.requestCallback<dependency_1.google.protobuf.Empty>): grpc_1.ClientUnaryCall => {
            return super.PublishUserDeleted(message, metadata, options, callback);
        };
        GetGithubStats: GrpcUnaryServiceInterface<GetGithubStatsRequest, GetGithubStatsResponse> = (message: GetGithubStatsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<GetGithubStatsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<GetGithubStatsResponse>, callback?: grpc_1.requestCallback<GetGithubStatsResponse>): grpc_1.ClientUnaryCall => {
            return super.GetGithubStats(message, metadata, options, callback);
        };
    }
}
