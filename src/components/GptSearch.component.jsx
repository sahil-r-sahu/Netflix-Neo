import { Bg_Url } from "../utils/constant.utils";
import GptMovieSuggestions from "./GptMovieSuggestions.component";
import GptSearchBar from "./GptSearchBar.component";
import Footer from "./Footer.component"

const GptSearch = () => {
  return (
    <div className="relative min-h-screen bg-black/60">
      <div className="absolute -z-10">
        <img
          className="h-full w-full object-cover"
          src={Bg_Url}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
      <Footer />
    </div>
  );
};
export default GptSearch;
