import { client, checkError } from './client';

export async function createShow(title, date, time) {
  const resp = await client.from('shows').insert({ title, date, time });
  return checkError(resp);
}

export async function getShows() {
  const resp = await client.from('shows').select('*').order('date');
  return checkError(resp);
}
