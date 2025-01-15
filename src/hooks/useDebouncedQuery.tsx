import { useEffect, useState } from "react";

export const useDebouncedQuery = (query: string, delay: number) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [query, delay]);
    return debouncedQuery;
}