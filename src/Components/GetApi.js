import axios from "axios";

//function to get all the albums
export async function getAlbumsAPi() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return res;
  } catch (err) {
    console.log(err);
  }
}

//function to get the photos of the particular album selected
export async function getAlbumPhotos(url) {
  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    console.log(err);
  }
}
