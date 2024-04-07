export const ADMIN_ROUTE = '/admin';

const ROUTES = [
    {
        name: 'Dashboard',
        icon: 'rectangle-history-circle-user-regular',
        links: [
            {name: 'Admin', path: '/'},
           
        ]
    },
    {
        name: 'Products',
        icon: 'boxes-stacked-regular',
        links: [
            {name: 'Products Management', path: '/products'},
        ]
    },
    
    {
        name: 'Settings',
        icon: 'gear-regular',
        path: '/settings'
        
    }
]

export default ROUTES