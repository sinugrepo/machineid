import pkg from 'node-machine-id';

const {machineIdSync} = pkg;
const deviceId = machineIdSync();
console.log('Machine ID:', deviceId);
