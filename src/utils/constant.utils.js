export const LogoUrl =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Bg_Url =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg";

//This Api key & access token will be needed whenever we make any request to the site, putting it in constants so that we do't need to repeate the code again & again
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_OPTIONS}`,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

//Making multi_language suppoet dynamic
export const suported_Language = [
  { identifier: "en", name: "English" },
  { identifier: "hn", name: "Hindi" },
  { identifier: "mh", name: "Marathi" },
];

export const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;
