console.log('Hello World');

const { readFile, readFileSync, read } = require('fs');
const txt = readFileSync('./hello.txt', 'utf8');
// Reads the contents of the file hello.txt and prints it to the console.
// The logged after other console log calls
readFile('./hello.txt', 'utf8', function (err, txt) {
        console.log(txt);
    });

console.log(process.platform);


const myModule = require('./my-module');
console.log(myModule);

const express = require('express');
