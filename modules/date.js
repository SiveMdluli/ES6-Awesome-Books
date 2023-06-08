import { DateTime } from '../node_modules/luxon/src/luxon.js';

export function getCurrentDateTime() {
  const now = DateTime.local();
  const formatted = now.toFormat('cccc d LLLL y HH:mm:ss');
  return formatted;
}
