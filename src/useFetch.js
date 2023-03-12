import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({});

  const refetch = (params) => {
    setParams(params)
  };

  useEffect(() => {
    const fetchData = async (params) => {
      setLoading(true);
      try {
        const response = await axios.get(url, params);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData(params);
  }, [url, params]);

  return { data, isLoading, error, refetch };
};
