const crypto = require("crypto");
const fs = require("fs");

const algorithm = "aes-256-cbc";
const key = Buffer.from("thisisaverysecurekey1234567890", "utf-8");
const iv = Buffer.from("thisisaniv123456", "utf-8");

// Encrypt function
function encryptFile(inputFile, outputFile) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);
    input.pipe(cipher).pipe(output);
    console.log("Encryption Done!");
}

// Decrypt function
function decryptFile(inputFile, outputFile) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);
    input.pipe(decipher).pipe(output);
    console.log("Decryption Done!");
}

// Example usage
encryptFile("input.txt", "encrypted.bin");
decryptFile("encrypted.bin", "decrypted.txt");
