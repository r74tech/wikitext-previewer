import { customAlphabet } from 'nanoid';

const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 10);

export function generateNanoid() {
    return nanoid();
}
