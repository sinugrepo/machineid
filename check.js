const { machineIdSync } = require('node-machine-id');
const deviceId = machineIdSync();
console.log('Machine ID:', deviceId);
