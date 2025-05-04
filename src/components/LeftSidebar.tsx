import {
    IconTable,
    IconBinaryTree2,
    IconChartBar,
    IconSettings,
    IconLogout,
    IconMoon,
    IconSun,
    IconChartArcs,
    IconChartDots
} from '@tabler/icons-react';
import {
    Center,
    Stack,
    Tooltip,
    UnstyledButton,
    useMantineColorScheme,
} from '@mantine/core';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
    icon: React.FC<{ size: number }>;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton
                onClick={onClick}
                className={classes.link}
                data-active={active || undefined}
            >
                <Icon size={25} />
            </UnstyledButton>
        </Tooltip>
    );
}

export default function LeftSidebar() {
    const navigate = useNavigate();
    const { location } = useRouterState();
    const path = location.pathname;
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <nav className={classes.navbar}>
            <Center>
                <div className={classes.logo}>
                    <IconChartArcs size={25} stroke={2} color="white" />
                </div>
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    <NavbarLink
                        icon={IconTable}
                        label="Datasets"
                        active={path.startsWith('/datasets')}
                        onClick={() => navigate({ to: '/datasets' })}
                    />
                    <NavbarLink
                        icon={IconChartDots}
                        label="Exploration"
                        active={path.startsWith('/exploration')}
                        onClick={() => navigate({ to: '/exploration' })}
                    />
                    <NavbarLink
                        icon={IconBinaryTree2}
                        label="Sampling"
                        active={path.startsWith('/sampling')}
                        onClick={() => navigate({ to: '/sampling' })}
                    />
                    <NavbarLink
                        icon={IconChartBar}
                        label="Outputs"
                        active={path.startsWith('/output')}
                        onClick={() => navigate({ to: '/output' })}
                    />
                </Stack>
            </div>

            <div className={classes.navbarFooter}>
                <Stack justify="center" gap={0}>
                    <NavbarLink
                        icon={IconSettings}
                        label="Settings"
                        onClick={() => navigate({ to: '/settings' })}
                    />
                    <NavbarLink
                        icon={colorScheme === 'dark' ? IconSun : IconMoon}
                        label="Toggle Theme"
                        onClick={toggleColorScheme}
                    />
                    <NavbarLink icon={IconLogout} label="Logout" onClick={() => {/* logout logic */}} />
                </Stack>
            </div>
        </nav>
    );
}
