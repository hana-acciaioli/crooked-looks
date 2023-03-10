import { client, checkError } from './client';

export async function createShow(date, city, location, link) {
  const resp = await client.from('shows').insert({ date, city, location, link });
  return checkError(resp);
}

export async function getShows() {
  const resp = await client.from('shows').select('*').order('date');
  return checkError(resp);
}
export async function deleteShow({ id }) {
  const resp = await client.from('shows').delete().match({ id }).single();
  return checkError(resp);
}

export async function getUpcomingShows() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  // document.write(today);
  const resp = await client.from('shows').select('*').gte('date', today).order('date');
  return checkError(resp);
}
