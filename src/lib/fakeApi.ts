import mockDatasets from '../data/mockDatasets';

export async function fetchDatasets({
                                        q,
                                        tags,
                                        owner,
                                        page,
                                        pageSize,
                                    }: {
    q: string;
    tags: string[];
    owner: string | null;
    page: number;
    pageSize: number;
}) {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await delay(300); // simulate network delay

    const searchLower = q.toLowerCase();

    const filtered = mockDatasets.filter((ds) => {
        const matchesSearch =
            ds.name.toLowerCase().includes(searchLower) ||
            ds.description?.toLowerCase().includes(searchLower) ||
            ds.tags.some((tag) => tag.toLowerCase().includes(searchLower));

        const matchesTags =
            tags.length === 0 || ds.tags.some((tag) => tags.includes(tag));

        const matchesOwner = !owner || ds.owner === owner;

        return matchesSearch && matchesTags && matchesOwner;
    });

    const totalPages = Math.ceil(filtered.length / pageSize);
    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);

    return {
        items,
        totalPages,
    };
}
