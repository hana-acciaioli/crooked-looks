import { client, checkError } from './client';

export async function createShow(date, city, location, link) {
  const resp = await client.from('shows').insert({ date, city, location, link });
  return checkError(resp);
}

export async function getShows() {
  const resp = await client.from('shows').select('*').order('date');
  return checkError(resp);
}
