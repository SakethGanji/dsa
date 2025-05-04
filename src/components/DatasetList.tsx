import { useState } from 'react';
import { TextInput, Stack, Text } from '@mantine/core';
import DatasetCard from './DatasetCard';
import { Dataset } from '../data/mockDatasets';

type Props = {
    datasets: Dataset[];
};

export default function DatasetList({ datasets }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDatasets = datasets.filter((dataset) => {
        const query = searchQuery.toLowerCase().trim();
        return (
            dataset.name.toLowerCase().includes(query) ||
            dataset.description.toLowerCase().includes(query) ||
            dataset.tags.some((tag) => tag.toLowerCase().includes(query))
        );
    });

    return (
        <Stack>
            <TextInput
                placeholder="Search datasets"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.currentTarget.value)}
            />

            {filteredDatasets.length === 0 ? (
                <Text>No datasets found.</Text>
            ) : (
                filteredDatasets.map((dataset) => (
                    <DatasetCard key={dataset.id} dataset={dataset} onClick={() => {}} />
                ))
            )}
        </Stack>
    );
}
