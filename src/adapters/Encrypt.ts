import {
  _fileContentDeHash as decryptor,
  _fileContentHash as encryptor,
  createSHA,
  verifySHA,
} from "hasher-apis";

export class Encrypt {
  encrypt(obj: T, salt: string): T {
    return encryptor(
      JSON.stringify(obj),
      salt,
      "aes-256-ctr",
      "sha256",
      "base64",
      { logger: console.log },
    );
  }

  decrypt(obj: string, salt: string) {
    return decryptor(JSON.parse(obj), salt, "aes-256-ctr", "sha256", "base64", {
      logger: console.log,
    });
  }

  SHA(data: T) {
    return createSHA(data);
  }

  verifySHA(data: T, SHA: string) {
    return verifySHA(data, SHA);
  }
}
