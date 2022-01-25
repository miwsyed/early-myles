import React, { createContext, useState } from "react";

const GlobalAlbums = createContext();
const SetGlobalAlbums = createContext();

const GlobalPhotos = createContext();
const SetGlobalPhotos = createContext();

const ContextAPIProvider = ({ children }) => {
  const [allGlobalAlbums, setAllGlobalAlbums] = useState([]);
  const [allGlobalPhotos, setAllGlobalPhotos] = useState([]);

  return (
    <div>
      <SetGlobalAlbums.Provider value={setAllGlobalAlbums}>
        <GlobalAlbums.Provider value={allGlobalAlbums}>
          <GlobalPhotos.Provider value={allGlobalPhotos}>
            <SetGlobalPhotos value={setAllGlobalPhotos}>
              {children}
            </SetGlobalPhotos>
          </GlobalPhotos.Provider>
        </GlobalAlbums.Provider>
      </SetGlobalAlbums.Provider>
    </div>
  );
};

export default ContextAPIProvider;
