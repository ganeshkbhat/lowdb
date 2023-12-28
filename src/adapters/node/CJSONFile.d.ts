/// <reference types="node" resolution-mode="require"/>
import { PathLike } from "fs";

import { Adapter, SyncAdapter } from "../../core/Low.js";

export declare class CJSONFile<T> implements Adapter<T> {
  #private;
  constructor(filename: PathLike);
  read(salt?: string): Promise<T | null>;
  write(obj: T, salt?: string): Promise<void>;
}

export declare class CJSONFileSync<T> implements SyncAdapter<T> {
  #private;
  constructor(filename: PathLike);
  read(salt?: string): T | null;
  write(obj: T, salt?: string): void;
}
