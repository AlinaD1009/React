import { useEffect, useState } from 'react';

export default function useFetch(fetchFn) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFn()
        .then(setData)
        .finally(() => setLoading(false));
    }, [fetchFn]);

    return { data, loading };
}
