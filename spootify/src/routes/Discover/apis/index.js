import baseRequest from './baseRequest';

export function getNewReleases() {
  return baseRequest('new-releases', 'albums');
}

export function getFeaturedPlaylists() {
  return baseRequest('featured-playlists', 'playlists');
}
  
export function getCategories() {
  return baseRequest('categories', 'categories');
}

