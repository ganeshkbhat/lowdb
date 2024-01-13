import {
  deepStrictEqual as deepEqual,
  strictEqual as equal,
} from "node:assert";

import { Encrypt } from "./Encrypt.js";

export async function testEncrypt() {
  const encrypt = new Encrypt();
  // encrypt
  equal(await encrypt.encrypt({}, ""), "");
  // decrypt
  equal(await encrypt.decrypt("", ""), "");
  // SHA
  deepEqual(await encrypt.SHA(""), "");
  // verifySHA
  deepEqual(await encrypt.verifySHA("", ""), "");
}
