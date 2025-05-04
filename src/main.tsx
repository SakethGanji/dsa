// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { PageBackground } from './PageBackground'; // ✅
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ColorSchemeScript defaultColorScheme="dark" />
        <MantineProvider defaultColorScheme="dark">
            <PageBackground /> {/* ✅ Applies background color only to body */}
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </MantineProvider>
    </React.StrictMode>
);
