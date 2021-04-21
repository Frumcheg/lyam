import { getSeconds } from './time';
import { getRandom } from './number';

function getUid(): string {
    return [getSeconds(), getRandom()].join('')
}

export const uid = getUid()
