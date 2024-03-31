import {
	ChannelCredentials,
	Client,
	makeGenericClientConstructor,
	Metadata,
} from "@grpc/grpc-js";
import type {
	CallOptions,
	ClientOptions,
	ClientUnaryCall,
	handleUnaryCall,
	ServiceError,
	UntypedServiceImplementation,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "seller_amp";

export interface FbaRequest {
	asin: string;
	cost: number;
}

export interface FbmRequest {
	asin: string;
	cost: number;
	fbmCost: number;
}

export interface SellerAmpResponse {
	alerts: string[];
	bsr: string;
	predictedSales: string;
	cost: number;
	salePrice: number;
	profit: number;
	roi: string;
	profitMargin: string;
	breakeven: number;
	offersCount: string;
	variationsCount: string;
	imgsrc: string;
	title: string;
}

function createBaseFbaRequest(): FbaRequest {
	return { asin: "", cost: 0 };
}

export const FbaRequest = {
	encode(
		message: FbaRequest,
		writer: _m0.Writer = _m0.Writer.create(),
	): _m0.Writer {
		if (message.asin !== "") {
			writer.uint32(10).string(message.asin);
		}
		if (message.cost !== 0) {
			writer.uint32(17).double(message.cost);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): FbaRequest {
		const reader =
			input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFbaRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.asin = reader.string();
					continue;
				case 2:
					if (tag !== 17) {
						break;
					}

					message.cost = reader.double();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FbaRequest {
		return {
			asin: isSet(object.asin) ? globalThis.String(object.asin) : "",
			cost: isSet(object.cost) ? globalThis.Number(object.cost) : 0,
		};
	},

	toJSON(message: FbaRequest): unknown {
		const obj: any = {};
		if (message.asin !== "") {
			obj.asin = message.asin;
		}
		if (message.cost !== 0) {
			obj.cost = message.cost;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FbaRequest>, I>>(base?: I): FbaRequest {
		return FbaRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FbaRequest>, I>>(
		object: I,
	): FbaRequest {
		const message = createBaseFbaRequest();
		message.asin = object.asin ?? "";
		message.cost = object.cost ?? 0;
		return message;
	},
};

function createBaseFbmRequest(): FbmRequest {
	return { asin: "", cost: 0, fbmCost: 0 };
}

export const FbmRequest = {
	encode(
		message: FbmRequest,
		writer: _m0.Writer = _m0.Writer.create(),
	): _m0.Writer {
		if (message.asin !== "") {
			writer.uint32(10).string(message.asin);
		}
		if (message.cost !== 0) {
			writer.uint32(17).double(message.cost);
		}
		if (message.fbmCost !== 0) {
			writer.uint32(25).double(message.fbmCost);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): FbmRequest {
		const reader =
			input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFbmRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.asin = reader.string();
					continue;
				case 2:
					if (tag !== 17) {
						break;
					}

					message.cost = reader.double();
					continue;
				case 3:
					if (tag !== 25) {
						break;
					}

					message.fbmCost = reader.double();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FbmRequest {
		return {
			asin: isSet(object.asin) ? globalThis.String(object.asin) : "",
			cost: isSet(object.cost) ? globalThis.Number(object.cost) : 0,
			fbmCost: isSet(object.fbmCost) ? globalThis.Number(object.fbmCost) : 0,
		};
	},

	toJSON(message: FbmRequest): unknown {
		const obj: any = {};
		if (message.asin !== "") {
			obj.asin = message.asin;
		}
		if (message.cost !== 0) {
			obj.cost = message.cost;
		}
		if (message.fbmCost !== 0) {
			obj.fbmCost = message.fbmCost;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FbmRequest>, I>>(base?: I): FbmRequest {
		return FbmRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FbmRequest>, I>>(
		object: I,
	): FbmRequest {
		const message = createBaseFbmRequest();
		message.asin = object.asin ?? "";
		message.cost = object.cost ?? 0;
		message.fbmCost = object.fbmCost ?? 0;
		return message;
	},
};

function createBaseSellerAmpResponse(): SellerAmpResponse {
	return {
		alerts: [],
		bsr: "",
		predictedSales: "",
		cost: 0,
		salePrice: 0,
		profit: 0,
		roi: "",
		profitMargin: "",
		breakeven: 0,
		offersCount: "",
		variationsCount: "",
		imgsrc: "",
		title: "",
	};
}

export const SellerAmpResponse = {
	encode(
		message: SellerAmpResponse,
		writer: _m0.Writer = _m0.Writer.create(),
	): _m0.Writer {
		for (const v of message.alerts) {
			writer.uint32(10).string(v!);
		}
		if (message.bsr !== "") {
			writer.uint32(18).string(message.bsr);
		}
		if (message.predictedSales !== "") {
			writer.uint32(26).string(message.predictedSales);
		}
		if (message.cost !== 0) {
			writer.uint32(33).double(message.cost);
		}
		if (message.salePrice !== 0) {
			writer.uint32(41).double(message.salePrice);
		}
		if (message.profit !== 0) {
			writer.uint32(49).double(message.profit);
		}
		if (message.roi !== "") {
			writer.uint32(58).string(message.roi);
		}
		if (message.profitMargin !== "") {
			writer.uint32(66).string(message.profitMargin);
		}
		if (message.breakeven !== 0) {
			writer.uint32(73).double(message.breakeven);
		}
		if (message.offersCount !== "") {
			writer.uint32(82).string(message.offersCount);
		}
		if (message.variationsCount !== "") {
			writer.uint32(90).string(message.variationsCount);
		}
		if (message.imgsrc !== "") {
			writer.uint32(98).string(message.imgsrc);
		}
		if (message.title !== "") {
			writer.uint32(106).string(message.title);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): SellerAmpResponse {
		const reader =
			input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSellerAmpResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.alerts.push(reader.string());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.bsr = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.predictedSales = reader.string();
					continue;
				case 4:
					if (tag !== 33) {
						break;
					}

					message.cost = reader.double();
					continue;
				case 5:
					if (tag !== 41) {
						break;
					}

					message.salePrice = reader.double();
					continue;
				case 6:
					if (tag !== 49) {
						break;
					}

					message.profit = reader.double();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.roi = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.profitMargin = reader.string();
					continue;
				case 9:
					if (tag !== 73) {
						break;
					}

					message.breakeven = reader.double();
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.offersCount = reader.string();
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.variationsCount = reader.string();
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.imgsrc = reader.string();
					continue;
				case 13:
					if (tag !== 106) {
						break;
					}

					message.title = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SellerAmpResponse {
		return {
			alerts: globalThis.Array.isArray(object?.alerts)
				? object.alerts.map((e: any) => globalThis.String(e))
				: [],
			bsr: isSet(object.bsr) ? globalThis.String(object.bsr) : "",
			predictedSales: isSet(object.predictedSales)
				? globalThis.String(object.predictedSales)
				: "",
			cost: isSet(object.cost) ? globalThis.Number(object.cost) : 0,
			salePrice: isSet(object.salePrice)
				? globalThis.Number(object.salePrice)
				: 0,
			profit: isSet(object.profit) ? globalThis.Number(object.profit) : 0,
			roi: isSet(object.roi) ? globalThis.String(object.roi) : "",
			profitMargin: isSet(object.profitMargin)
				? globalThis.String(object.profitMargin)
				: "",
			breakeven: isSet(object.breakeven)
				? globalThis.Number(object.breakeven)
				: 0,
			offersCount: isSet(object.offersCount)
				? globalThis.String(object.offersCount)
				: "",
			variationsCount: isSet(object.variationsCount)
				? globalThis.String(object.variationsCount)
				: "",
			imgsrc: isSet(object.imgsrc) ? globalThis.String(object.imgsrc) : "",
			title: isSet(object.title) ? globalThis.String(object.title) : "",
		};
	},

	toJSON(message: SellerAmpResponse): unknown {
		const obj: any = {};
		if (message.alerts?.length) {
			obj.alerts = message.alerts;
		}
		if (message.bsr !== "") {
			obj.bsr = message.bsr;
		}
		if (message.predictedSales !== "") {
			obj.predictedSales = message.predictedSales;
		}
		if (message.cost !== 0) {
			obj.cost = message.cost;
		}
		if (message.salePrice !== 0) {
			obj.salePrice = message.salePrice;
		}
		if (message.profit !== 0) {
			obj.profit = message.profit;
		}
		if (message.roi !== "") {
			obj.roi = message.roi;
		}
		if (message.profitMargin !== "") {
			obj.profitMargin = message.profitMargin;
		}
		if (message.breakeven !== 0) {
			obj.breakeven = message.breakeven;
		}
		if (message.offersCount !== "") {
			obj.offersCount = message.offersCount;
		}
		if (message.variationsCount !== "") {
			obj.variationsCount = message.variationsCount;
		}
		if (message.imgsrc !== "") {
			obj.imgsrc = message.imgsrc;
		}
		if (message.title !== "") {
			obj.title = message.title;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SellerAmpResponse>, I>>(
		base?: I,
	): SellerAmpResponse {
		return SellerAmpResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SellerAmpResponse>, I>>(
		object: I,
	): SellerAmpResponse {
		const message = createBaseSellerAmpResponse();
		message.alerts = object.alerts?.map((e) => e) || [];
		message.bsr = object.bsr ?? "";
		message.predictedSales = object.predictedSales ?? "";
		message.cost = object.cost ?? 0;
		message.salePrice = object.salePrice ?? 0;
		message.profit = object.profit ?? 0;
		message.roi = object.roi ?? "";
		message.profitMargin = object.profitMargin ?? "";
		message.breakeven = object.breakeven ?? 0;
		message.offersCount = object.offersCount ?? "";
		message.variationsCount = object.variationsCount ?? "";
		message.imgsrc = object.imgsrc ?? "";
		message.title = object.title ?? "";
		return message;
	},
};

export type SellerAmpService = typeof SellerAmpService;
export const SellerAmpService = {
	getFbaData: {
		path: "/seller_amp.SellerAmp/GetFbaData",
		requestStream: false,
		responseStream: false,
		requestSerialize: (value: FbaRequest) =>
			Buffer.from(FbaRequest.encode(value).finish()),
		requestDeserialize: (value: Buffer) => FbaRequest.decode(value),
		responseSerialize: (value: SellerAmpResponse) =>
			Buffer.from(SellerAmpResponse.encode(value).finish()),
		responseDeserialize: (value: Buffer) => SellerAmpResponse.decode(value),
	},
	getFbmData: {
		path: "/seller_amp.SellerAmp/GetFbmData",
		requestStream: false,
		responseStream: false,
		requestSerialize: (value: FbmRequest) =>
			Buffer.from(FbmRequest.encode(value).finish()),
		requestDeserialize: (value: Buffer) => FbmRequest.decode(value),
		responseSerialize: (value: SellerAmpResponse) =>
			Buffer.from(SellerAmpResponse.encode(value).finish()),
		responseDeserialize: (value: Buffer) => SellerAmpResponse.decode(value),
	},
} as const;

export interface SellerAmpServer extends UntypedServiceImplementation {
	getFbaData: handleUnaryCall<FbaRequest, SellerAmpResponse>;
	getFbmData: handleUnaryCall<FbmRequest, SellerAmpResponse>;
}

export interface SellerAmpClient extends Client {
	getFbaData(
		request: FbaRequest,
		callback: (error: ServiceError | null, response: SellerAmpResponse) => void,
	): ClientUnaryCall;
	getFbaData(
		request: FbaRequest,
		metadata: Metadata,
		callback: (error: ServiceError | null, response: SellerAmpResponse) => void,
	): ClientUnaryCall;
	getFbaData(
		request: FbaRequest,
		metadata: Metadata,
		options: Partial<CallOptions>,
		callback: (error: ServiceError | null, response: SellerAmpResponse) => void,
	): ClientUnaryCall;
	getFbmData(
		request: FbmRequest,
		callback: (error: ServiceError | null, response: SellerAmpResponse) => void,
	): ClientUnaryCall;
	getFbmData(
		request: FbmRequest,
		metadata: Metadata,
		callback: (error: ServiceError | null, response: SellerAmpResponse) => void,
	): ClientUnaryCall;
	getFbmData(
		request: FbmRequest,
		metadata: Metadata,
		options: Partial<CallOptions>,
		callback: (error: ServiceError | null, response: SellerAmpResponse) => void,
	): ClientUnaryCall;
}

export const SellerAmpClient = makeGenericClientConstructor(
	SellerAmpService,
	"seller_amp.SellerAmp",
) as unknown as {
	new (
		address: string,
		credentials: ChannelCredentials,
		options?: Partial<ClientOptions>,
	): SellerAmpClient;
	service: typeof SellerAmpService;
	serviceName: string;
};

type Builtin =
	| Date
	| Function
	| Uint8Array
	| string
	| number
	| boolean
	| undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
	  ? globalThis.Array<DeepPartial<U>>
	  : T extends ReadonlyArray<infer U>
		  ? ReadonlyArray<DeepPartial<U>>
		  : T extends {}
			  ? { [K in keyof T]?: DeepPartial<T[K]> }
			  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
	? P
	: P & { [K in keyof P]: Exact<P[K], I[K]> } & {
			[K in Exclude<keyof I, KeysOfUnion<P>>]: never;
	  };

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
