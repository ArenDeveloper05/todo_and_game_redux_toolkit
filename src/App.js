import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
//ROUTER
import { ROUTER } from './router/router';
import GamePage from './pages/GamePage';
const {
   HOME_PAGE_ROUTE,
   GAME_PAGE_ROUTE,
   ERROR_PAGE_ROUTE} = ROUTER

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage/>} />
        <Route path={GAME_PAGE_ROUTE} element={<GamePage/>} />
        <Route path={ERROR_PAGE_ROUTE} element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
