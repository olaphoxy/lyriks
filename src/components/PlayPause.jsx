import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ activeSong, isPlaying, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={38} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={38} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
