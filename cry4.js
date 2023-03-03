const ecies = require("eth-ecies");

const publicKey = 'e0d262b939cd0267cfbe3f004e2863d41d1f631ce33701a8920ba73925189f5d15be92cea3c58987aa47ca70216182ba6bd89026fc15edfe2092a66f59a14003';
const privateKey = '55bb4cb6407303de8e4c5a635021d3db12cb537305eeb6401612ce14b35d6690';
const data = '{foo:"bar",baz:42}';

function encrypt(publicKey, data) {
    let userPublicKey = new Buffer.from(publicKey, 'hex');
    let bufferData = new Buffer.from(data);

    let encryptedData = ecies.encrypt(userPublicKey, bufferData);

    return encryptedData.toString('base64')
}
// Note: Encrypted message is a 113+ byte buffer


y="This paper proposes LaMDA, a family of transformer-based neural language models designed for dialog proposed by Google. These models’ sizes range from 2B to 137B parameters, and they are pre-trained on a dataset of 1.56T words from public dialog data and other public web documents. LaMDA uses a single model to do more than one thing. It comes up with possible responses, which are then checked for safety based on knowledge from outside sources and re-ranked to find the best one.The article discusses how model scaling can improve quality but not safety or factual grounding in AI systems. To address these challenges, the authors propose fine-tuning the model with annotated data and allowing it to consult external knowledge sources. They use a LaMDA classifier to filter responses for safety and a groundedness metric to ensure factual grounding. The results show that their approach can significantly improve safety and the factual grounding of AI-generated responses.Metrics"


x = encrypt(publicKey,y)

console.log(x)




function decrypt(privateKey, encryptedData) {
    let userPrivateKey = new Buffer.from(privateKey, 'hex');
    let bufferEncryptedData = new Buffer.from(encryptedData, 'base64');

    let decryptedData = ecies.decrypt(userPrivateKey, bufferEncryptedData);
    
    return decryptedData.toString('utf8');
}


z = decrypt(privateKey,x)

console.log(z)
