import { deepStrictEqual as deepEqual, strictEqual as equal } from 'node:assert'
import { temporaryFile } from 'tempy'
import { CJSONFile, CJSONFileSync } from './CJSONFile.js'

export async function testCJSONFile() {
  const obj = { a: 1 }
  const file = new CJSONFile(temporaryFile())
  // Null if file doesn't exist
  equal(await file.read(), null)
  // Write
  equal(await file.write(obj), undefined)
  // Read
  deepEqual(await file.read(), obj)
}

export function testCJSONFileSync() {
  const obj = { a: 1 }
  const file = new CJSONFileSync(temporaryFile())
  // Null if file doesn't exist
  equal(file.read(), null)
  // Write
  equal(file.write(obj), undefined)
  // Read
  deepEqual(file.read(), obj)
}
