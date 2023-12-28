export declare class Encrypt<T> {
  encrypt(obj: string, salt: string): string;
  decrypt(obj: string, salt: string): string;
  SHA(data: T): string;
  verifySHA(data: string, SHA: string): boolean;
}
