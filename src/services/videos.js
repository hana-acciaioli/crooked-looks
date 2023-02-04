import { client, checkError } from './client';

export async function createTodo(video) {
  const resp = await client.from('videos').insert({ video }).single();
  return checkError(resp);
}
