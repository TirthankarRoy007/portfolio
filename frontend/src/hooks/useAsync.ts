import { useEffect, useState } from "react";

interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useAsync = <T>(loader: () => Promise<T>) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    setState((current) => ({ ...current, isLoading: true, error: null }));

    loader()
      .then((data) => {
        if (isMounted) {
          setState({ data, isLoading: false, error: null });
        }
      })
      .catch((error: unknown) => {
        if (isMounted) {
          setState({
            data: null,
            isLoading: false,
            error: error instanceof Error ? error.message : "Something went wrong"
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [loader]);

  return state;
};
