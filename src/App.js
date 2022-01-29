import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContextAPIProvider from "./Components/AlbumAndPhotos/context/ContextAPIProvider";
const LineChart = React.lazy(() => import("./Components/D3/LineChart"));
const Albums = React.lazy(() => import("./Components/AlbumAndPhotos/Albums"));

function App() {
  return (
    <div className="">
      <header className="">
        <ContextAPIProvider>
          <Suspense
            fallback={
              <>
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              </>
            }
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Albums />} />
                <Route path="/chart" element={<LineChart />} />
                <Route path="*" element={"Error 404 Not Found"} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ContextAPIProvider>
      </header>
    </div>
  );
}

export default App;
