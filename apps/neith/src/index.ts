import {
	Server,
	ServerCredentials,
	sendUnaryData,
	ServerUnaryCall,
} from "@grpc/grpc-js";

import {
	SellerAmpService,
	SellerAmpResponse,
	FbmRequest,
	FbaRequest,
} from "@efnf/protos/seller_amp";
const server = new Server();

server.addService(SellerAmpService, {
	getFbaData: (
		call: ServerUnaryCall<FbaRequest, SellerAmpResponse>,
		callback: sendUnaryData<SellerAmpResponse>,
	) => {
		// Implement the getFbaData logic here
		// Access the request using call.request
		// Send the response using callback(null, response)
		const response = SellerAmpResponse.fromJSON("{}");
	},
	getFbmData: (
		call: ServerUnaryCall<FbmRequest, SellerAmpResponse>,
		callback: sendUnaryData<SellerAmpResponse>,
	) => {
		// Implement the getFbmData logic here
		// Access the request using call.request
		// Send the response using callback(null, response)
	},
});
console.log(SellerAmpResponse.fromJSON("{}"));
server.bindAsync(
	"0.0.0.0:50051",
	ServerCredentials.createInsecure(),
	(err, port) => {
		if (err) {
			console.error("Failed to bind server:", err);
			return;
		}
		console.log(`Server is running on port ${port}`);
		server.start();
	},
);
