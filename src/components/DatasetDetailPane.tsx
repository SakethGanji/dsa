import {
    Title,
    Text,
    Select,
    ActionIcon,
    SimpleGrid,
    Textarea,
    Badge,
    ScrollArea,
    Table,
    Tabs,
    Anchor,
    Box,
    Group,
} from '@mantine/core';
import { IconDownload, IconBookmark, IconTrash } from '@tabler/icons-react';

export default function DatasetDrawerContent() {
    const versionOptions = [
        { value: 'v1', label: 'Version 1' },
        { value: 'v2', label: 'Version 2' },
    ];

    const schemaData = [
        { name: 'id', type: 'integer', missing: '0%' },
        { name: 'name', type: 'string', missing: '1%' },
        { name: 'age', type: 'integer', missing: '3%' },
        { name: 'email', type: 'string', missing: '2%' },
        { name: 'created_at', type: 'datetime', missing: '0%' },
    ];

    return (
        <Box p="md" style={{ width: '100%' }}>
            {/* Row 1: Title & Actions */}
            <Box
                mb="sm"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/* Left: Title & Version */}
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Title order={3}>Dataset Name</Title>
                    <Select data={versionOptions} defaultValue="v1" w={150} mt="xs" />
                </Box>

                {/* Right: Icons aligned bottom */}
                <Group gap="xs" align="flex-end">
                    <ActionIcon variant="default">
                        <IconDownload size={18} />
                    </ActionIcon>
                    <ActionIcon variant="default">
                        <IconBookmark size={18} />
                    </ActionIcon>
                    <ActionIcon variant="default">
                        <IconTrash size={18} />
                    </ActionIcon>
                </Group>
            </Box>

            <hr />

            {/* Row 2: Quick Stats evenly spaced */}
            <SimpleGrid cols={5} spacing="lg" mb="md">
                <div>
                    <Text size="xs" color="dimmed">
                        Owner
                    </Text>
                    <Text>bg54677</Text>
                </div>
                <div>
                    <Text size="xs" color="dimmed">
                        Ingested
                    </Text>
                    <Text>Apr 13, 2024 10:28 AM</Text>
                </div>
                <div>
                    <Text size="xs" color="dimmed">
                        Last Updated
                    </Text>
                    <Text>Apr 15, 2024 02:48 PM</Text>
                </div>
                <div>
                    <Text size="xs" color="dimmed">
                        Rows
                    </Text>
                    <Text>50,000</Text>
                </div>
                <div>
                    <Text size="xs" color="dimmed">
                        File Size
                    </Text>
                    <Text>10.2 MB</Text>
                </div>
            </SimpleGrid>

            <hr />

            {/* Row 3: Metadata & Tags / Upload Stats */}
            <SimpleGrid cols={2} spacing="xl" mb="md">
                {/* Left 50%: Description & Tags */}
                <Box>
                    <Text size="sm" mb={4}>
                        Description
                    </Text>
                    <Textarea placeholder="Add description..." autosize minRows={3} mb="sm" />
                    <Text size="sm" mb={4}>
                        Tags
                    </Text>
                    <Group gap="xs">
                        <Badge>Tag 1</Badge>
                        <Badge>Tag 2</Badge>
                        <Badge variant="outline">+ Add tag</Badge>
                    </Group>
                </Box>

                {/* Right 50%: Upload History / Schema Stats */}
                <Box>
                    <Group gap="xs">
                        <Group align="center" gap="xs">
                            <Text size="sm">Upload History</Text>
                            <Anchor size="sm" ml="xs">
                                View all
                            </Anchor>
                        </Group>
                        <Text size="sm">Schema</Text>
                        <Text>20 columns</Text>
                        <Text>2% missing</Text>
                    </Group>
                </Box>
            </SimpleGrid>

            <hr />

            {/* Row 4: Schema Preview centered */}
            <Box w="100%" mb="md">
                <Text mb="xs">Schema Preview</Text>
                <ScrollArea type="auto" h={200} style={{ width: '100%' }}>
                    <Table
                        striped
                        highlightOnHover
                        style={{ minWidth: '100%' }}  // ← use style instead of sx
                    >
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Type</Table.Th>
                                <Table.Th>% Missing</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {schemaData.map((col, idx) => (
                                <Table.Tr key={idx}>
                                    <Table.Td>{col.name}</Table.Td>
                                    <Table.Td>{col.type}</Table.Td>
                                    <Table.Td>{col.missing}</Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </ScrollArea>
            </Box>


            <hr />

            {/* Row 5: Tabs */}
            <Tabs defaultValue="overview">
                <Tabs.List>
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="exploration">Exploration</Tabs.Tab>
                    <Tabs.Tab value="sampling">Sampling</Tabs.Tab>
                    <Tabs.Tab value="versions">Versions</Tabs.Tab>
                    <Tabs.Tab value="history">History</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="overview" pt="xs">
                    test
                </Tabs.Panel>
                <Tabs.Panel value="exploration" pt="xs">
                    test
                </Tabs.Panel>
                <Tabs.Panel value="sampling" pt="xs">
                    test
                </Tabs.Panel>
                <Tabs.Panel value="versions" pt="xs">
                    test
                </Tabs.Panel>
                <Tabs.Panel value="history" pt="xs">
                    test
                </Tabs.Panel>
            </Tabs>
        </Box>
    );
}
