import { Group, Title, ActionIcon, Flex } from '@mantine/core';
import { IconSun, IconMoon, IconSettings } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';

export default function TopNavBar() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Flex justify="space-between" align="center" px="md" h="100%">
            <Title order={4}>Datasets</Title>

            <Group gap="xs">
                <ActionIcon variant="subtle" onClick={toggleColorScheme}>
                    {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
                </ActionIcon>
                <ActionIcon variant="subtle">
                    <IconSettings size={18} />
                </ActionIcon>
            </Group>
        </Flex>
    );
}
