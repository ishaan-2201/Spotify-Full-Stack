# Spotify - Full MERN Stack Music Streaming Application

## Overview

This project is a Spotify-inspired music streaming web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a user-facing website and an admin panel for managing content. The application includes dynamic album and song management, audio playback functionality, and administrative capabilities for managing albums and songs.

## Website Preview

<img width="929" alt="" src="https://github.com/ishaan-2201/Spotify-Full-Stack/blob/main/Spotify-First-Image.png?raw=true">

<img width="929" alt="" src="https://github.com/ishaan-2201/Spotify-Full-Stack/blob/main/Spotify-Second-Image.png?raw=true">

<img width="929" alt="" src="https://github.com/ishaan-2201/Spotify-Full-Stack/blob/main/Spotify-Third-Image.png?raw=true">

## Features

### Frontend(User Interface):

#### Home Page:

- Displays all available albums.
- Includes a "Today's Biggest Hits" section showcasing all songs.

#### Album Page:

- Displays all songs within a specific album when an album is clicked.

#### Player Component:

- Persistent across all pages.
- Features:
  - Play and pause functionality.
  - Play and pause functionality.
  - Displays the current track being played.
- Integrated with a Player Context for seamless functionality.

#### Player Context:

- Maintains global state for:
  - Current track (song being played).
  - Play status (paused/playing).
  - Audio tag reference for controlling playback.
- Includes logic for:
  - Playing a specific song by ID.
  - Navigating to the next and previous songs.

#### Song Interaction:

- Songs can be played by clicking on their respective cards.

### Admin Panel:

#### Add Song:

- Form to input song details:
  - Song name, description, audio file, image file, and album (via a dropdown).
- Toast notifications for success or failure.

#### Add Album:

- Form to input album details:
  - Album name, description, background color, and image file.
- Toast notifications for success or failure.

#### List Song:

- Displays all songs in the database.
- Provides a delete option for each song.

#### List Album:

- Displays all albums in the database.
- Provides a delete option for each album.

### Backend:

#### Database (MongoDB):

- Collections:

  - `albums`: Stores album details (name, description, background color, image URL).

  - `songs`: Stores song details (name, description, audio URL, image URL, album reference).

#### API Endpoints:

- Songs:
  - `POST /api/song/add`: Add a new song.
  - `GET /api/song/list`: Retrieve all songs.
  - `DELETE /api/song/delete/:id`: Delete a song by ID.
- Albums:
  - `POST /api/album/add`: Add a new album.
  - `GET /api/album/list`: Retrieve all albums.
  - `DELETE /api/album/delete/:id`: Delete an album by ID.

#### File Uploads:

- Multer:
  - Handles the upload of image and audio files.
- Cloudinary:
  - Stores uploaded files and generates URLs.
  - Database stores Cloudinary URLs for these files.

## Technologies Used

### Frontend:

- React.js
- React Context API
- React Toastify for notifications
- Tailwind CSS for styling

### Backend:

- Node.js
- Express.js
- Multer for file uploads
- Cloudinary for cloud storage

### Database:

- MongoDB

## Future Improvements

- Add user authentication for personalized playlists and favorite tracks.
- Implement a search bar for songs and albums.
- Introduce a "Like" functionality for songs.
- Enhance the admin panel with editing capabilities.
