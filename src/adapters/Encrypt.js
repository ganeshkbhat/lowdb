import { _fileContentHash as encryptor, _fileContentDeHash as decryptor, createSHA, verifySHA } from "hasher-apis";

export class Encrypt {

  encrypt(obj, salt) {
    return encryptor(JSON.stringify(obj), salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
  }

  decrypt(obj, salt) {
    return decryptor(JSON.parse(obj), salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
  }

  SHA(data) {
    return createSHA(data);
  }

  verifySHA(data, SHA) {
    return verifySHA(data, SHA);
  }
}
