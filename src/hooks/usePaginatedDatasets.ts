import { useEffect, useMemo, useState } from 'react';
import mockDatasets from '../data/mockDatasets';

export function usePaginatedDatasets({
                                         searchQuery,
                                         tagFilter,
                                         ownerFilter,
                                         pageSize = 6,
                                     }: {
    searchQuery: string;
    tagFilter: string[];
    ownerFilter: string | null;
    pageSize?: number;
}) {
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        const lowerSearch = searchQuery.toLowerCase();

        return mockDatasets.filter((ds) => {
            const matchesSearch =
                ds.name.toLowerCase().includes(lowerSearch) ||
                ds.description?.toLowerCase().includes(lowerSearch) ||
                ds.tags.some((tag) => tag.toLowerCase().includes(lowerSearch));

            const matchesTags =
                tagFilter.length === 0 ||
                ds.tags.some((tag) => tagFilter.includes(tag)); // "any" match

            const matchesOwner = !ownerFilter || ds.owner === ownerFilter;

            return matchesSearch && matchesTags && matchesOwner;
        });
    }, [searchQuery, tagFilter, ownerFilter]);

    const totalPages = Math.ceil(filtered.length / pageSize);

    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page, pageSize]);

    useEffect(() => setPage(1), [searchQuery, tagFilter, ownerFilter]);

    return {
        datasets: paginated,
        totalPages,
        currentPage: page,
        setPage,
        totalFiltered: filtered.length,
    };
}
