import { TextFile, TextFileSync } from '../../adapters/node/TextFile.js'
import { Encrypt } from '../Encrypt.js'

export class CJSONFile {
  #adapter
  #crypt
  constructor(filename) {
    this.#adapter = new TextFile(filename)
    this.#crypt = new Encrypt()
  }
  async read(salt = "") {
    const data = await this.#adapter.read()
      if (data === null) {
        return null;
      } else {
            return JSON.parse(JSON.parse(this.#crypt.decrypt(data, salt)))
      }
  }
  write(obj, salt = "") {
    return this.#adapter.write(JSON.stringify(this.#crypt.encrypt(JSON.stringify(obj, null, 2), salt)))
  }
}

export class CJSONFileSync {
  #adapter
  #crypt
  constructor(filename) {
    this.#adapter = new TextFileSync(filename)
    this.#crypt = new Encrypt()
  }
  read(salt) {
    const data = this.#adapter.read()
    if (data === null) {
      return null
    } else {
      return JSON.parse(data)
    }
  }
  write(obj, salt) {
    this.#adapter.write(JSON.stringify(obj, null, 2))
  }
}
