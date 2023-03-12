import { useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = (params) => {
    fetchData(params);
  };

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

  return { data, isLoading, error, refetch };
};
