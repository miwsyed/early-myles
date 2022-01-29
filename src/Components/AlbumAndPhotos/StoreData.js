import { useEffect, useState } from "react";
import {
  useSetGlobalAlbums,
  useSetGlobalPhotos,
} from "./context/ContextAPIProvider";
import { getAlbumsAPi, getPhotosAPI } from "./Albums.CRUD/GetApi";

export const StoreData = (selectedAlbum) => {
  /*For storing All photos from the API */
  const [allPhotos, setAllPhotos] = useState([]);

  /* Using context API to store all the albums so it can be globally accessed.*/
  const setAlbums = useSetGlobalAlbums();

  /* Using context API to store the Photos so it can be globally accessed.*/
  const setPhotos = useSetGlobalPhotos();

  useEffect(() => {
    /*function to get all the Album details */
    const getDAtaAlbums = async () => {
      try {
        const responseAlbums = await getAlbumsAPi();
        setAlbums(responseAlbums.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getDAtaPhotos = async () => {
      try {
        const responseAlbums = await getPhotosAPI();
        setAllPhotos(responseAlbums.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDAtaPhotos();
    getDAtaAlbums();
  }, [setAlbums, setAllPhotos]);

  useEffect(() => {
    function setCurrentPhotos() {
      // if we select select album from the drop down we get empty the photos array.
      if (selectedAlbum === "none") {
        setPhotos([]);
      }
      //if album is not selected return
      if (selectedAlbum === null) return;
      var SelectedAlbumPhotos = {};
      SelectedAlbumPhotos = allPhotos.filter((photos) => {
        return photos?.albumId == selectedAlbum;
      });
      setPhotos(SelectedAlbumPhotos);
    }
    setCurrentPhotos();
  }, [setPhotos, selectedAlbum, allPhotos]);
};
