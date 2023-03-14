import { Routes, Route, Navigate} from 'react-router-dom';
import { lazy } from 'react';
import Home from '../page/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import NotFound from '../page/NotFound/NotFound'


const Movies = lazy(() => import('../page/Movies'));
const MoviesDetails = lazy(() => import('../page/MoviesDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Movies/> } />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />

            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      ;
      <ToastContainer autoClose={300} />
    </>
  );
};


