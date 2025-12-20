# 📸 Photo Snap
A fast, responsive React photo gallery that lets users search and explore images powered by the Unsplash API.

# 📖 About The Project
Photo Snap is a **React-based** photo gallery application that allows users to search and browse high-quality images using the **Unsplash API**.

<img width="1211" height="664" alt="Screenshot 2025-12-18 at 1 21 15 AM" src="https://github.com/user-attachments/assets/229548f7-2e96-4b8b-addf-165579d7cc63" />

This project was built as part of my Techtonica learning journey to practice:
- Component-based design in React
- Working with external APIs
- Managing application state and side effects
- Building responsive, user-friendly interfaces

# 🔍 How the App Works
1. The user enters a keyword into the search bar
2. The app sends a request to the Unsplash API
3. Matching photos are fetched asynchronously
4. Results are displayed in a responsive grid layout
5. Pagination buttons allow navigating through result pages
6. Users can perform new searches without refreshing the page

![Kapture 2025-12-19 at 19 22 31](https://github.com/user-attachments/assets/2eec69f6-2314-426a-8533-50c59a0270f1)


# ✨ Features
- **Search Functionality**: Users can search photos by keyword (e.g. dogs, nature, sunsets).
- **Unsplash API Integration**: Fetches real-time image data from the Unsplash REST API.
- **Component-Based UI Design**: The main application state and API logic are managed in the App component, while UI responsibilities are delegated to smaller presentational components.

## 🚀 How To Run
1. **Clone the [repository](https://github.com/sylviajsy/react-game)**:
  ```bash
    git clone https://github.com/sylviajsy/react-game
   ```
2.  **Navigate to the project directory**:
   ```bash
    cd react-game
   ```
3.  **Install dependenciesr**:
   ```bash
    npm install
   ```
4. **Set up environment variables**:
  Create a `.env` file in the root directory:
  ```bash
  VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
  ```
5. **Run locally**:
  ```bash
    npm run dev
  ````
6. You will see `Local: http://localhost:5173/` in terminal, right click it. The game will launch automatically in your default browser

# 🛠️ Tech Stack
- React.js
- React Hooks: `useState`, `useEffect`
- CSS3 (Grid, Flexbox)
- Unsplash REST API
- Build Tool: Vite 

