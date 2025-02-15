export const loadPosts = async () => {
  const postsReponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const postsPhotos = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsReponse, postsPhotos]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
