import { httpClient } from './httpClient/httpClient';

export function getBeers() {
  return httpClient.get('/beers');
}

export function getBeer(id) {
  return httpClient.get(`/beers/${id}`);
}

export function getRandomBeer() {
  return httpClient.get('/beers/random');
}
