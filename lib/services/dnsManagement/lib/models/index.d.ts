/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the ARecord class.
 * @constructor
 * An A record.
 * @member {string} [ipv4Address] Gets or sets the IPv4 address of this A
 * record in string notation.
 * 
 */
export interface ARecord {
    ipv4Address?: string;
}

/**
 * @class
 * Initializes a new instance of the AaaaRecord class.
 * @constructor
 * An AAAA record.
 * @member {string} [ipv6Address] Gets or sets the IPv6 address of this AAAA
 * record in string notation.
 * 
 */
export interface AaaaRecord {
    ipv6Address?: string;
}

/**
 * @class
 * Initializes a new instance of the MxRecord class.
 * @constructor
 * An MX record.
 * @member {number} [preference] Gets or sets the preference metric for this
 * record.
 * 
 * @member {string} [exchange] Gets or sets the domain name of the mail host,
 * without a terminating dot.
 * 
 */
export interface MxRecord {
    preference?: number;
    exchange?: string;
}

/**
 * @class
 * Initializes a new instance of the NsRecord class.
 * @constructor
 * An NS record.
 * @member {string} [nsdname] Gets or sets the name server name for this
 * record, without a terminating dot.
 * 
 */
export interface NsRecord {
    nsdname?: string;
}

/**
 * @class
 * Initializes a new instance of the PtrRecord class.
 * @constructor
 * A PTR record.
 * @member {string} [ptrdname] Gets or sets the PTR target domain name for
 * this record without a terminating dot.
 * 
 */
export interface PtrRecord {
    ptrdname?: string;
}

/**
 * @class
 * Initializes a new instance of the SrvRecord class.
 * @constructor
 * An SRV record.
 * @member {number} [priority] Gets or sets the priority metric for this
 * record.
 * 
 * @member {number} [weight] Gets or sets the weight metric for this this
 * record.
 * 
 * @member {number} [port] Gets or sets the port of the service for this
 * record.
 * 
 * @member {string} [target] Gets or sets the domain name of the target for
 * this record, without a terminating dot.
 * 
 */
export interface SrvRecord {
    priority?: number;
    weight?: number;
    port?: number;
    target?: string;
}

/**
 * @class
 * Initializes a new instance of the TxtRecord class.
 * @constructor
 * A TXT record.
 * @member {array} [value] Gets or sets the text value of this record.
 * 
 */
export interface TxtRecord {
    value?: string[];
}

/**
 * @class
 * Initializes a new instance of the CnameRecord class.
 * @constructor
 * A CNAME record.
 * @member {string} [cname] Gets or sets the canonical name for this record
 * without a terminating dot.
 * 
 */
export interface CnameRecord {
    cname?: string;
}

/**
 * @class
 * Initializes a new instance of the SoaRecord class.
 * @constructor
 * An SOA record.
 * @member {string} [host] Gets or sets the domain name of the authoritative
 * name server, without a temrinating dot.
 * 
 * @member {string} [email] Gets or sets the email for this record.
 * 
 * @member {number} [serialNumber] Gets or sets the serial number for this
 * record.
 * 
 * @member {number} [refreshTime] Gets or sets the refresh value for this
 * record.
 * 
 * @member {number} [retryTime] Gets or sets the retry time for this record.
 * 
 * @member {number} [expireTime] Gets or sets the expire time for this record.
 * 
 * @member {number} [minimumTtl] Gets or sets the minimum TTL value for this
 * record.
 * 
 */
export interface SoaRecord {
    host?: string;
    email?: string;
    serialNumber?: number;
    refreshTime?: number;
    retryTime?: number;
    expireTime?: number;
    minimumTtl?: number;
}

/**
 * @class
 * Initializes a new instance of the RecordSet class.
 * @constructor
 * Describes a DNS RecordSet (a set of DNS records with the same name and
 * type).
 * @member {string} [id] Gets or sets the ID of the resource.
 * 
 * @member {string} [name] Gets or sets the name of the resource.
 * 
 * @member {string} [type] Gets or sets the type of the resource.
 * 
 * @member {string} [etag] Gets or sets the ETag of the RecordSet.
 * 
 * @member {object} [metadata] Gets or sets the metadata attached to the
 * resource.
 * 
 * @member {number} [tTL] Gets or sets the TTL of the records in the RecordSet.
 * 
 * @member {array} [aRecords] Gets or sets the list of A records in the
 * RecordSet.
 * 
 * @member {array} [aaaaRecords] Gets or sets the list of AAAA records in the
 * RecordSet.
 * 
 * @member {array} [mxRecords] Gets or sets the list of MX records in the
 * RecordSet.
 * 
 * @member {array} [nsRecords] Gets or sets the list of NS records in the
 * RecordSet.
 * 
 * @member {array} [ptrRecords] Gets or sets the list of PTR records in the
 * RecordSet.
 * 
 * @member {array} [srvRecords] Gets or sets the list of SRV records in the
 * RecordSet.
 * 
 * @member {array} [txtRecords] Gets or sets the list of TXT records in the
 * RecordSet.
 * 
 * @member {object} [cnameRecord] Gets or sets the CNAME record in the
 * RecordSet.
 * 
 * @member {string} [cnameRecord.cname] Gets or sets the canonical name for
 * this record without a terminating dot.
 * 
 * @member {object} [soaRecord] Gets or sets the SOA record in the RecordSet.
 * 
 * @member {string} [soaRecord.host] Gets or sets the domain name of the
 * authoritative name server, without a temrinating dot.
 * 
 * @member {string} [soaRecord.email] Gets or sets the email for this record.
 * 
 * @member {number} [soaRecord.serialNumber] Gets or sets the serial number
 * for this record.
 * 
 * @member {number} [soaRecord.refreshTime] Gets or sets the refresh value for
 * this record.
 * 
 * @member {number} [soaRecord.retryTime] Gets or sets the retry time for this
 * record.
 * 
 * @member {number} [soaRecord.expireTime] Gets or sets the expire time for
 * this record.
 * 
 * @member {number} [soaRecord.minimumTtl] Gets or sets the minimum TTL value
 * for this record.
 * 
 */
