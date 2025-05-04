import { AppShell } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';
import LeftSidebar from './components/LeftSidebar';

export default function App() {
    return (
        <AppShell
            padding="md"
            navbar={{
                width: 80,
                breakpoint: 'xs',
                collapsed: { mobile: false },
            }}
        >
            <AppShell.Navbar>
                <LeftSidebar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
