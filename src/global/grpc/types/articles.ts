// export const enum ArticleType {
//   GENERAL = "GENERAL",
//   TECH = "TECH",
// }

// export const encodeArticleType: { [key: string]: number } = {
//   GENERAL: 0,
//   TECH: 1,
// };

// export const decodeArticleType: { [key: number]: ArticleType } = {
//   0: ArticleType.GENERAL,
//   1: ArticleType.TECH,
// };

// export const enum ListArticleOrder {
//   TIME = "TIME",
//   VIEWS = "VIEWS",
//   LIKES = "LIKES",
// }

// export const encodeListArticleOrder: { [key: string]: number } = {
//   TIME: 0,
//   VIEWS: 1,
//   LIKES: 2,
// };

// export const decodeListArticleOrder: { [key: number]: ListArticleOrder } = {
//   0: ListArticleOrder.TIME,
//   1: ListArticleOrder.VIEWS,
//   2: ListArticleOrder.LIKES,
// };

// export interface Duration {
//   start?: google.protobuf.Timestamp;
//   end?: google.protobuf.Timestamp;
// }

// export function encodeDuration(message: Duration): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeDuration(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeDuration(message: Duration, bb: ByteBuffer): void {
//   // optional google.protobuf.Timestamp start = 1;
//   let $start = message.start;
//   if ($start !== undefined) {
//     writeVarint32(bb, 10);
//     let nested = popByteBuffer();
//     _encodegoogle.protobuf.Timestamp($start, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }

//   // optional google.protobuf.Timestamp end = 2;
//   let $end = message.end;
//   if ($end !== undefined) {
//     writeVarint32(bb, 18);
//     let nested = popByteBuffer();
//     _encodegoogle.protobuf.Timestamp($end, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }
// }

// export function decodeDuration(binary: Uint8Array): Duration {
//   return _decodeDuration(wrapByteBuffer(binary));
// }

// function _decodeDuration(bb: ByteBuffer): Duration {
//   let message: Duration = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional google.protobuf.Timestamp start = 1;
//       case 1: {
//         let limit = pushTemporaryLength(bb);
//         message.start = _decodegoogle.protobuf.Timestamp(bb);
//         bb.limit = limit;
//         break;
//       }

