import { useState, useEffect } from 'react';


const useMovieSearch = (apiFunction, id) => {
  const [movieArr, setMovieArr] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function fetchToSearch() {
      try {
        setIsLoading(false);
        const r = await apiFunction(id);
        setMovieArr(r);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchToSearch();
  }, [apiFunction, id]);
  return { movieArr, error, isLoading };
};

export default useMovieSearch;
