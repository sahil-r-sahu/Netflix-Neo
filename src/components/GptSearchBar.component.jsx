import { useSelector } from "react-redux";
import lang from "../utils/languageConstants.utils";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <form className="pt-32 px-24 flex gap-8">
        <input
          className=" w-full px-4 py-2 rounded-lg text-white text-3xl border-2 border-white"
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button className="py-2 px-6 text-2xl text-white bg-red-500 hover:bg-red-400/50 rounded-lg  cursor-pointer ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
