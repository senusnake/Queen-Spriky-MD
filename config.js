const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'bOoETCaC#O5ih_GVL2FGoNBuSt-Fb50pekZdM-95l1kpbRa1LmHE', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:tpezcbNDAyrJpydDaRBXeGFOpForJyDP@junction.proxy.rlwy.net:45774',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94766950645',    // Enter Your Owner Number
};
