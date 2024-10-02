import crypto from 'crypto';

//helps to create a hash

///createHash() takes in a algorithm and returns a hash object
const hash = crypto.createHash('sha256');
//update() takes in a data and returns a hash object
hash.update('Hello World');
//digest() takes in a encoding and returns a hash object
const hashValue = hash.digest('hex');
console.log(hashValue);

//dont store password in database in plain text always use hash before storing in database

//randomBytes() takes in a size and returns a buffer
const buffer = crypto.randomBytes(16);
console.log(buffer);
//randomUUID() returns a random uuid
const uuid = crypto.randomUUID();
console.log(uuid);

//createCipheriv() takes in a algorithm, key, iv and returns a cipher object
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
//update
const encrypted = cipher.update('Hello World', 'utf8', 'hex');
//final
const final = cipher.final('hex');
console.log(encrypted + final);

//createDecipheriv() takes in a algorithm, key, iv and returns a decipher object
const decipher = crypto.createDecipheriv(algorithm, key, iv);
//update
const decrypted = decipher.update(encrypted + final, 'hex', 'utf8');
//final
const finalDecrypted = decipher.final('utf8');
console.log(decrypted + finalDecrypted);

//this is used to encrypt the password before storing in database