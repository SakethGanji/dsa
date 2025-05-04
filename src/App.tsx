// src/App.tsx
import { AppShell } from '@mantine/core';
import { Outlet } from '@tanstack/react-router';
import TopNavBar from './components/TopNavBar';
import LeftSidebar from './components/LeftSidebar';

export default function App() {
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 250, breakpoint: 'xs', collapsed: { mobile: false } }}
            padding="md"
        >
            <AppShell.Header>
                <TopNavBar />
            </AppShell.Header>

            <AppShell.Navbar>
                <LeftSidebar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet /> {/* Render routed content */}
            </AppShell.Main>
        </AppShell>
    );
}