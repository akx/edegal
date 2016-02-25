import getContent from '../services/AlbumService';


export const navigate = (path) => (dispatch) => {
  dispatch(loading(path));

  return getContent(path).then(({album, picture}) => {
    if (picture) {
      dispatch(loadPicture(album, picture));
    } else {
      dispatch(loadAlbum(album));
    }
};


export const loading = (path) => ({
  type: 'loading',
  path: path,
});


export const loadAlbum = (album) => ({
  type: 'loadAlbum',
  album: album,
});


export const loadPicture = (album, picture) => ({
  type: 'loadPicture',
  album: album,
  picture: picture,
});