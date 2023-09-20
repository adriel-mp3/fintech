import React from "react";

const useFetch = <T>(url: URL | RequestInfo, options?: RequestInit) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controler = new AbortController();
    const { signal } = controler;
    (async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        const data = (await response.json()) as T;
        if (!signal.aborted) setData(data);
      } catch (error) {
        if (error instanceof Error && signal.aborted) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
