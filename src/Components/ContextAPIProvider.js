import React, { createContext, useContext, useState } from "react";

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
            <SetGlobalPhotos.Provider value={setAllGlobalPhotos}>
              {children}
            </SetGlobalPhotos.Provider>
          </GlobalPhotos.Provider>
        </GlobalAlbums.Provider>
      </SetGlobalAlbums.Provider>
    </div>
  );
};

export default ContextAPIProvider;
export const useGlobalAlbums = () => useContext(GlobalAlbums);
export const useSetGlobalAlbums = () => useContext(SetGlobalAlbums);
export const useGlobalPhotos = () => useContext(GlobalPhotos);
export const useSetGlobalPhotos = () => useContext(SetGlobalPhotos);
