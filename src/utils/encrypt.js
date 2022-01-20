import { sha256 } from 'crypto-hash';

export async function encodePassword(string) {
    let hash = await sha256(string);
    return hash;
}
