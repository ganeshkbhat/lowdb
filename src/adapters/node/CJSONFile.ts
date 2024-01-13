import { PathLike } from "fs";

import { Encrypt } from "../Encrypt.js";
import { TextFile, TextFileSync } from "./TextFile.js";

export class CJSONFile<T> {
  #adapter: TextFile;
  #crypt: Encrypt;

  constructor(filename: PathLike) {
    this.#adapter = new TextFile(filename);
    this.#crypt = new Encrypt();
  }

  async read(salt = ""): Promise<T | null> {
    const data = await this.#adapter.read();
    if (data === null) {
      return null;
    } else {
      return JSON.parse(JSON.parse(this.#crypt.decrypt(data, salt)));
    }
  }

  write(obj: T, salt = ""): Promise<void> {
    return this.#adapter.write(
      JSON.stringify(this.#crypt.encrypt(JSON.stringify(obj, null, 2), salt)),
    );
  }
}

export class CJSONFileSync<T> {
  #adapter: TextFileSync;
  #crypt: Encrypt;

  constructor(filename: PathLike) {
    this.#adapter = new TextFileSync(filename);
    this.#crypt = new Encrypt();
  }

  read(salt = ""): T | null {
    this.#crypt;
    console.log(salt);
    const data = this.#adapter.read();
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data);
    }
  }

  write(obj: T, salt = ""): void {
    console.log(salt);
    this.#adapter.write(JSON.stringify(obj, null, 2));
  }
}
