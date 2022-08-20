#!/usr/bin/env node

const executeCLI = require('./src/execute-cli');
const arg = process.argv;
executeCLI(arg);