// src/PageBackground.tsx
import { Global } from '@mantine/emotion';
import { useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function PageBackground() {
    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();

    const backgroundColor =
        colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[1];

    return (
        <Global
            styles={{
                body: {
                    backgroundColor,
                    margin: 0,
                    padding: 0,
                    transition: 'background-color 0.3s ease',
                },
            }}
        />
    );
}
