const VideoTitle = ({ title, discrption }) => {
  return (
    <div className="px-5 pt-32 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl w-4/12 text-center">{title}</h1>
      <p className="w-5/12 pt-3">{discrption}</p>

      <div className="flex gap-5 py-6">
        <button className="px-5 bg-white p-1.5 rounded text-black cursor-pointer text-lg hover:opacity-80">
          ▶︎ Play
        </button>
        <button className="px-5 bg-gray-300/50 p-1.5 rounded text-white cursor-pointer text-lg bg/50 hover:opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