//       // optional google.protobuf.Timestamp end = 2;
//       case 2: {
//         let limit = pushTemporaryLength(bb);
//         message.end = _decodegoogle.protobuf.Timestamp(bb);
//         bb.limit = limit;
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface CreateArticleRequest {
//   authorID?: number;
//   type?: ArticleType;
//   title?: string;
// }

// export function encodeCreateArticleRequest(message: CreateArticleRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeCreateArticleRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeCreateArticleRequest(message: CreateArticleRequest, bb: ByteBuffer): void {
//   // optional uint32 authorID = 1;
//   let $authorID = message.authorID;
//   if ($authorID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $authorID);
//   }

//   // optional ArticleType type = 2;
//   let $type = message.type;
//   if ($type !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, encodeArticleType[$type]);
//   }

//   // optional string title = 3;
//   let $title = message.title;
//   if ($title !== undefined) {
//     writeVarint32(bb, 26);
//     writeString(bb, $title);
//   }
// }

// export function decodeCreateArticleRequest(binary: Uint8Array): CreateArticleRequest {
//   return _decodeCreateArticleRequest(wrapByteBuffer(binary));
// }

// function _decodeCreateArticleRequest(bb: ByteBuffer): CreateArticleRequest {
//   let message: CreateArticleRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 authorID = 1;
//       case 1: {
//         message.authorID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional ArticleType type = 2;
//       case 2: {
//         message.type = decodeArticleType[readVarint32(bb)];
//         break;
//       }

//       // optional string title = 3;
//       case 3: {
//         message.title = readString(bb, readVarint32(bb));
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface CreateArticleResponse {
//   articleID?: number;
// }

// export function encodeCreateArticleResponse(message: CreateArticleResponse): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeCreateArticleResponse(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeCreateArticleResponse(message: CreateArticleResponse, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }
// }

// export function decodeCreateArticleResponse(binary: Uint8Array): CreateArticleResponse {
//   return _decodeCreateArticleResponse(wrapByteBuffer(binary));
// }

// function _decodeCreateArticleResponse(bb: ByteBuffer): CreateArticleResponse {
//   let message: CreateArticleResponse = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface ListArticleRequest {
//   offset?: number;
//   amount?: number;
//   order?: ListArticleOrder;
//   userID?: number;
//   type?: ArticleType;
//   authorID?: number;
//   duration?: Duration;
//   query?: string;
// }

// export function encodeListArticleRequest(message: ListArticleRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeListArticleRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeListArticleRequest(message: ListArticleRequest, bb: ByteBuffer): void {
//   // optional uint32 offset = 1;
//   let $offset = message.offset;
//   if ($offset !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $offset);
//   }

//   // optional uint32 amount = 2;
//   let $amount = message.amount;
//   if ($amount !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $amount);
//   }

//   // optional ListArticleOrder order = 3;
//   let $order = message.order;
//   if ($order !== undefined) {
//     writeVarint32(bb, 24);
//     writeVarint32(bb, encodeListArticleOrder[$order]);
//   }

//   // optional uint32 userID = 4;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 32);
//     writeVarint32(bb, $userID);
//   }

//   // optional ArticleType type = 5;
//   let $type = message.type;
//   if ($type !== undefined) {
//     writeVarint32(bb, 40);
//     writeVarint32(bb, encodeArticleType[$type]);
//   }

//   // optional uint32 authorID = 6;
//   let $authorID = message.authorID;
//   if ($authorID !== undefined) {
//     writeVarint32(bb, 48);
//     writeVarint32(bb, $authorID);
//   }

//   // optional Duration duration = 7;
//   let $duration = message.duration;
//   if ($duration !== undefined) {
//     writeVarint32(bb, 58);
//     let nested = popByteBuffer();
//     _encodeDuration($duration, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }

//   // optional string query = 8;
//   let $query = message.query;
//   if ($query !== undefined) {
//     writeVarint32(bb, 66);
//     writeString(bb, $query);
//   }
// }

// export function decodeListArticleRequest(binary: Uint8Array): ListArticleRequest {
//   return _decodeListArticleRequest(wrapByteBuffer(binary));
// }

// function _decodeListArticleRequest(bb: ByteBuffer): ListArticleRequest {
//   let message: ListArticleRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 offset = 1;
//       case 1: {
//         message.offset = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 amount = 2;
//       case 2: {
//         message.amount = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional ListArticleOrder order = 3;
//       case 3: {
//         message.order = decodeListArticleOrder[readVarint32(bb)];
//         break;
//       }

//       // optional uint32 userID = 4;
//       case 4: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional ArticleType type = 5;
//       case 5: {
//         message.type = decodeArticleType[readVarint32(bb)];
//         break;
//       }

//       // optional uint32 authorID = 6;
//       case 6: {
//         message.authorID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional Duration duration = 7;
//       case 7: {
//         let limit = pushTemporaryLength(bb);
//         message.duration = _decodeDuration(bb);
//         bb.limit = limit;
//         break;
//       }

//       // optional string query = 8;
//       case 8: {
//         message.query = readString(bb, readVarint32(bb));
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface ListArticleElement {
//   articleID?: number;
//   authorID?: number;
//   title?: string;
//   summary?: string;
//   type?: ArticleType;
//   createdAt?: google.protobuf.Timestamp;
//   isAuthor?: boolean;
//   isPrivate?: boolean;
//   views?: Long;
//   likes?: number;
//   comments?: number;
//   thumbnail?: string;
// }

// export function encodeListArticleElement(message: ListArticleElement): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeListArticleElement(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeListArticleElement(message: ListArticleElement, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 authorID = 2;
//   let $authorID = message.authorID;
//   if ($authorID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $authorID);
//   }

//   // optional string title = 3;
//   let $title = message.title;
//   if ($title !== undefined) {
//     writeVarint32(bb, 26);
//     writeString(bb, $title);
//   }

//   // optional string summary = 4;
//   let $summary = message.summary;
//   if ($summary !== undefined) {
//     writeVarint32(bb, 34);
//     writeString(bb, $summary);
//   }

//   // optional ArticleType type = 5;
//   let $type = message.type;
//   if ($type !== undefined) {
//     writeVarint32(bb, 40);
//     writeVarint32(bb, encodeArticleType[$type]);
//   }

//   // optional google.protobuf.Timestamp createdAt = 6;
//   let $createdAt = message.createdAt;
//   if ($createdAt !== undefined) {
//     writeVarint32(bb, 50);
//     let nested = popByteBuffer();
//     _encodegoogle.protobuf.Timestamp($createdAt, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }

//   // optional bool isAuthor = 7;
//   let $isAuthor = message.isAuthor;
//   if ($isAuthor !== undefined) {
//     writeVarint32(bb, 56);
//     writeByte(bb, $isAuthor ? 1 : 0);
//   }

//   // optional bool isPrivate = 8;
//   let $isPrivate = message.isPrivate;
//   if ($isPrivate !== undefined) {
//     writeVarint32(bb, 64);
//     writeByte(bb, $isPrivate ? 1 : 0);
//   }

//   // optional uint64 views = 9;
//   let $views = message.views;
//   if ($views !== undefined) {
//     writeVarint32(bb, 72);
//     writeVarint64(bb, $views);
//   }

//   // optional uint32 likes = 10;
//   let $likes = message.likes;
//   if ($likes !== undefined) {
//     writeVarint32(bb, 80);
//     writeVarint32(bb, $likes);
//   }

//   // optional uint32 comments = 11;
//   let $comments = message.comments;
//   if ($comments !== undefined) {
//     writeVarint32(bb, 88);
//     writeVarint32(bb, $comments);
//   }

//   // optional string thumbnail = 12;
//   let $thumbnail = message.thumbnail;
//   if ($thumbnail !== undefined) {
//     writeVarint32(bb, 98);
//     writeString(bb, $thumbnail);
//   }
// }

// export function decodeListArticleElement(binary: Uint8Array): ListArticleElement {
//   return _decodeListArticleElement(wrapByteBuffer(binary));
// }

// function _decodeListArticleElement(bb: ByteBuffer): ListArticleElement {
//   let message: ListArticleElement = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 authorID = 2;
//       case 2: {
//         message.authorID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional string title = 3;
//       case 3: {
//         message.title = readString(bb, readVarint32(bb));
//         break;
//       }

//       // optional string summary = 4;
//       case 4: {
//         message.summary = readString(bb, readVarint32(bb));
//         break;
//       }

//       // optional ArticleType type = 5;
//       case 5: {
//         message.type = decodeArticleType[readVarint32(bb)];
//         break;
//       }

//       // optional google.protobuf.Timestamp createdAt = 6;
//       case 6: {
//         let limit = pushTemporaryLength(bb);
//         message.createdAt = _decodegoogle.protobuf.Timestamp(bb);
//         bb.limit = limit;
//         break;
//       }

//       // optional bool isAuthor = 7;
//       case 7: {
//         message.isAuthor = !!readByte(bb);
//         break;
//       }

//       // optional bool isPrivate = 8;
//       case 8: {
//         message.isPrivate = !!readByte(bb);
//         break;
//       }

//       // optional uint64 views = 9;
//       case 9: {
//         message.views = readVarint64(bb, /* unsigned */ true);
//         break;
//       }

//       // optional uint32 likes = 10;
//       case 10: {
//         message.likes = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 comments = 11;
//       case 11: {
//         message.comments = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional string thumbnail = 12;
//       case 12: {
//         message.thumbnail = readString(bb, readVarint32(bb));
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface ListArticleResponse {
//   articles?: ListArticleElement[];
//   totalCount?: number;
// }

// export function encodeListArticleResponse(message: ListArticleResponse): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeListArticleResponse(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeListArticleResponse(message: ListArticleResponse, bb: ByteBuffer): void {
//   // repeated ListArticleElement articles = 1;
//   let array$articles = message.articles;
//   if (array$articles !== undefined) {
//     for (let value of array$articles) {
//       writeVarint32(bb, 10);
//       let nested = popByteBuffer();
//       _encodeListArticleElement(value, nested);
//       writeVarint32(bb, nested.limit);
//       writeByteBuffer(bb, nested);
//       pushByteBuffer(nested);
//     }
//   }

//   // optional uint32 totalCount = 2;
//   let $totalCount = message.totalCount;
//   if ($totalCount !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $totalCount);
//   }
// }

// export function decodeListArticleResponse(binary: Uint8Array): ListArticleResponse {
//   return _decodeListArticleResponse(wrapByteBuffer(binary));
// }

// function _decodeListArticleResponse(bb: ByteBuffer): ListArticleResponse {
//   let message: ListArticleResponse = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // repeated ListArticleElement articles = 1;
//       case 1: {
//         let limit = pushTemporaryLength(bb);
//         let values = message.articles || (message.articles = []);
//         values.push(_decodeListArticleElement(bb));
//         bb.limit = limit;
//         break;
//       }

//       // optional uint32 totalCount = 2;
//       case 2: {
//         message.totalCount = readVarint32(bb) >>> 0;
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface ListArticleByAuthorRequest {
//   offset?: number;
//   amount?: number;
//   order?: ListArticleOrder;
//   authorID?: number;
//   userID?: number;
//   type?: ArticleType;
//   isPrivate?: boolean;
//   duration?: Duration;
//   query?: string;
// }

// export function encodeListArticleByAuthorRequest(message: ListArticleByAuthorRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeListArticleByAuthorRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeListArticleByAuthorRequest(message: ListArticleByAuthorRequest, bb: ByteBuffer): void {
//   // optional uint32 offset = 1;
//   let $offset = message.offset;
//   if ($offset !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $offset);
//   }

//   // optional uint32 amount = 2;
//   let $amount = message.amount;
//   if ($amount !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $amount);
//   }

//   // optional ListArticleOrder order = 3;
//   let $order = message.order;
//   if ($order !== undefined) {
//     writeVarint32(bb, 24);
//     writeVarint32(bb, encodeListArticleOrder[$order]);
//   }

//   // optional uint32 authorID = 4;
//   let $authorID = message.authorID;
//   if ($authorID !== undefined) {
//     writeVarint32(bb, 32);
//     writeVarint32(bb, $authorID);
//   }

//   // optional uint32 userID = 5;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 40);
//     writeVarint32(bb, $userID);
//   }

//   // optional ArticleType type = 6;
//   let $type = message.type;
//   if ($type !== undefined) {
//     writeVarint32(bb, 48);
//     writeVarint32(bb, encodeArticleType[$type]);
//   }

//   // optional bool isPrivate = 7;
//   let $isPrivate = message.isPrivate;
//   if ($isPrivate !== undefined) {
//     writeVarint32(bb, 56);
//     writeByte(bb, $isPrivate ? 1 : 0);
//   }

//   // optional Duration duration = 8;
//   let $duration = message.duration;
//   if ($duration !== undefined) {
//     writeVarint32(bb, 66);
//     let nested = popByteBuffer();
//     _encodeDuration($duration, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }

//   // optional string query = 9;
//   let $query = message.query;
//   if ($query !== undefined) {
//     writeVarint32(bb, 74);
//     writeString(bb, $query);
//   }
// }

// export function decodeListArticleByAuthorRequest(binary: Uint8Array): ListArticleByAuthorRequest {
//   return _decodeListArticleByAuthorRequest(wrapByteBuffer(binary));
// }

// function _decodeListArticleByAuthorRequest(bb: ByteBuffer): ListArticleByAuthorRequest {
//   let message: ListArticleByAuthorRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 offset = 1;
//       case 1: {
//         message.offset = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 amount = 2;
//       case 2: {
//         message.amount = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional ListArticleOrder order = 3;
//       case 3: {
//         message.order = decodeListArticleOrder[readVarint32(bb)];
//         break;
//       }

//       // optional uint32 authorID = 4;
//       case 4: {
//         message.authorID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 5;
//       case 5: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional ArticleType type = 6;
//       case 6: {
//         message.type = decodeArticleType[readVarint32(bb)];
//         break;
//       }

//       // optional bool isPrivate = 7;
//       case 7: {
//         message.isPrivate = !!readByte(bb);
//         break;
//       }

//       // optional Duration duration = 8;
//       case 8: {
//         let limit = pushTemporaryLength(bb);
//         message.duration = _decodeDuration(bb);
//         bb.limit = limit;
//         break;
//       }

//       // optional string query = 9;
//       case 9: {
//         message.query = readString(bb, readVarint32(bb));
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface GetArticleRequest {
//   articleID?: number;
//   userID?: number;
// }

// export function encodeGetArticleRequest(message: GetArticleRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeGetArticleRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeGetArticleRequest(message: GetArticleRequest, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 userID = 2;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $userID);
//   }
// }

// export function decodeGetArticleRequest(binary: Uint8Array): GetArticleRequest {
//   return _decodeGetArticleRequest(wrapByteBuffer(binary));
// }

// function _decodeGetArticleRequest(bb: ByteBuffer): GetArticleRequest {
//   let message: GetArticleRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 2;
//       case 2: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface GetArticleResponse {
//   articleID?: number;
//   authorID?: number;
//   type?: ArticleType;
//   title?: string;
//   createdAt?: google.protobuf.Timestamp;
//   updatedAt?: google.protobuf.Timestamp;
//   body?: string;
//   views?: Long;
//   likes?: number;
//   comments?: number;
//   isPrivate?: boolean;
//   isLiked?: boolean;
//   isAuthor?: boolean;
// }

// export function encodeGetArticleResponse(message: GetArticleResponse): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeGetArticleResponse(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeGetArticleResponse(message: GetArticleResponse, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 authorID = 2;
//   let $authorID = message.authorID;
//   if ($authorID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $authorID);
//   }

//   // optional ArticleType type = 3;
//   let $type = message.type;
//   if ($type !== undefined) {
//     writeVarint32(bb, 24);
//     writeVarint32(bb, encodeArticleType[$type]);
//   }

//   // optional string title = 4;
//   let $title = message.title;
//   if ($title !== undefined) {
//     writeVarint32(bb, 34);
//     writeString(bb, $title);
//   }

//   // optional google.protobuf.Timestamp createdAt = 5;
//   let $createdAt = message.createdAt;
//   if ($createdAt !== undefined) {
//     writeVarint32(bb, 42);
//     let nested = popByteBuffer();
//     _encodegoogle.protobuf.Timestamp($createdAt, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }

//   // optional google.protobuf.Timestamp updatedAt = 6;
//   let $updatedAt = message.updatedAt;
//   if ($updatedAt !== undefined) {
//     writeVarint32(bb, 50);
//     let nested = popByteBuffer();
//     _encodegoogle.protobuf.Timestamp($updatedAt, nested);
//     writeVarint32(bb, nested.limit);
//     writeByteBuffer(bb, nested);
//     pushByteBuffer(nested);
//   }

//   // optional string body = 7;
//   let $body = message.body;
//   if ($body !== undefined) {
//     writeVarint32(bb, 58);
//     writeString(bb, $body);
//   }

//   // optional uint64 views = 8;
//   let $views = message.views;
//   if ($views !== undefined) {
//     writeVarint32(bb, 64);
//     writeVarint64(bb, $views);
//   }

//   // optional uint32 likes = 9;
//   let $likes = message.likes;
//   if ($likes !== undefined) {
//     writeVarint32(bb, 72);
//     writeVarint32(bb, $likes);
//   }

//   // optional uint32 comments = 10;
//   let $comments = message.comments;
//   if ($comments !== undefined) {
//     writeVarint32(bb, 80);
//     writeVarint32(bb, $comments);
//   }

//   // optional bool isPrivate = 11;
//   let $isPrivate = message.isPrivate;
//   if ($isPrivate !== undefined) {
//     writeVarint32(bb, 88);
//     writeByte(bb, $isPrivate ? 1 : 0);
//   }

//   // optional bool isLiked = 12;
//   let $isLiked = message.isLiked;
//   if ($isLiked !== undefined) {
//     writeVarint32(bb, 96);
//     writeByte(bb, $isLiked ? 1 : 0);
//   }

//   // optional bool isAuthor = 13;
//   let $isAuthor = message.isAuthor;
//   if ($isAuthor !== undefined) {
//     writeVarint32(bb, 104);
//     writeByte(bb, $isAuthor ? 1 : 0);
//   }
// }

// export function decodeGetArticleResponse(binary: Uint8Array): GetArticleResponse {
//   return _decodeGetArticleResponse(wrapByteBuffer(binary));
// }

// function _decodeGetArticleResponse(bb: ByteBuffer): GetArticleResponse {
//   let message: GetArticleResponse = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 authorID = 2;
//       case 2: {
//         message.authorID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional ArticleType type = 3;
//       case 3: {
//         message.type = decodeArticleType[readVarint32(bb)];
//         break;
//       }

//       // optional string title = 4;
//       case 4: {
//         message.title = readString(bb, readVarint32(bb));
//         break;
//       }

//       // optional google.protobuf.Timestamp createdAt = 5;
//       case 5: {
//         let limit = pushTemporaryLength(bb);
//         message.createdAt = _decodegoogle.protobuf.Timestamp(bb);
//         bb.limit = limit;
//         break;
//       }

//       // optional google.protobuf.Timestamp updatedAt = 6;
//       case 6: {
//         let limit = pushTemporaryLength(bb);
//         message.updatedAt = _decodegoogle.protobuf.Timestamp(bb);
//         bb.limit = limit;
//         break;
//       }

//       // optional string body = 7;
//       case 7: {
//         message.body = readString(bb, readVarint32(bb));
//         break;
//       }

//       // optional uint64 views = 8;
//       case 8: {
//         message.views = readVarint64(bb, /* unsigned */ true);
//         break;
//       }

//       // optional uint32 likes = 9;
//       case 9: {
//         message.likes = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 comments = 10;
//       case 10: {
//         message.comments = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional bool isPrivate = 11;
//       case 11: {
//         message.isPrivate = !!readByte(bb);
//         break;
//       }

//       // optional bool isLiked = 12;
//       case 12: {
//         message.isLiked = !!readByte(bb);
//         break;
//       }

//       // optional bool isAuthor = 13;
//       case 13: {
//         message.isAuthor = !!readByte(bb);
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface SetArticleVisibilityRequest {
//   articleID?: number;
//   userID?: number;
//   isPrivate?: boolean;
// }

// export function encodeSetArticleVisibilityRequest(message: SetArticleVisibilityRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeSetArticleVisibilityRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeSetArticleVisibilityRequest(message: SetArticleVisibilityRequest, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 userID = 2;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $userID);
//   }

//   // optional bool isPrivate = 3;
//   let $isPrivate = message.isPrivate;
//   if ($isPrivate !== undefined) {
//     writeVarint32(bb, 24);
//     writeByte(bb, $isPrivate ? 1 : 0);
//   }
// }

// export function decodeSetArticleVisibilityRequest(binary: Uint8Array): SetArticleVisibilityRequest {
//   return _decodeSetArticleVisibilityRequest(wrapByteBuffer(binary));
// }

// function _decodeSetArticleVisibilityRequest(bb: ByteBuffer): SetArticleVisibilityRequest {
//   let message: SetArticleVisibilityRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 2;
//       case 2: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional bool isPrivate = 3;
//       case 3: {
//         message.isPrivate = !!readByte(bb);
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface UpdateArticleBodyRequest {
//   articleID?: number;
//   userID?: number;
//   body?: string;
// }

// export function encodeUpdateArticleBodyRequest(message: UpdateArticleBodyRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeUpdateArticleBodyRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeUpdateArticleBodyRequest(message: UpdateArticleBodyRequest, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 userID = 2;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $userID);
//   }

//   // optional string body = 3;
//   let $body = message.body;
//   if ($body !== undefined) {
//     writeVarint32(bb, 26);
//     writeString(bb, $body);
//   }
// }

// export function decodeUpdateArticleBodyRequest(binary: Uint8Array): UpdateArticleBodyRequest {
//   return _decodeUpdateArticleBodyRequest(wrapByteBuffer(binary));
// }

// function _decodeUpdateArticleBodyRequest(bb: ByteBuffer): UpdateArticleBodyRequest {
//   let message: UpdateArticleBodyRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 2;
//       case 2: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional string body = 3;
//       case 3: {
//         message.body = readString(bb, readVarint32(bb));
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface UpdateArticleTitleRequest {
//   articleID?: number;
//   userID?: number;
//   title?: string;
// }

// export function encodeUpdateArticleTitleRequest(message: UpdateArticleTitleRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeUpdateArticleTitleRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeUpdateArticleTitleRequest(message: UpdateArticleTitleRequest, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 userID = 2;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $userID);
//   }

//   // optional string title = 3;
//   let $title = message.title;
//   if ($title !== undefined) {
//     writeVarint32(bb, 26);
//     writeString(bb, $title);
//   }
// }

// export function decodeUpdateArticleTitleRequest(binary: Uint8Array): UpdateArticleTitleRequest {
//   return _decodeUpdateArticleTitleRequest(wrapByteBuffer(binary));
// }

// function _decodeUpdateArticleTitleRequest(bb: ByteBuffer): UpdateArticleTitleRequest {
//   let message: UpdateArticleTitleRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 2;
//       case 2: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional string title = 3;
//       case 3: {
//         message.title = readString(bb, readVarint32(bb));
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface DeleteArticleRequest {
//   articleID?: number;
//   userID?: number;
// }

// export function encodeDeleteArticleRequest(message: DeleteArticleRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeDeleteArticleRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeDeleteArticleRequest(message: DeleteArticleRequest, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 userID = 2;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $userID);
//   }
// }

// export function decodeDeleteArticleRequest(binary: Uint8Array): DeleteArticleRequest {
//   return _decodeDeleteArticleRequest(wrapByteBuffer(binary));
// }

// function _decodeDeleteArticleRequest(bb: ByteBuffer): DeleteArticleRequest {
//   let message: DeleteArticleRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 2;
//       case 2: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface ToggleArticleLikeRequest {
//   articleID?: number;
//   userID?: number;
// }

// export function encodeToggleArticleLikeRequest(message: ToggleArticleLikeRequest): Uint8Array {
//   let bb = popByteBuffer();
//   _encodeToggleArticleLikeRequest(message, bb);
//   return toUint8Array(bb);
// }

// function _encodeToggleArticleLikeRequest(message: ToggleArticleLikeRequest, bb: ByteBuffer): void {
//   // optional uint32 articleID = 1;
//   let $articleID = message.articleID;
//   if ($articleID !== undefined) {
//     writeVarint32(bb, 8);
//     writeVarint32(bb, $articleID);
//   }

//   // optional uint32 userID = 2;
//   let $userID = message.userID;
//   if ($userID !== undefined) {
//     writeVarint32(bb, 16);
//     writeVarint32(bb, $userID);
//   }
// }

// export function decodeToggleArticleLikeRequest(binary: Uint8Array): ToggleArticleLikeRequest {
//   return _decodeToggleArticleLikeRequest(wrapByteBuffer(binary));
// }

// function _decodeToggleArticleLikeRequest(bb: ByteBuffer): ToggleArticleLikeRequest {
//   let message: ToggleArticleLikeRequest = {} as any;

//   end_of_message: while (!isAtEnd(bb)) {
//     let tag = readVarint32(bb);

//     switch (tag >>> 3) {
//       case 0:
//         break end_of_message;

//       // optional uint32 articleID = 1;
//       case 1: {
//         message.articleID = readVarint32(bb) >>> 0;
//         break;
//       }

//       // optional uint32 userID = 2;
//       case 2: {
//         message.userID = readVarint32(bb) >>> 0;
//         break;
//       }

//       default:
//         skipUnknownField(bb, tag & 7);
//     }
//   }

//   return message;
// }

// export interface Long {
//   low: number;
//   high: number;
//   unsigned: boolean;
// }

// interface ByteBuffer {
//   bytes: Uint8Array;
//   offset: number;
//   limit: number;
// }

// function pushTemporaryLength(bb: ByteBuffer): number {
//   let length = readVarint32(bb);
//   let limit = bb.limit;
//   bb.limit = bb.offset + length;
//   return limit;
// }

// function skipUnknownField(bb: ByteBuffer, type: number): void {
//   switch (type) {
//     case 0: while (readByte(bb) & 0x80) { } break;
//     case 2: skip(bb, readVarint32(bb)); break;
//     case 5: skip(bb, 4); break;
//     case 1: skip(bb, 8); break;
//     default: throw new Error("Unimplemented type: " + type);
//   }
// }

// function stringToLong(value: string): Long {
//   return {
//     low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
//     high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
//     unsigned: false,
//   };
// }

// function longToString(value: Long): string {
//   let low = value.low;
//   let high = value.high;
//   return String.fromCharCode(
//     low & 0xFFFF,
//     low >>> 16,
//     high & 0xFFFF,
//     high >>> 16);
// }

// // The code below was modified from https://github.com/protobufjs/bytebuffer.js
// // which is under the Apache License 2.0.

// let f32 = new Float32Array(1);
// let f32_u8 = new Uint8Array(f32.buffer);

// let f64 = new Float64Array(1);
// let f64_u8 = new Uint8Array(f64.buffer);

// function intToLong(value: number): Long {
//   value |= 0;
//   return {
//     low: value,
//     high: value >> 31,
//     unsigned: value >= 0,
//   };
// }

// let bbStack: ByteBuffer[] = [];

// function popByteBuffer(): ByteBuffer {
//   const bb = bbStack.pop();
//   if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
//   bb.offset = bb.limit = 0;
//   return bb;
// }

// function pushByteBuffer(bb: ByteBuffer): void {
//   bbStack.push(bb);
// }

// function wrapByteBuffer(bytes: Uint8Array): ByteBuffer {
//   return { bytes, offset: 0, limit: bytes.length };
// }

// function toUint8Array(bb: ByteBuffer): Uint8Array {
//   let bytes = bb.bytes;
//   let limit = bb.limit;
//   return bytes.length === limit ? bytes : bytes.subarray(0, limit);
// }

// function skip(bb: ByteBuffer, offset: number): void {
//   if (bb.offset + offset > bb.limit) {
//     throw new Error('Skip past limit');
//   }
//   bb.offset += offset;
// }

// function isAtEnd(bb: ByteBuffer): boolean {
//   return bb.offset >= bb.limit;
// }

// function grow(bb: ByteBuffer, count: number): number {
//   let bytes = bb.bytes;
//   let offset = bb.offset;
//   let limit = bb.limit;
//   let finalOffset = offset + count;
//   if (finalOffset > bytes.length) {
//     let newBytes = new Uint8Array(finalOffset * 2);
//     newBytes.set(bytes);
//     bb.bytes = newBytes;
//   }
//   bb.offset = finalOffset;
//   if (finalOffset > limit) {
//     bb.limit = finalOffset;
//   }
//   return offset;
// }

// function advance(bb: ByteBuffer, count: number): number {
//   let offset = bb.offset;
//   if (offset + count > bb.limit) {
//     throw new Error('Read past limit');
//   }
//   bb.offset += count;
//   return offset;
// }

// function readBytes(bb: ByteBuffer, count: number): Uint8Array {
//   let offset = advance(bb, count);
//   return bb.bytes.subarray(offset, offset + count);
// }

// function writeBytes(bb: ByteBuffer, buffer: Uint8Array): void {
//   let offset = grow(bb, buffer.length);
//   bb.bytes.set(buffer, offset);
// }

// function readString(bb: ByteBuffer, count: number): string {
//   // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
//   let offset = advance(bb, count);
//   let fromCharCode = String.fromCharCode;
//   let bytes = bb.bytes;
//   let invalid = '\uFFFD';
//   let text = '';

//   for (let i = 0; i < count; i++) {
//     let c1 = bytes[i + offset], c2: number, c3: number, c4: number, c: number;

//     // 1 byte
//     if ((c1 & 0x80) === 0) {
//       text += fromCharCode(c1);
//     }

//     // 2 bytes
//     else if ((c1 & 0xE0) === 0xC0) {
//       if (i + 1 >= count) text += invalid;
//       else {
//         c2 = bytes[i + offset + 1];
//         if ((c2 & 0xC0) !== 0x80) text += invalid;
//         else {
//           c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
//           if (c < 0x80) text += invalid;
//           else {
//             text += fromCharCode(c);
//             i++;
//           }
//         }
//       }
//     }

//     // 3 bytes
//     else if ((c1 & 0xF0) == 0xE0) {
//       if (i + 2 >= count) text += invalid;
//       else {
//         c2 = bytes[i + offset + 1];
//         c3 = bytes[i + offset + 2];
//         if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
//         else {
//           c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
//           if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
//           else {
//             text += fromCharCode(c);
//             i += 2;
//           }
//         }
//       }
//     }

//     // 4 bytes
//     else if ((c1 & 0xF8) == 0xF0) {
//       if (i + 3 >= count) text += invalid;
//       else {
//         c2 = bytes[i + offset + 1];
//         c3 = bytes[i + offset + 2];
//         c4 = bytes[i + offset + 3];
//         if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
//         else {
//           c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
//           if (c < 0x10000 || c > 0x10FFFF) text += invalid;
//           else {
//             c -= 0x10000;
//             text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
//             i += 3;
//           }
//         }
//       }
//     }

//     else text += invalid;
//   }

//   return text;
// }

// function writeString(bb: ByteBuffer, text: string): void {
//   // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
//   let n = text.length;
//   let byteCount = 0;

//   // Write the byte count first
//   for (let i = 0; i < n; i++) {
//     let c = text.charCodeAt(i);
//     if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
//       c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
//     }
//     byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
//   }
//   writeVarint32(bb, byteCount);

//   let offset = grow(bb, byteCount);
//   let bytes = bb.bytes;

//   // Then write the bytes
//   for (let i = 0; i < n; i++) {
//     let c = text.charCodeAt(i);
//     if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
//       c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
//     }
//     if (c < 0x80) {
//       bytes[offset++] = c;
//     } else {
//       if (c < 0x800) {
//         bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
//       } else {
//         if (c < 0x10000) {
//           bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
//         } else {
//           bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
//           bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
//         }
//         bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
//       }
//       bytes[offset++] = (c & 0x3F) | 0x80;
//     }
//   }
// }

// function writeByteBuffer(bb: ByteBuffer, buffer: ByteBuffer): void {
//   let offset = grow(bb, buffer.limit);
//   let from = bb.bytes;
//   let to = buffer.bytes;

//   // This for loop is much faster than subarray+set on V8
//   for (let i = 0, n = buffer.limit; i < n; i++) {
//     from[i + offset] = to[i];
//   }
// }

// function readByte(bb: ByteBuffer): number {
//   return bb.bytes[advance(bb, 1)];
// }

// function writeByte(bb: ByteBuffer, value: number): void {
//   let offset = grow(bb, 1);
//   bb.bytes[offset] = value;
// }

// function readFloat(bb: ByteBuffer): number {
//   let offset = advance(bb, 4);
//   let bytes = bb.bytes;

//   // Manual copying is much faster than subarray+set in V8
//   f32_u8[0] = bytes[offset++];
//   f32_u8[1] = bytes[offset++];
//   f32_u8[2] = bytes[offset++];
//   f32_u8[3] = bytes[offset++];
//   return f32[0];
// }

// function writeFloat(bb: ByteBuffer, value: number): void {
//   let offset = grow(bb, 4);
//   let bytes = bb.bytes;
//   f32[0] = value;

//   // Manual copying is much faster than subarray+set in V8
//   bytes[offset++] = f32_u8[0];
//   bytes[offset++] = f32_u8[1];
//   bytes[offset++] = f32_u8[2];
//   bytes[offset++] = f32_u8[3];
// }

// function readDouble(bb: ByteBuffer): number {
//   let offset = advance(bb, 8);
//   let bytes = bb.bytes;

//   // Manual copying is much faster than subarray+set in V8
//   f64_u8[0] = bytes[offset++];
//   f64_u8[1] = bytes[offset++];
//   f64_u8[2] = bytes[offset++];
//   f64_u8[3] = bytes[offset++];
//   f64_u8[4] = bytes[offset++];
//   f64_u8[5] = bytes[offset++];
//   f64_u8[6] = bytes[offset++];
//   f64_u8[7] = bytes[offset++];
//   return f64[0];
// }

// function writeDouble(bb: ByteBuffer, value: number): void {
//   let offset = grow(bb, 8);
//   let bytes = bb.bytes;
//   f64[0] = value;

//   // Manual copying is much faster than subarray+set in V8
//   bytes[offset++] = f64_u8[0];
//   bytes[offset++] = f64_u8[1];
//   bytes[offset++] = f64_u8[2];
//   bytes[offset++] = f64_u8[3];
//   bytes[offset++] = f64_u8[4];
//   bytes[offset++] = f64_u8[5];
//   bytes[offset++] = f64_u8[6];
//   bytes[offset++] = f64_u8[7];
// }

// function readInt32(bb: ByteBuffer): number {
//   let offset = advance(bb, 4);
//   let bytes = bb.bytes;
//   return (
//     bytes[offset] |
//     (bytes[offset + 1] << 8) |
//     (bytes[offset + 2] << 16) |
//     (bytes[offset + 3] << 24)
//   );
// }

// function writeInt32(bb: ByteBuffer, value: number): void {
//   let offset = grow(bb, 4);
//   let bytes = bb.bytes;
//   bytes[offset] = value;
//   bytes[offset + 1] = value >> 8;
//   bytes[offset + 2] = value >> 16;
//   bytes[offset + 3] = value >> 24;
// }

// function readInt64(bb: ByteBuffer, unsigned: boolean): Long {
//   return {
//     low: readInt32(bb),
//     high: readInt32(bb),
//     unsigned,
//   };
// }

// function writeInt64(bb: ByteBuffer, value: Long): void {
//   writeInt32(bb, value.low);
//   writeInt32(bb, value.high);
// }

// function readVarint32(bb: ByteBuffer): number {
//   let c = 0;
//   let value = 0;
//   let b: number;
//   do {
//     b = readByte(bb);
//     if (c < 32) value |= (b & 0x7F) << c;
//     c += 7;
//   } while (b & 0x80);
//   return value;
// }

// function writeVarint32(bb: ByteBuffer, value: number): void {
//   value >>>= 0;
//   while (value >= 0x80) {
//     writeByte(bb, (value & 0x7f) | 0x80);
//     value >>>= 7;
//   }
//   writeByte(bb, value);
// }

// function readVarint64(bb: ByteBuffer, unsigned: boolean): Long {
//   let part0 = 0;
//   let part1 = 0;
//   let part2 = 0;
//   let b: number;

//   b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
//     b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
//       b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
//         b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

//           b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
//             b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
//               b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
//                 b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

//                   b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
//                     b = readByte(bb); part2 |= (b & 0x7F) << 7;
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   return {
//     low: part0 | (part1 << 28),
//     high: (part1 >>> 4) | (part2 << 24),
//     unsigned,
//   };
// }

// function writeVarint64(bb: ByteBuffer, value: Long): void {
//   let part0 = value.low >>> 0;
//   let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
//   let part2 = value.high >>> 24;

//   // ref: src/google/protobuf/io/coded_stream.cc
//   let size =
//     part2 === 0 ?
//       part1 === 0 ?
//         part0 < 1 << 14 ?
//           part0 < 1 << 7 ? 1 : 2 :
//           part0 < 1 << 21 ? 3 : 4 :
//         part1 < 1 << 14 ?
//           part1 < 1 << 7 ? 5 : 6 :
//           part1 < 1 << 21 ? 7 : 8 :
//       part2 < 1 << 7 ? 9 : 10;

//   let offset = grow(bb, size);
//   let bytes = bb.bytes;

//   switch (size) {
//     case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
//     case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
//     case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
//     case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
//     case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
//     case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
//     case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
//     case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
//     case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
//     case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
//   }
// }

// function readVarint32ZigZag(bb: ByteBuffer): number {
//   let value = readVarint32(bb);

//   // ref: src/google/protobuf/wire_format_lite.h
//   return (value >>> 1) ^ -(value & 1);
// }

// function writeVarint32ZigZag(bb: ByteBuffer, value: number): void {
//   // ref: src/google/protobuf/wire_format_lite.h
//   writeVarint32(bb, (value << 1) ^ (value >> 31));
// }

// function readVarint64ZigZag(bb: ByteBuffer): Long {
//   let value = readVarint64(bb, /* unsigned */ false);
//   let low = value.low;
//   let high = value.high;
//   let flip = -(low & 1);

//   // ref: src/google/protobuf/wire_format_lite.h
//   return {
//     low: ((low >>> 1) | (high << 31)) ^ flip,
//     high: (high >>> 1) ^ flip,
//     unsigned: false,
//   };
// }

// function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void {
//   let low = value.low;
//   let high = value.high;
//   let flip = high >> 31;

//   // ref: src/google/protobuf/wire_format_lite.h
//   writeVarint64(bb, {
//     low: (low << 1) ^ flip,
//     high: ((high << 1) | (low >>> 31)) ^ flip,
//     unsigned: false,
//   });
// }
