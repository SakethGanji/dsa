import {
    ActionIcon,
    Avatar,
    Badge,
    Card,
    Center,
    Group,
    Text,
    useMantineTheme,
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import { Dataset } from '../data/mockDatasets';
import classes from './DatasetCard.module.css';

type Props = {
    dataset: Dataset;
    onClick: () => void;
    onDelete?: () => void;
};

export default function DatasetCard({ dataset, onClick }: Props) {
    const theme = useMantineTheme();

    const dateValue = new Date(dataset.date); // use actual dataset field
    const formattedDate = dateValue.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <Card withBorder radius="md" className={classes.card} onClick={onClick}>
            <div className={classes.dateWrapper}>
                <Text className={classes.date} fz="xs" c="dimmed">
                    {formattedDate}
                </Text>
            </div>

            <div className={classes.content}>
                <Text className={classes.title} fw={500}>
                    {dataset.name}
                </Text>

                <div className={classes.tags}>
                    {dataset.tags.length > 0 ? (
                        dataset.tags.map((tag) => (
                            <Badge key={tag} variant="outline" size="sm">
                                {tag}
                            </Badge>
                        ))
                    ) : (
                        <Text fz="xs" c="dimmed">
                            No tags
                        </Text>
                    )}
                </div>

                <Text className={classes.description} c="dimmed" fz="sm">
                    {dataset.description}
                </Text>
            </div>

            <Group justify="space-between" className={classes.footer}>
                <Center>
                    <Avatar size={24} radius="xl" mr="xs" />
                    <Text fz="sm">{dataset.owner}</Text>
                </Center>

                <Group gap={8} mr={0}>
                    <ActionIcon
                        className={classes.action}
                        onClick={(e) => {
                            e.stopPropagation();
                            // Add favorite logic here
                        }}
                    >
                        <IconHeart size={16} color={theme.colors.red[6]} />
                    </ActionIcon>

                    <ActionIcon
                        className={classes.action}
                        onClick={(e) => {
                            e.stopPropagation();
                            // Add bookmark logic here
                        }}
                    >
                        <IconBookmark size={16} color={theme.colors.yellow[7]} />
                    </ActionIcon>

                    <ActionIcon
                        className={classes.action}
                        onClick={(e) => {
                            e.stopPropagation();
                            // Add share logic here
                        }}
                    >
                        <IconShare size={16} color={theme.colors.blue[6]} />
                    </ActionIcon>

                </Group>
            </Group>
        </Card>
    );
}
