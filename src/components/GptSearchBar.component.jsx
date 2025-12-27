import { useSelector } from "react-redux";
import lang from "../utils/languageConstants.utils";
import { useRef } from "react";
import openai from "../utils/openAi.utils";

const GptSearchBar = () => {
  //Subscribing to store to change & get language
  const langKey = useSelector((store) => store.config.lang);
  //collecting the text entered in the input box by the user
  const searchText = useRef(null);

  //making an API call with the searchText entered by the user & getting the results for it
  const handleGptSearchButton = async () => {
    console.log(searchText.current.value);

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
    console.log(GptResult.choices[0].message.content);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pt-32 px-24 flex gap-8"
      >
        <input
          ref={searchText}
          className=" w-full px-4 py-2 rounded-lg text-white text-3xl border-2 border-white"
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          onClick={handleGptSearchButton}
          className="py-2 px-6 text-2xl text-white bg-red-500 hover:bg-red-400/50 rounded-lg  cursor-pointer "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
