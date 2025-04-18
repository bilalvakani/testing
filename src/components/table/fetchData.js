import { useState, useEffect } from "react";
import axios from "axios";
import { Axios } from "@/config/summaryAPI";

const useFetchData = (apiUrl) => {
  const { url, method,transformer = (data) => data } = apiUrl;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url,
          method,
          params:{
            token:"174462978804907-04-2025-17-48-11"
          }
        });
        const transformed = transformer(response.data.data)
        setData(transformed);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (apiUrl) {
      fetchData();
    }
  }, []);

  return { data, loading, error };
};

export default useFetchData;
