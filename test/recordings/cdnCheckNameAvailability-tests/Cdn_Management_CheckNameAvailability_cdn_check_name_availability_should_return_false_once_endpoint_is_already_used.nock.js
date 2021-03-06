// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile9869\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '00bc95e6-40e3-4206-a424-69e030d7efe4',
  'x-ms-client-request-id': 'c019241f-26d8-443a-80f2-38fb0ec94c30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/60d4955d-fe0b-4f7f-b9ab-3b043b8b85a7?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8fca9e3f-f145-4245-9d15-5bf096b671e7',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T233015Z:8fca9e3f-f145-4245-9d15-5bf096b671e7',
  date: 'Thu, 27 Oct 2016 23:30:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile9869\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '404',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '00bc95e6-40e3-4206-a424-69e030d7efe4',
  'x-ms-client-request-id': 'c019241f-26d8-443a-80f2-38fb0ec94c30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/60d4955d-fe0b-4f7f-b9ab-3b043b8b85a7?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8fca9e3f-f145-4245-9d15-5bf096b671e7',
  'x-ms-routing-request-id': 'CENTRALUS:20161027T233015Z:8fca9e3f-f145-4245-9d15-5bf096b671e7',
  date: 'Thu, 27 Oct 2016 23:30:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/60d4955d-fe0b-4f7f-b9ab-3b043b8b85a7?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '68861bd5-17a2-45a9-a42e-5ed5c1c18a2a',
  'x-ms-client-request-id': '5c48d99d-1654-446e-8d90-86d959777fae',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '4a65998c-44ee-434d-a882-50b335e97d23',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233046Z:4a65998c-44ee-434d-a882-50b335e97d23',
  date: 'Thu, 27 Oct 2016 23:30:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/60d4955d-fe0b-4f7f-b9ab-3b043b8b85a7?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"InProgress\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '78',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '68861bd5-17a2-45a9-a42e-5ed5c1c18a2a',
  'x-ms-client-request-id': '5c48d99d-1654-446e-8d90-86d959777fae',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '4a65998c-44ee-434d-a882-50b335e97d23',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233046Z:4a65998c-44ee-434d-a882-50b335e97d23',
  date: 'Thu, 27 Oct 2016 23:30:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/60d4955d-fe0b-4f7f-b9ab-3b043b8b85a7?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '19c0dcec-1f1b-4598-81c7-dccf3d7774b6',
  'x-ms-client-request-id': 'b0264c22-e11c-4222-8271-a414eeb26db0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'dd38f95c-7eef-4a39-acb8-4d744aa2e5b6',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233116Z:dd38f95c-7eef-4a39-acb8-4d744aa2e5b6',
  date: 'Thu, 27 Oct 2016 23:31:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/60d4955d-fe0b-4f7f-b9ab-3b043b8b85a7?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '19c0dcec-1f1b-4598-81c7-dccf3d7774b6',
  'x-ms-client-request-id': 'b0264c22-e11c-4222-8271-a414eeb26db0',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'dd38f95c-7eef-4a39-acb8-4d744aa2e5b6',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233116Z:dd38f95c-7eef-4a39-acb8-4d744aa2e5b6',
  date: 'Thu, 27 Oct 2016 23:31:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile9869\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '057b5fe5-1bbb-4e24-9277-38434eb12b40',
  'x-ms-client-request-id': '7b715fdd-aff5-43b8-beec-09efa7e1a097',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '30d33414-ef69-4d11-b1e7-c853e660677b',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233118Z:30d33414-ef69-4d11-b1e7-c853e660677b',
  date: 'Thu, 27 Oct 2016 23:31:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile9869\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '057b5fe5-1bbb-4e24-9277-38434eb12b40',
  'x-ms-client-request-id': '7b715fdd-aff5-43b8-beec-09efa7e1a097',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '30d33414-ef69-4d11-b1e7-c853e660677b',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233118Z:30d33414-ef69-4d11-b1e7-c853e660677b',
  date: 'Thu, 27 Oct 2016 23:31:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint5411\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint5411.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '67497864-b940-41f1-8de6-4de9f7d6e327',
  'x-ms-client-request-id': 'a3ff6b97-58c0-42b5-a008-ffee0cef9b07',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/25b0bcbe-7d99-41ef-bf9c-cc631ad4cbad?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6e3f8065-31c3-4b5f-80c4-1563a152ee53',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233124Z:6e3f8065-31c3-4b5f-80c4-1563a152ee53',
  date: 'Thu, 27 Oct 2016 23:31:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint5411\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint5411.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '67497864-b940-41f1-8de6-4de9f7d6e327',
  'x-ms-client-request-id': 'a3ff6b97-58c0-42b5-a008-ffee0cef9b07',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/25b0bcbe-7d99-41ef-bf9c-cc631ad4cbad?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6e3f8065-31c3-4b5f-80c4-1563a152ee53',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233124Z:6e3f8065-31c3-4b5f-80c4-1563a152ee53',
  date: 'Thu, 27 Oct 2016 23:31:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/25b0bcbe-7d99-41ef-bf9c-cc631ad4cbad?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '39ea8ef8-386b-4400-9221-2e0443bc2eb9',
  'x-ms-client-request-id': 'cdb748f6-3537-4a53-9bb7-ff54e1cefd72',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '13d27119-8638-48d5-bd94-312514cba61a',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233154Z:13d27119-8638-48d5-bd94-312514cba61a',
  date: 'Thu, 27 Oct 2016 23:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/operationresults/25b0bcbe-7d99-41ef-bf9c-cc631ad4cbad?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '39ea8ef8-386b-4400-9221-2e0443bc2eb9',
  'x-ms-client-request-id': 'cdb748f6-3537-4a53-9bb7-ff54e1cefd72',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '13d27119-8638-48d5-bd94-312514cba61a',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233154Z:13d27119-8638-48d5-bd94-312514cba61a',
  date: 'Thu, 27 Oct 2016 23:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint5411\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint5411.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '3b7ebb9e-25bc-4993-af55-376ea0444fa3',
  'x-ms-client-request-id': 'ed675cdf-bd1e-4b7c-a1c4-d408c68ed9b4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '404a0e36-ba6b-469e-9fd6-3949c226fd08',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233155Z:404a0e36-ba6b-469e-9fd6-3949c226fd08',
  date: 'Thu, 27 Oct 2016 23:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint5411\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1470/providers/Microsoft.Cdn/profiles/cdnTestProfile9869/endpoints/cdnTestEndpoint5411\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint5411.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"somename\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '891',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '3b7ebb9e-25bc-4993-af55-376ea0444fa3',
  'x-ms-client-request-id': 'ed675cdf-bd1e-4b7c-a1c4-d408c68ed9b4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '404a0e36-ba6b-469e-9fd6-3949c226fd08',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233155Z:404a0e36-ba6b-469e-9fd6-3949c226fd08',
  date: 'Thu, 27 Oct 2016 23:31:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2016-10-02', '*')
  .reply(200, "{\"NameAvailable\":false,\"Reason\":\"Name is already in use\",\"Message\":\"Name not available\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '88',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75433faf-3b80-422f-bebf-8eba9187e021',
  'x-ms-client-request-id': 'd2e6564a-863d-4b30-b3ef-f17a2da4383a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '98b97a58-0ba6-4043-a99f-2b4aea699235',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233156Z:98b97a58-0ba6-4043-a99f-2b4aea699235',
  date: 'Thu, 27 Oct 2016 23:31:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2016-10-02', '*')
  .reply(200, "{\"NameAvailable\":false,\"Reason\":\"Name is already in use\",\"Message\":\"Name not available\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '88',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75433faf-3b80-422f-bebf-8eba9187e021',
  'x-ms-client-request-id': 'd2e6564a-863d-4b30-b3ef-f17a2da4383a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '98b97a58-0ba6-4043-a99f-2b4aea699235',
  'x-ms-routing-request-id': 'WESTUS2:20161027T233156Z:98b97a58-0ba6-4043-a99f-2b4aea699235',
  date: 'Thu, 27 Oct 2016 23:31:55 GMT',
  connection: 'close' });
 return result; }]];