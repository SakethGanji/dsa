import { useState } from 'react';
import {
    Grid,
    Drawer,
    TextInput,
    Button,
    Group,
    Box,
    Divider,
    Pagination,
    Popover,
    MultiSelect,
    Select,
} from '@mantine/core';
import {IconSearch, IconPlus, IconFilter, IconArrowsUpDown} from '@tabler/icons-react';
import DatasetCard from '../components/DatasetCard';
import DatasetDetailPane from '../components/DatasetDetailPane';
import { usePaginatedDatasets } from '../hooks/usePaginatedDatasets';
import mockDatasets, { Dataset } from '../data/mockDatasets';
import { useAuth } from '../context/AuthContext';
import { can } from '../utils/permissions';
import DatasetUploadModal from '../components/DatasetUploadModal'; // ✅ import modal

export default function DatasetsPage() {
    const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [uploadModalOpen, setUploadModalOpen] = useState(false); // ✅ modal state

    const [searchQuery, setSearchQuery] = useState('');
    const [tagFilter, setTagFilter] = useState<string[]>([]);
    const [ownerFilter, setOwnerFilter] = useState<string | null>(null);
    const [filterOpen, setFilterOpen] = useState(false);

    const { user } = useAuth();

    const allTags = Array.from(new Set(mockDatasets.flatMap((ds) => ds.tags)));
    const allOwners = Array.from(new Set(mockDatasets.map((ds) => ds.owner)));

    const {
        datasets,
        totalPages,
        currentPage,
        setPage,
        totalFiltered,
    } = usePaginatedDatasets({
        searchQuery,
        tagFilter,
        ownerFilter,
        pageSize: 6,
    });

    const handleDatasetUpload = (formData: FormData) => {
        // Submit formData to backend or process as needed
        console.log('Uploading dataset...', formData);
        // You can also update mockDatasets or refetch
    };

    return (
        <>
            <Box mb="md">
                <Group justify="space-between">
                    <Group gap="xs">
                        <TextInput
                            leftSection={<IconSearch size={16} />}
                            placeholder="Search datasets"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.currentTarget.value)}
                            w={250}
                        />

                        <Popover
                            opened={filterOpen}
                            onChange={setFilterOpen}
                            position="bottom-start"
                            width={300}
                            withArrow
                            shadow="md"
                        >
                            <Popover.Target>
                                <Button
                                    variant="default"
                                    leftSection={<IconFilter size={16} />}
                                    onClick={() => setFilterOpen((o) => !o)}
                                >
                                    Filters
                                </Button>
                            </Popover.Target>

                            <Popover.Target>
                                <Button
                                    variant="default"
                                    leftSection={<IconArrowsUpDown size={16} />}
                                    onClick={() => console.log('Sort')}
                                >
                                    Sort
                                </Button>
                            </Popover.Target>

                            <Popover.Dropdown>
                                <Box>
                                    <MultiSelect
                                        label="Tags"
                                        data={allTags}
                                        value={tagFilter}
                                        onChange={setTagFilter}
                                        searchable
                                        clearable
                                        nothingFoundMessage="No tags"
                                        mb="sm"
                                    />
                                    <Select
                                        label="Owner"
                                        data={allOwners}
                                        value={ownerFilter}
                                        onChange={setOwnerFilter}
                                        clearable
                                    />
                                </Box>
                            </Popover.Dropdown>
                        </Popover>
                    </Group>

                    {can.upload(user.role) && (
                        <Button
                            leftSection={<IconPlus size={16} />}
                            onClick={() => setUploadModalOpen(true)}
                        >
                            New Dataset
                        </Button>
                    )}
                </Group>
                <Divider mt="sm" />
            </Box>

            <Grid>
                {datasets.map((ds, idx) => (
                    <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 4 }}>
                        <DatasetCard
                            dataset={ds}
                            onClick={() => {
                                setSelectedDataset(ds);
                                setDrawerOpen(true);
                            }}
                        />
                    </Grid.Col>
                ))}
            </Grid>

            {totalFiltered === 0 && <Box p="md">No datasets match your filters.</Box>}

            {totalPages > 1 && (
                <Group justify="center" mt="lg">
                    <Pagination total={totalPages} value={currentPage} onChange={setPage} />
                </Group>
            )}

            <Drawer
                offset={8}
                radius="md"
                opened={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title={selectedDataset?.name || 'Dataset Details'}
                size="lg"
                position="right"
            >
                {selectedDataset && <DatasetDetailPane dataset={selectedDataset} />}
            </Drawer>

            {/* Modal for dataset upload */}
            <DatasetUploadModal
                opened={uploadModalOpen}
                onClose={() => setUploadModalOpen(false)}
                onSubmit={handleDatasetUpload}
                allTags={allTags}
                ownerId={user.name}
            />
        </>
    );
}
