import React, { useEffect, useState } from "react";
import {
  useSetGlobalAlbums,
  useGlobalAlbums,
  useGlobalPhotos,
  useSetGlobalPhotos,
} from "./ContextAPIProvider";
import { getAlbumsAPi, getAlbumPhotos } from "./GetApi";

const Albums = () => {
  /* Using context API to store the albums so we can access it from anywhere*/
  const setAlbums = useSetGlobalAlbums();
  const albums = useGlobalAlbums();

  /* Using context API to store the Photos so we can access it from anywhere*/
  const photos = useGlobalPhotos();
  const setPhotos = useSetGlobalPhotos();

  /*to store the selected album id */
  const [selectedAlbum, setSelectedAlbum] = useState("");

  useEffect(() => {
    /*function to get all the Album details */
    const getDAta = async () => {
      try {
        const responseAlbums = await getAlbumsAPi();
        setAlbums(responseAlbums.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDAta();
  }, [setAlbums]);

  useEffect(() => {
    /* function to get the photos related to the current selected album */
    const getPhotos = async () => {
      // if we select select album from the drop down we get empty the photos array.
      if (selectedAlbum === "none") {
        setPhotos([]);
      }
      //if album is not selected return
      if (selectedAlbum === null) return;
      // passing the selected album id to photos url.
      const url = `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`;
      const response = await getAlbumPhotos(url);
      setPhotos(response.data);
    };
    getPhotos();
  }, [setPhotos, selectedAlbum]);

  /*Function to set the album id */
  const selectHandler = (event) => {
    const value = event.target.value;
    setSelectedAlbum(value);
  };

  return (
    <div className="main-content">
      {albums && (
        <div className="select-holder">
          <label htmlFor="albums">Select Album</label>
          <select
            value={selectedAlbum}
            onChange={selectHandler}
            id="albums"
            style={{ width: "100%", padding: "5px" }}
          >
            <option value="none">Select Album</option>
            {albums.map((elem) => {
              return (
                <option key={elem.id} value={elem.id}>
                  {elem.title}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className="image-gallery">
        {photos.length > 0 ? (
          photos.map((image) => {
            return (
              <div className="card" key={image.id}>
                <div className="card-content">
                  <div className="image-holder">
                    <img src={image.url} alt={image.title} />
                  </div>
                  <div className="text-content">
                    <h3>Photo Id: {image.id}</h3>
                    <p>{image.title}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ color: "red" }}>
            No photo associated with the selected Album
          </div>
        )}
      </div>
    </div>
  );
};

export default Albums;
