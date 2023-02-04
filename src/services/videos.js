import { client, checkError } from './client';

export async function createVideo(video_url) {
  const resp = await client.from('videos').insert({ video_url });
  return checkError(resp);
}
