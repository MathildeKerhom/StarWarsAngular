import { Film } from '../model/film';

export function filmFactory(json) {
  let film = new Film(
    json.title,
    json.episode_id,
    json.opening_crawl,
    json.director,
    json.producer,
    json.release_date,
    json.characters
  );

  return film;
}