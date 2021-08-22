export const getVideoUrl =  () => {
  return fetch('https://dl.dropboxusercontent.com/s/jse5lx9xnmcav51/media.json')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
}