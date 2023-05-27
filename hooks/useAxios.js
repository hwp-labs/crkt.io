import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    url &&
      axios
        .get(url)
        .then((res) => setData(res))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
  }, [url]);
  
  return {
    data,
    error,
    isLoading,
  };
}
