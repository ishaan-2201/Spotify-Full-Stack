import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const { name, desc, bgColor } = req.body;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };

    const newAlbum = albumModel(albumData);
    await newAlbum.save();
    res.json({ success: true, message: "Album added!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    res.json({ success: true, albums: allAlbums });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeAlbum = async (req, res) => {
  try {
    const { id } = req.body;
    await albumModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Album removed!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addAlbum, listAlbum, removeAlbum };
