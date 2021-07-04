import {useState,useEffect} from 'react'

const useFetch = (url, options) => {
  const abortController = new AbortController();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options, {
          signal: abortController.signal,
        });
        const json = await res.json();
        setResponse(json);
        setLoading(false)

      } catch (error) {
        setError(error);
      }
    };
    fetchData();


 return () => {
   abortController.abort();
 };


  }, [url]);
  return { response, error,loading };
};

export default useFetch;