import type { Role } from '../context/AuthContext';

export const can = {
    upload: (role: Role) => ['admin', 'developer'].includes(role),
    delete: (role: Role) => ['admin'].includes(role),
    download: (role: Role) => ['admin', 'developer', 'analyst'].includes(role),
    explore: (role: Role) => ['admin', 'developer', 'analyst'].includes(role),
    view: () => true, // everyone can view
};

