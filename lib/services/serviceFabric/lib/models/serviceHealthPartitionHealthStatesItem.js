/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ServiceHealthPartitionHealthStatesItem class.
 * @constructor
 * @member {string} [partitionId]
 * 
 * @member {number} [aggregatedHealthState]
 * 
 */
function ServiceHealthPartitionHealthStatesItem() {
}

/**
 * Defines the metadata of ServiceHealthPartitionHealthStatesItem
 *
 * @returns {object} metadata of ServiceHealthPartitionHealthStatesItem
 *
 */
ServiceHealthPartitionHealthStatesItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceHealth_PartitionHealthStatesItem',
    type: {
      name: 'Composite',
      className: 'ServiceHealthPartitionHealthStatesItem',
      modelProperties: {
        partitionId: {
          required: false,
          serializedName: 'PartitionId',
          type: {
            name: 'String'
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = ServiceHealthPartitionHealthStatesItem;