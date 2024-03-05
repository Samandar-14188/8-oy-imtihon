"use client";
import { useEffect, useState } from "react";

export interface ApiResponse {
  category: string;
  name: string;
  description: string;
  id: number;
}

const useApiData = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result: ApiResponse = await response.json();
        console.log(result);

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useApiData;
