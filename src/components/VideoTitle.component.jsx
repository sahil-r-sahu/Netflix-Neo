const VideoTitle = ({ title, discrption }) => {
  return (
    <div className="px-4 sm:px-10 md:px-16 pt-20 sm:pt-12 md:pt-32 absolute md:absolute md:inset-0 text-white bg-linear-to-r from-black z-5">
      <h1 className="font-bold text-xl sm:text-3xl md:text-6xl max-w-full md:max-w-[40%]">
        {title}
      </h1>
      <p className="mt-2 text-xs sm:text-base md:text-lg  max-w-[50%] line-clamp-3 md:line-clamp-5">
        {discrption}
      </p>

      <div className="flex gap-3  sm:gap-5 py-4">
        <button className="md:px-4  sm:px-5 py-1 bg-white p-1.5 rounded text-black cursor-pointer text-sm sm:text-lg hover:opacity-60">
          ▶︎ Play
        </button>
        <button className="md:px-4 px-1 sm:px-5 bg-gray-500/60 py-1 rounded text-white text-sm  cursor-pointer sm:text-lg bg/50 hover:opacity-60">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
