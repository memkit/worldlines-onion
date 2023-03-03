const ecies = require("eth-ecies");

function decrypt(privateKey, encryptedData) {
    let userPrivateKey = new Buffer.from(privateKey, 'hex');
    let bufferEncryptedData = new Buffer.from(encryptedData, 'base64');

    let decryptedData = ecies.decrypt(userPrivateKey, bufferEncryptedData);

    return decryptedData.toString('utf8');
}

module.exports = decrypt;