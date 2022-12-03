import { readFileSync, writeFileSync } from 'fs';

const dbFile = 'db.json';

export async function getDB () {
  const dbText = readFileSync(dbFile, 'utf8');
  return JSON.parse(dbText);
}

export async function saveDB () {
  const dbText = JSON.stringify(dbFile, null, 2);
  writeFileSync(dbFile, dbText, 'utf8');
}
