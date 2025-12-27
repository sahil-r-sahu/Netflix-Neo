import { Bg_Url } from "../utils/constant.utils";
import GptMovieSuggestions from "./GptMovieSuggestions.component";
import GptSearchBar from "./GptSearchBar.component";

const GptSearch = () => {
  return (
    <div className="bg-black/60">
      <div className="absolute -z-10">
        <img src={Bg_Url} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GptSearch;