export interface RecordSet {
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
    metadata?: { [propertyName: string]: string };
    tTL?: number;
    aRecords?: ARecord[];
    aaaaRecords?: AaaaRecord[];
    mxRecords?: MxRecord[];
    nsRecords?: NsRecord[];
    ptrRecords?: PtrRecord[];
    srvRecords?: SrvRecord[];
    txtRecords?: TxtRecord[];
    cnameRecord?: CnameRecord;
    soaRecord?: SoaRecord;
}

/**
 * @class
 * Initializes a new instance of the RecordSetUpdateParameters class.
 * @constructor
 * Parameters supplied to update a RecordSet.
 * @member {object} [recordSet] Gets or sets information about the RecordSet
 * being updated.
 * 
 * @member {string} [recordSet.id] Gets or sets the ID of the resource.
 * 
 * @member {string} [recordSet.name] Gets or sets the name of the resource.
 * 
 * @member {string} [recordSet.type] Gets or sets the type of the resource.
 * 
 * @member {string} [recordSet.etag] Gets or sets the ETag of the RecordSet.
 * 
 * @member {object} [recordSet.metadata] Gets or sets the metadata attached to
 * the resource.
 * 
 * @member {number} [recordSet.tTL] Gets or sets the TTL of the records in the
 * RecordSet.
 * 
 * @member {array} [recordSet.aRecords] Gets or sets the list of A records in
 * the RecordSet.
 * 
 * @member {array} [recordSet.aaaaRecords] Gets or sets the list of AAAA
 * records in the RecordSet.
 * 
 * @member {array} [recordSet.mxRecords] Gets or sets the list of MX records
 * in the RecordSet.
 * 
 * @member {array} [recordSet.nsRecords] Gets or sets the list of NS records
 * in the RecordSet.
 * 
 * @member {array} [recordSet.ptrRecords] Gets or sets the list of PTR records
 * in the RecordSet.
 * 
 * @member {array} [recordSet.srvRecords] Gets or sets the list of SRV records
 * in the RecordSet.
 * 
 * @member {array} [recordSet.txtRecords] Gets or sets the list of TXT records
 * in the RecordSet.
 * 
 * @member {object} [recordSet.cnameRecord] Gets or sets the CNAME record in
 * the RecordSet.
 * 
 * @member {string} [recordSet.cnameRecord.cname] Gets or sets the canonical
 * name for this record without a terminating dot.
 * 
 * @member {object} [recordSet.soaRecord] Gets or sets the SOA record in the
 * RecordSet.
 * 
 * @member {string} [recordSet.soaRecord.host] Gets or sets the domain name of
 * the authoritative name server, without a temrinating dot.
 * 
 * @member {string} [recordSet.soaRecord.email] Gets or sets the email for
 * this record.
 * 
 * @member {number} [recordSet.soaRecord.serialNumber] Gets or sets the serial
 * number for this record.
 * 
 * @member {number} [recordSet.soaRecord.refreshTime] Gets or sets the refresh
 * value for this record.
 * 
 * @member {number} [recordSet.soaRecord.retryTime] Gets or sets the retry
 * time for this record.
 * 
 * @member {number} [recordSet.soaRecord.expireTime] Gets or sets the expire
 * time for this record.
 * 
 * @member {number} [recordSet.soaRecord.minimumTtl] Gets or sets the minimum
 * TTL value for this record.
 * 
 */
export interface RecordSetUpdateParameters {
    recordSet?: RecordSet;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} location Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Zone class.
 * @constructor
 * Describes a DNS zone.
 * @member {string} [etag] Gets or sets the ETag of the zone that is being
 * updated, as received from a Get operation.
 * 
 * @member {number} [maxNumberOfRecordSets] Gets or sets the maximum number of
 * record sets that can be created in this zone.
 * 
 * @member {number} [numberOfRecordSets] Gets or sets the current number of
 * record sets in this zone.
 * 
 * @member {array} [nameServers] Gets the name servers populated for this
 * zone. This is a read-only property and any attempt to set this value will
 * be ignored.
 * 
 */
export interface Zone extends Resource {
    etag?: string;
    maxNumberOfRecordSets?: number;
    numberOfRecordSets?: number;
    nameServers?: string[];
}

/**
 * @class
 * Initializes a new instance of the ZoneDeleteResult class.
 * @constructor
 * The response to a Zone Delete operation.
 * @member {string} [azureAsyncOperation] Users can perform a Get on
 * Azure-AsyncOperation to get the status of their delete Zone operations
 * 
 * @member {string} [status] Possible values include: 'InProgress',
 * 'Succeeded', 'Failed'
 * 
 * @member {string} [statusCode] Possible values include: 'Continue',
 * 'SwitchingProtocols', 'OK', 'Created', 'Accepted',
 * 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
 * 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently',
 * 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified',
 * 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb',
 * 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
 * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
 * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
 * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong',
 * 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable',
 * 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError',
 * 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout',
 * 'HttpVersionNotSupported'
 * 
 * @member {string} [requestId]
 * 
 */
export interface ZoneDeleteResult {
    azureAsyncOperation?: string;
    status?: string;
    statusCode?: string;
    requestId?: string;
}
