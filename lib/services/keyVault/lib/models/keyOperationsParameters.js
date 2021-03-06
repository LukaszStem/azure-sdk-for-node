/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the KeyOperationsParameters class.
 * @constructor
 * The key operations parameters
 *
 * @member {string} algorithm algorithm identifier. Possible values include:
 * 'RSA-OAEP', 'RSA1_5'
 * 
 * @member {buffer} value
 * 
 */
function KeyOperationsParameters() {
}

/**
 * Defines the metadata of KeyOperationsParameters
 *
 * @returns {object} metadata of KeyOperationsParameters
 *
 */
KeyOperationsParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'KeyOperationsParameters',
    type: {
      name: 'Composite',
      className: 'KeyOperationsParameters',
      modelProperties: {
        algorithm: {
          required: true,
          serializedName: 'alg',
          constraints: {
            MinLength: 1
          },
          type: {
            name: 'String'
          }
        },
        value: {
          required: true,
          serializedName: 'value',
          type: {
            name: 'Base64Url'
          }
        }
      }
    }
  };
};

module.exports = KeyOperationsParameters;
