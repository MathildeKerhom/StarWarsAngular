import { Character } from './character';

export class Film {
  public title: String;
  public episode_id: Number;
  public opening_crawl: String;
  public director: String;
  public producer: String;
  public release_date: String;
  public characters_url: string[];
  public characters_names: String[] = new Array<String>();
  public display: Boolean;

  public constructor(
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters_url: string[]
    ) {
    this.title = title;
    this.episode_id = episode_id;
    this.opening_crawl = opening_crawl;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
    this.characters_url = characters_url;
  }
}