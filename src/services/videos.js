import { client, checkError } from './client';

export async function createVideo(video_url) {
  const resp = await client.from('videos').insert({ video_url });
  return checkError(resp);
}

export async function getVideos() {
  const resp = await client.from('videos').select('*').order('created_at');
  return checkError(resp);
}
