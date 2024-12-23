import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../App";

const ListAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAllAlbums = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setAlbums(response.data.albums);
      }
    } catch (error) {
      toast.error("Error fetching albums");
    }
    setLoading(false);
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success("Album removed!");
        await fetchAllAlbums();
      }
    } catch (error) {
      toast.error("Failed to remove album!");
    }
  };
  useEffect(() => {
    fetchAllAlbums();
  }, []);
  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Colour</b>
          <b>Action</b>
        </div>
        {albums.map((album, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            >
              <img src={album.image} className="w-12" alt="" />
              <p>{album.name}</p>
              <p>{album.desc}</p>
              <input type="color" value={album.bgColor} />
              <p
                className="cursor-pointer"
                onClick={() => removeAlbum(album._id)}
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

export default ListAlbum;
