import useSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../lib/time";

function Song({ order, track }) {
  const spotifyApi = useSpotify();

  return (
    <div className="grid grid-cols-2 text-gray-500 py-2 px-5 rounded-lg cursor-pointer  hover:bg-gray-900">
      {/* <h1>{i}</h1> */}
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-30"
          src={track.track.album.images?.[0].url}
          alt=""
        />
        <div className="w-30 lg:w-64 truncate text-white">
          <p>{track.track.name}</p>
          <p className="w-40 ">{track.track.artist?.[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
