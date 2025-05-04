import { Stack, NavLink } from '@mantine/core';
import {
    IconDatabase,
    IconSearch,
    IconFilter,
    IconChartBar,
} from '@tabler/icons-react';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export default function LeftSidebar() {
    const navigate = useNavigate();
    const { location } = useRouterState();
    const path = location.pathname;

    return (
        <Stack gap="xs" p="md">
            <NavLink
                label="Datasets"
                leftSection={<IconDatabase size={16} />}
                active={path.startsWith('/datasets')}
                onClick={() => navigate({ to: '/datasets' })}
            />
            <NavLink
                label="Exploration"
                leftSection={<IconSearch size={16} />}
                active={path.startsWith('/exploration')}
                onClick={() => navigate({ to: '/exploration' })}
            />
            <NavLink
                label="Sampling"
                leftSection={<IconFilter size={16} />}
                active={path.startsWith('/sampling')}
                onClick={() => navigate({ to: '/sampling' })}
            />
            <NavLink
                label="Outputs"
                leftSection={<IconChartBar size={16} />}
                active={path.startsWith('/output')}
                onClick={() => navigate({ to: '/output' })}
            />
        </Stack>
    );
}
