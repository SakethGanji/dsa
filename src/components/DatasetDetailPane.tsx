import { Card, Text, Table, Stack } from '@mantine/core';

interface Dataset {
    name: string;
    version: string;
    tags: string[];
    owner: string;
    data: Record<string, any>[];
}

interface Props {
    dataset: Dataset;
}

export default function DatasetDetailPane({ dataset }: Props) {
    if (!dataset) return null;

    const headers = Object.keys(dataset.data[0] || {});
    const rows = dataset.data.map((row, index) => (
        <Table.Tr key={index}>
            {headers.map((key) => (
                <Table.Td key={key}>{row[key]}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <Card p="md" radius="md" withBorder>
            <Stack gap="xs" mb="md">
                <Text fw={600} size="lg">{dataset.name}</Text>
                <Text size="sm">Version: {dataset.version}</Text>
                <Text size="sm">Owner: {dataset.owner}</Text>
                <Text size="sm">Tags: {dataset.tags.join(', ')}</Text>
            </Stack>
            <Table>
                <Table.Thead>
                    <Table.Tr>{headers.map((h) => <Table.Th key={h}>{h}</Table.Th>)}</Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Card>
    );
}
