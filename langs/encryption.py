from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import os

# Key and IV (Initialization Vector)
KEY = b"thisisaverysecurekey123"  # 24-byte key
IV = b"thisisaniv123456"  # 16-byte IV

# Encrypt function
def encrypt_file(input_file, output_file):
    cipher = AES.new(KEY, AES.MODE_CBC, IV)
    with open(input_file, "rb") as f:
        plaintext = f.read()
    ciphertext = cipher.encrypt(pad(plaintext, AES.block_size))
    with open(output_file, "wb") as f:
        f.write(ciphertext)
    print("Encryption Done!")

# Decrypt function
def decrypt_file(input_file, output_file):
    cipher = AES.new(KEY, AES.MODE_CBC, IV)
    with open(input_file, "rb") as f:
        ciphertext = f.read()
    plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)
    with open(output_file, "wb") as f:
        f.write(plaintext)
    print("Decryption Done!")

# Example usage
encrypt_file("input.txt", "encrypted.bin")
decrypt_file("encrypted.bin", "decrypted.txt")
