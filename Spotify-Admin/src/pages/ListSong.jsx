import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

const ListSong = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAllSongs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setSongs(response.data.songs);
      }
    } catch (error) {
      toast.error("Failed to fetch songs");
    }
    setLoading(false);
  };
  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id });
      if (response.data.success) {
        toast.success("Song Removed!");
        await fetchAllSongs();
      }
    } catch (error) {
      toast.error("Error removing song!");
    }
  };
  useEffect(() => {
    fetchAllSongs();
  }, []);
  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <div>
      <p>All Songs</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>
        {songs.map((song, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            >
              <img src={song.image} className="w-12" alt="" />
              <p>{song.name}</p>
              <p>{song.album}</p>
              <p>{song.duration}</p>
              <p
                className="cursor-pointer"
                onClick={() => removeSong(song._id)}
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSong;
