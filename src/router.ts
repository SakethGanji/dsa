import {
    createRouter,
    createRootRoute,
    createRoute,
} from '@tanstack/react-router';
import App from './App';
import DatasetsPage from './pages/DatasetsPage';
import ExplorationPage from './pages/ExplorationPage';
import SamplingPage from './pages/SamplingPage';
import OutputPage from './pages/OutputPage';

const rootRoute = createRootRoute({ component: App });

const datasetsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/datasets',
    component: DatasetsPage,
});

const explorationRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/exploration',
    component: ExplorationPage,
});

const samplingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sampling',
    component: SamplingPage,
});

const outputRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/output',
    component: OutputPage,
});

const routeTree = rootRoute.addChildren([
    datasetsRoute,
    explorationRoute,
    samplingRoute,
    outputRoute,
]);

export const router = createRouter({ routeTree });
