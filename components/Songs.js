import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="px-8 text-white flex flex-col space-y-1 pb-20">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} order={i} track={track} />
      ))}
    </div>
  );
}

export default Songs;
