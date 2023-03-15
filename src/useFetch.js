import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          async function fetchData() {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Something went wrong!");
            }
    
            const data = await response.json();
            console.log(response);
            console.log(data);
            setData(data);
            setLoading(false);
            setError(null);
          }
    
          fetchData().catch((err) => {
            setLoading(false);
            setError(err.message);
          });
        }, 200);
      }, [url]);

    return { data, loading, error };
}

export default useFetch;