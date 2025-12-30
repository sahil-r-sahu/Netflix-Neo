<div align="center">

<h1>Netflix-Neo – AI Powered Movie Discovery Platform</h1>

### A modern Netflix-style platform with GPT-powered movie recommendations.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Made With](https://img.shields.io/badge/Made%20With-React%20%7C%20Tailwind%20%7C%20Firebase-orange)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-purple)

</div>

---

## 🚀 Overview

Netflix-Neo is a **Netflix-inspired movie streaming UI** enhanced with **AI-powered search using GPT**.  
It allows users to **sign in, browse trending movies & web series, and discover content intelligently** using natural language queries.

---

## 🌐 Live Demo

🔗 [Netflix-Neo – AI Powered Movie Discovery Platform](https://sahil-r-sahu.github.io/Netflix-Neo/)

---

## ✨ Features

### 🔐 Authentication

- Firebase Email & Password authentication
- Secure Sign In / Sign Up flow

### 🎬 Movie Browsing

- Now Playing movies
- Popular movies
- Top Rated movies
- Upcoming movies
- Popular Web Series
- Trailer autoplay background

### 🤖 GPT Movie Search

- Natural language movie search
- GPT-powered recommendations
- Intelligent movie suggestions
- Fallback handling for API limits

---

## 🛠️ Tech Stack

| Layer          | Technology                 |
| -------------- | -------------------------- |
| Frontend       | React, TailwindCSS         |
| State Mgmt     | Redux Toolkit              |
| Authentication | Firebase Auth              |
| AI Search      | OpenAI GPT API             |
| APIs           | TMDB API                   |
| Tooling        | Vite, Git, GitHub, VS Code |

---

## 📦 Folder Structure

```

NETFLIX-NEO/
│
├── src/
│   ├── components/
│   │   ├── Body.component.jsx
│   │   ├── Browse.component.jsx
│   │   ├── Footer.component.jsx
│   │   ├── GptMovieSuggestions.component.jsx
│   │   ├── GptSearch.component.jsx
│   │   ├── GptSearchBar.component.jsx
│   │   ├── Header.component.jsx
│   │   ├── Login.component.jsx
│   │   ├── MainContainer.component.jsx
│   │   ├── MovieCard.component.jsx
│   │   ├── MovieList.component.jsx
│   │   ├── SecondaryContainer.component.jsx
│   │   ├── VideoBackground.component.jsx
│   │   └── VideoTitle.component.jsx
│   │
│   ├── Hooks/
│   │   ├── useMovieTrailer.hooks.jsx
│   │   ├── useNowPlayingMovies.hooks.jsx
│   │   ├── usePopularMovies.hooks.jsx
│   │   ├── usePopularWebSeries.hooks.jsx
│   │   ├── usePopup.hooks.jsx
│   │   ├── useTopRatedMovies.hooks.jsx
│   │   └── useUpcomingMovies.hooks.jsx
│   │
│   ├── utils/
│   │   ├── appStore.utils.jsx
│   │   ├── configSlice.utils.jsx
│   │   ├── constant.utils.js
│   │   ├── firebase.utils.jsx
│   │   ├── gptSlice.utils.jsx
│   │   ├── languageConstants.utils.js
│   │   ├── movieSlice.utils.jsx
│   │   ├── openAi.utils.jsx
│   │   ├── userSlice.utils.jsx
│   │   └── Validations.utils.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
└── README.md
```

---

## 🛠️ Installation & Setup

Follow these steps to run **Netflix-Neo** on your local machine.

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sahil-r-sahu/netflix-neo.git
```

2️⃣ Navigate to the project directory

```bash
cd netflix-neo
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_OPENAI_KEY=your_openai_api_key
```

⚠️ Note

Do not commit the .env file

All environment variables must start with VITE\_ for Vite to access them

5️⃣ Run the development server

```bash
npm run dev
```

6️⃣ Open in browser

```arduino
http://localhost:5173
```

## 👨‍💻 Author

**Saahil**  
Frontend Developer | Web3 Learner | UI Designer

If you like this project, don’t forget to ⭐ **star the repo**!
