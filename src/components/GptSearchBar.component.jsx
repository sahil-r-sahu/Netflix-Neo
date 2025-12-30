import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants.utils";
import { useRef } from "react";
import openai from "../utils/openAi.utils";
import { API_OPTIONS } from "../utils/constant.utils";
import { addGptMovieResults } from "../utils/gptSlice.utils";
import useGptLimitPopup from "../Hooks/usePopup.hooks";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const { triggerGptLimitPopup, GptLimitPopup } = useGptLimitPopup();

  //Subscribing to store to change & get language
  const langKey = useSelector((store) => store.config.lang);
  //collecting the text entered in the input box by the user
  const searchText = useRef(null);

  //Searching movies in TMDB website
  const searchMovieTMDB = async (Movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        Movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  //making an API call with the searchText entered by the user & getting the results for it
  const handleGptSearchButton = async () => {
    triggerGptLimitPopup();

    const gptQuery = `
      You are a professional movie recommendation engine.

      Task:
      Based on the user's search term: "${searchText.current.value}", recommend exactly 5 movies.

      Rules:
      - Movies must strongly match the genre or theme.
      - Prefer well-known, high-quality films.
      - Do NOT include descriptions, years, or extra text.
      - Do NOT number the list.
      - Output ONLY movie names.
      - Separate movie names using a comma and a space.

      Example output format:
      The Conjuring, Hereditary, Insidious, Sinister, It Follows
    `;

    const GptResult = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!GptResult.choices) {
      console.log("GptApi failed");
    }

    //this will return an array of movies after search
    const getGptMovies = GptResult.choices[0].message.content.split(",");

    //searching each movies in TMDB website & this will return an arry of 5 promises
    const promiseArray = getGptMovies.map((Movie) => searchMovieTMDB(Movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({
        MovieNames: getGptMovies,
        MovieResults: tmdbResults,
      })
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pt-24 px-4 sm:px-10 md:px-24 flex flex-col sm:flex-row gap-4 sm:gap-8"
      >
        <input
          ref={searchText}
          className=" w-full px-4 py-2 rounded-lg text-white text-lg sm:text-2xl md:text-3xl border-2 border-white bg-transparent"
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          onClick={handleGptSearchButton}
          className="w-full sm:w-auto py-2 px-6 text-lg sm:text-xl md:text-2xl text-white bg-red-500 hover:bg-red-400/50 rounded-lg  cursor-pointer "
        >
          {lang[langKey].search}
        </button>
      </form>
      <GptLimitPopup />
    </div>
  );
};
export default GptSearchBar;
