import {useEffect, useState} from "react";

export const useServiceFetcher = <T>(fetcher: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetcher().then(d => setData(d));
  }, []);

  return {
    data,
  };
}
