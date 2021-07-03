import {useState,useEffect} from 'react'

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false)

      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error,loading };
};

export default useFetch;