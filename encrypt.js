const ecies = require("eth-ecies");

function encrypt(publicKey, data) {
    let userPublicKey = new Buffer.from(publicKey, 'hex');
    let bufferData = new Buffer.from(data);

    let encryptedData = ecies.encrypt(userPublicKey, bufferData);

    return encryptedData.toString('base64')
}

module.exports = encrypt;