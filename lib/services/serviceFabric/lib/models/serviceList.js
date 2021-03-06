/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ServiceList class.
 * @constructor
 * The list of the service
 * @member {string} [continuationToken]
 * 
 * @member {array} [items]
 * 
 */
function ServiceList() {
}

/**
 * Defines the metadata of ServiceList
 *
 * @returns {object} metadata of ServiceList
 *
 */
ServiceList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceList',
    type: {
      name: 'Composite',
      className: 'ServiceList',
      modelProperties: {
        continuationToken: {
          required: false,
          serializedName: 'ContinuationToken',
          type: {
            name: 'String'
          }
        },
        items: {
          required: false,
          serializedName: 'Items',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ServiceElementType',
                type: {
                  name: 'Composite',
                  className: 'Service'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ServiceList;
