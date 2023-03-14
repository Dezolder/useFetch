import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url, params = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (param = params) => {
    console.log('fetchData')
    setLoading(true);
    try {
      const response = await axios.get(url, param);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [params, url] // Ошибка если пустой массив!
  )

  useEffect(() => {
    console.log('useEffect')
    async function fetchData(params) { }
    fetchData() // так useEffect обрабатывает промисы!
  }, [])
  return { data, isLoading, error, refetch: fetchData };
};
