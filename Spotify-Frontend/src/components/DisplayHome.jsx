import React, { useContext } from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((albumItem) => (
            <AlbumItem
              key={albumItem._id}
              name={albumItem.name}
              image={albumItem.image}
              desc={albumItem.desc}
              id={albumItem._id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((songItem) => (
            <SongItem
              key={songItem._id}
              name={songItem.name}
              image={songItem.image}
              desc={songItem.desc}
              id={songItem._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
