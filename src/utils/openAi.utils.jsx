import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constant.utils";

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
