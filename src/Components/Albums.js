import React, { useEffect, useState } from "react";
import { getAlbumsAPi, getAlbumPhotos } from "./GetApi";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [selectedAlbum, setSelectedAlbum] = useState("");

  //function to match album ids to photo id's
  const showPhotos = () => {};

  useEffect(() => {
    console.log("asdf");
    const getDAta = async () => {
      try {
        const responseAlbums = await getAlbumsAPi();
        setAlbums(responseAlbums.data);

        // console.log(responsePhotos.data);
        // console.log(responseAlbums.data);
      } catch (err) {
        console.log(err);
      }
    };

    getDAta();
    //getting the all the albums from the API
    // (async () => {

    // })();
  }, []);

  useEffect(() => {
    const getPhotos = async () => {
      if (selectedAlbum === "none") {
        setPhotos([]);
      }
      if (selectedAlbum === null) return;
      const url = `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbum}`;
      const response = await getAlbumPhotos(url);

      setPhotos(response.data);
    };
    getPhotos();
  }, [selectedAlbum]);

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
