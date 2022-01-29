import React, { useCallback, useEffect, useState } from "react";
import { useGlobalAlbums, useGlobalPhotos } from "./context/ContextAPIProvider";

import { StoreData } from "./StoreData";
import spinnerImg from "./helpers/spinning-loading.gif";
const Albums = () => {
  /*to store the selected album id */
  const [selectedAlbum, setSelectedAlbum] = useState("");

  /*Fetching all albums from using Context API*/
  const albums = useGlobalAlbums();

  /*Fetching all photos of the current selected album using Context API*/
  const photos = useGlobalPhotos();

  /*Calling the StoreData function and passing in current Selected Album id*/
  StoreData(selectedAlbum);

  // Setting the selected album id to selectedALbum hook
  const selectHandler = useCallback(
    (event) => {
      console.log(event.target.value);
      const value = event.target.value;
      setSelectedAlbum(value);
    },
    [setSelectedAlbum]
  );

  return (
    <div className="main-content">
      {albums ? (
        <div className="select-holder">
          <label htmlFor="albums" className="heading-text">
            Select Album
          </label>
          <select
            className="btn text-start "
            value={selectedAlbum}
            onChange={selectHandler}
            id="albums"
            style={{
              width: "100%",
              border: "1px solid grey",
            }}
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
      ) : (
        <>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </>
      )}
      <div className="image-gallery">
        {photos.length ? (
          photos.map((image) => {
            return (
              <div className="card" key={image.id}>
                <div className="card-content">
                  <div className="image-holder">
                    {image ? (
                      <img
                        src={image.url ? image.url : spinnerImg}
                        alt={image.title}
                        className="loading"
                      />
                    ) : (
                      <>
                        <div class="spinner-border" role="status">
                          <span class="sr-only"></span>
                        </div>
                      </>
                    )}
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
          <div className="custom-noPhoto-text text-danger">
            No photo associated with the selected Album
          </div>
        )}
      </div>
      <style>
        {`           
        .main-content {
          padding: 50px;
        }
        .image-gallery {
          padding : 20px 0px;
          display: grid ;
          grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
          grid-gap : 30px ;
        }
        
        .card {
          border-radius: 8px;

        }
        
        .card-content {
          height : 100%;
        }
        
        .text-content {
          padding: 10px;
        }
        
        img {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          max-width: 100%;
        }
        
        .text-content h3 {
          margin-bottom: 10px;
        }
        .heading-text{
          font-size: 1vw;
          color: #707070;
           padding: 0.2vw;
        }
        .custom-noPhoto-text{
          width : 150% !important;
          font-size : 1.1rem;
        }
     

        
        `}
      </style>
    </div>
  );
};

export default Albums;
